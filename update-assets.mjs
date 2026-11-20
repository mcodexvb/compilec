// Refreshes the compiler files (clang/ and vendor/) from the npm package.
// Run `npm install` first, then `npm run update-assets`. The files are committed so that the
// repository root can be served directly (GitHub Pages or Cloudflare Pages with no build step).
import { cp, mkdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const pkgDir = path.resolve('node_modules/@live-codes/clang-wasm');
await rm('clang', { recursive: true, force: true });
await mkdir('vendor', { recursive: true });
execFileSync(process.execPath, [path.join(pkgDir, 'bin/copy-assets.mjs'), 'clang'], { stdio: 'inherit' });
await cp(path.join(pkgDir, 'dist/clang-wasm-toolchain.global.js'), 'vendor/clang-wasm-toolchain.global.js');
await cp(path.join(pkgDir, 'THIRD-PARTY-NOTICES.md'), 'THIRD-PARTY-NOTICES.md');
console.log('Updated clang/ and vendor/');
