"""Split the pinned sysroot into the shared C base and an optional C++ archive."""

import gzip
import hashlib
import json
from pathlib import Path
import sys
import tarfile


def keep(member):
    name = member.name.removeprefix("./")
    # The runtime installs compatibility headers into the existing directories.
    return (
        (member.isdir() or not name.startswith("include/c++/"))
        and name not in {"lib/wasm32-wasi/libc++.a", "lib/wasm32-wasi/libc++abi.a"}
    )


def pack(root, source, label, select):
    staging = root / f"bin/{label}.tar.gz"
    with tarfile.open(root / source, "r:gz") as upstream, staging.open("wb") as raw:
        with gzip.GzipFile(filename="", fileobj=raw, mode="wb", mtime=0) as compressed:
            with tarfile.open(fileobj=compressed, mode="w") as target:
                for member in upstream:
                    if select(member):
                        target.addfile(member, upstream.extractfile(member) if member.isfile() else None)

    data = staging.read_bytes()
    digest = hashlib.sha256(data).hexdigest()
    destination = f"bin/{label}-{digest[:12]}.tar.gz"
    staging.replace(root / destination)

    print(f"Prepared {destination} ({len(data):,} bytes)")
    return destination, {"bytes": len(data), "sha256": digest}


def main(root):
    source = "bin/sysroot.tar.gz"
    c_path, c_receipt = pack(root, source, "c-sysroot", keep)
    cpp_path, cpp_receipt = pack(root, source, "cpp-addon", lambda member: not keep(member))

    manifest_path = root / "runtime-manifest.v1.json"
    manifest = json.loads(manifest_path.read_text())
    manifest["compiler"]["sysroot"]["profiles"] = {
        "c": {"asset": c_path},
        "cppAddon": {"asset": cpp_path},
    }
    manifest_bytes = (json.dumps(manifest, indent=2) + "\n").encode()
    manifest_path.write_bytes(manifest_bytes)

    receipts_path = root / "asset-receipts.json"
    receipts = json.loads(receipts_path.read_text())
    receipts[manifest_path.name] = {
        "bytes": len(manifest_bytes),
        "sha256": hashlib.sha256(manifest_bytes).hexdigest(),
    }
    receipts.update({c_path: c_receipt, cpp_path: cpp_receipt})
    receipts_path.write_text(json.dumps(receipts, indent=2) + "\n")


if __name__ == "__main__":
    main(Path(sys.argv[1]))
