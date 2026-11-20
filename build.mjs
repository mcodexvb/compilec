// Builds the static site into dist/.
// The Clang runtime (about 29 MB) is copied from the npm package at build time, so it is
// never committed to the repository.
import { cp, mkdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const pkgDir = path.resolve('node_modules/@live-codes/clang-wasm');

await rm('dist', { recursive: true, force: true });
await mkdir('dist/vendor', { recursive: true });
await cp('public', 'dist', { recursive: true });
execFileSync(process.execPath, [path.join(pkgDir, 'bin/copy-assets.mjs'), 'dist/clang'], { stdio: 'inherit' });
await cp(path.join(pkgDir, 'dist/clang-wasm.global.js'), 'dist/vendor/clang-wasm.global.js');
await cp(path.join(pkgDir, 'THIRD-PARTY-NOTICES.md'), 'dist/THIRD-PARTY-NOTICES.md');
console.log('Built dist/');
