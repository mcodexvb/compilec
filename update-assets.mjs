// Refreshes the compiler files (clang/ and vendor/) from the npm package.
// Run `npm install` first, then `npm run update-assets`. The files are committed so that the
// repository root can be served directly (GitHub Pages or Cloudflare Pages with no build step).
import { cp, mkdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { build } from 'esbuild';

const pkgDir = path.resolve('node_modules/@live-codes/clang-wasm');
await rm('clang', { recursive: true, force: true });
await mkdir('vendor', { recursive: true });
execFileSync(process.execPath, [path.join(pkgDir, 'bin/copy-assets.mjs'), 'clang'], { stdio: 'inherit' });
execFileSync('python3', ['prepare-c-sysroot.py', 'clang'], { stdio: 'inherit' });
// Build against the lockfile's LLVM runtime, which links C without the C++ libraries.
await build({
  entryPoints: [path.join(pkgDir, 'src/toolchain.js')],
  bundle: true,
  minify: true,
  format: 'iife',
  globalName: 'clangWasmToolchain',
  target: ['es2020'],
  outfile: 'vendor/clang-wasm-toolchain.global.js',
  legalComments: 'none'
});
await cp(path.join(pkgDir, 'THIRD-PARTY-NOTICES.md'), 'THIRD-PARTY-NOTICES.md');
console.log('Updated clang/ and vendor/');
