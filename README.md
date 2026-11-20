# compilec

C Lab: write, compile and run C programs in the browser. Clang 22 runs inside the page as WebAssembly (through [`@live-codes/clang-wasm`](https://www.npmjs.com/package/@live-codes/clang-wasm), MIT), so nothing is sent to a server.

Live site: https://mhlab.pages.dev

## How it works

- The compiler (about 29 MB compressed) is fetched only when a visitor first presses Run, and is then cached by the browser.
- Compilation and execution happen in a Web Worker, so the page stays responsive. The Stop button ends a runaway program.
- Standard input is supplied from the "Input for scanf" box. The 15 numerical-analysis programs from the DSCC-15 notes are included as examples, and `?example=07-bisection` opens one directly.
- The compiler files are not stored in this repository. `npm run build` copies them from the npm package into `dist/clang`.

## Build and deploy

```
npm install
npm run build       # writes the site to dist/
```

On Cloudflare Pages: connect this repository, set the build command to `npm run build` and the output directory to `dist`, and use the project name `mhlab`.

Every file in `dist` is below the 25 MiB Pages limit (the largest is the 15 MB `clang.wasm.gz`).

## Licence

The code in this repository is MIT licensed. The bundled compiler runtime is covered by the licences in `THIRD-PARTY-NOTICES.md` (LLVM, wasi-libc and others).
