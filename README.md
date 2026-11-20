<p><img src="brand/logo-wordmark.svg" alt="C Lab" height="72"></p>

# compilec

C Lab: an online C editor and compiler. Clang 22 runs inside the page as WebAssembly (through [`@live-codes/clang-wasm`](https://www.npmjs.com/package/@live-codes/clang-wasm), MIT), so nothing is sent to a server.

## What it offers

- A code editor (CodeMirror 6) with C syntax highlighting, line numbers, bracket matching, code folding, undo and redo, and adjustable text size.
- Compiler errors are marked in the editor and listed under Output; clicking one jumps to the line.
- **Input and output files.** Add files under Files (or drop them on the page, or create one in the browser) and the program finds them with `fopen("data.txt", "r")`. Files the program writes appear under Output, where they can be viewed, downloaded, used as input for the next run.
- **Command-line arguments**, passed to `main` as `argv`.
- **Menu bar** like a desktop IDE: File, Edit, Search, View, Execute (compile and run, compile only, stop), Examples, Tools (compiler options, warnings level) and Help, with keyboard shortcuts such as F9, F10, Ctrl+S and Ctrl+F.
- **Adjustable windows.** Drag the dividers (or focus one and use the arrow keys) to resize the editor, input and output panels; double-click a divider to reset it. Layout can be side by side or stacked, and any panel can be enlarged.
- **Made for phones.** On a narrow screen the panels become pages (Code, Input, Output) with a tab bar, a row of symbol keys for typing C, and large touch targets.
- Choice of optimisation level and C standard, opening and saving `.c` files, a share link that carries the code and input, and your last program is kept in the browser.
- Installable and usable offline after the first visit.

## How it works

- The compiler (about 29 MB compressed) is fetched only when a visitor first presses Run, and is then cached by the browser (and by a service worker, so it also works offline).
- Compilation and execution happen in a Web Worker, so the page stays responsive. Output is streamed as the program prints. The Stop button ends a runaway program.
- Programs run in a private in-memory folder: the files you add are placed there before the run and the files the program writes are read back afterwards. Nothing leaves the device.
- Standard input is supplied from the Input box before the run (a program cannot wait for keyboard input while it runs). The 15 numerical-analysis programs from the DSCC-15 notes are included as examples, with three more that show files and tables, and `?example=07-bisection` opens one directly.
- The compiler files (`clang/`, `vendor/`, about 29 MB) are committed, so the repository root is the whole site and needs no build step.

## Hosting

The site is plain static files at the repository root.

- **GitHub Pages:** Settings, Pages, deploy from branch `main`, folder `/ (root)`.
- **Cloudflare Pages:** connect the repository, leave the build command empty and set the build output directory to `/` (or `.`). Every file is below the 25 MiB Pages limit; the largest is the 15 MB `clang.wasm.gz`.

To rebuild the editor bundle after changing `src/editor.js`: `npm install`, then `npm run build-editor`.

To update the compiler later: `npm install`, then `npm run update-assets`, and commit the result.

## Logo

The mark is a C whose opening holds a Run button, in the page's blue (#1f3f8f) with amber (#f2b632). `icon.svg` is the app icon and favicon; `brand/` has the wordmark and PNG sizes (32, 180, 192, 512).

## Licence

The code in this repository is MIT licensed. The bundled compiler runtime is covered by the licences in `THIRD-PARTY-NOTICES.md` (LLVM, wasi-libc and others).
