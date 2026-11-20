# compilec

C Lab: write, compile and run C programs in the browser. Clang 22 runs inside the page as WebAssembly (through [`@live-codes/clang-wasm`](https://www.npmjs.com/package/@live-codes/clang-wasm), MIT), so nothing is sent to a server.

## How it works

- The compiler (about 29 MB compressed) is fetched only when a visitor first presses Run, and is then cached by the browser.
- Compilation and execution happen in a Web Worker, so the page stays responsive. The Stop button ends a runaway program.
- Standard input is supplied from the "Input for scanf" box. The 15 numerical-analysis programs from the DSCC-15 notes are included as examples, and `?example=07-bisection` opens one directly.
- The compiler files (`clang/`, `vendor/`, about 29 MB) are committed, so the repository root is the whole site and needs no build step.

## Hosting

The site is plain static files at the repository root.

- **GitHub Pages:** Settings, Pages, deploy from branch `main`, folder `/ (root)`.
- **Cloudflare Pages:** connect the repository, leave the build command empty and set the build output directory to `/` (or `.`). Every file is below the 25 MiB Pages limit; the largest is the 15 MB `clang.wasm.gz`.

To update the compiler later: `npm install`, then `npm run update-assets`, and commit the result.

## Licence

The code in this repository is MIT licensed. The bundled compiler runtime is covered by the licences in `THIRD-PARTY-NOTICES.md` (LLVM, wasi-libc and others).
