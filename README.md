<p><img src="brand/logo-wordmark.svg" alt="C Lab" height="110"></p>

# compilec

C Lab: an online C editor and compiler. Clang 22 runs inside the page as WebAssembly (through [`@live-codes/clang-wasm`](https://www.npmjs.com/package/@live-codes/clang-wasm), MIT), so nothing is sent to a server.

## What it offers

- A code editor (CodeMirror 6) with C syntax highlighting, line numbers, bracket matching, code folding, undo and redo, and adjustable text size.
- Compiler errors are marked in the editor and listed under Output; clicking one jumps to the line.
- **Input and output files.** Add files under Files (or drop them on the page, or create one in the browser) and the program finds them with `fopen("data.txt", "r")`. Files the program writes appear under Output, where they can be viewed, downloaded, used as input for the next run.
- **Command-line arguments**, passed to `main` as `argv`.
- **Menu bar** like a desktop IDE: File, Edit, Search, View, Execute (compile and run, compile only, stop), Examples, Tools (compiler options, warnings level) and Help, with keyboard shortcuts such as F9, F10, Ctrl+S and Ctrl+F.
- **Programs to enjoy.** Sixteen short programs under Examples, Programs to enjoy, show what C can do: the Mandelbrot set, the Game of Life, Sierpinski's triangle, the Lorenz butterfly, a dice histogram, a spiral matrix, a Caesar cipher, a number-guessing game, Monte Carlo estimation of pi, the Ulam prime spiral, the logistic bifurcation diagram, predators and prey, the eight queens puzzle, 100 digits of pi, the Collatz problem and Roman numerals.
- **Tabs.** Keep several programs open at once. Each tab has its own code, input and undo history, and all tabs are kept in the browser between visits. **+** (or File, New tab) opens a blank tab, double-click a tab to rename it, and the cross closes it. Examples, opened files and shared links open in a new tab when the current one holds your own work, so nothing is overwritten. Up to 12 tabs; a share link carries the current tab.
- **Autocomplete like VS Code.** Suggestions appear as you type: keywords, types, snippets (`for`, `if`, `main`...), standard-library functions with their signatures, the names in your own program, header names after `#include <`, and format codes after `%` inside a string. Tab or Enter accepts, Ctrl+Space opens the list, and choosing a library function adds its missing `#include` (for example `<math.h>` for `sqrt`, `<stdbool.h>` for `bool`). Switch it off under Edit, Autocomplete suggestions (useful for tests).
- **Adjustable windows.** Drag the dividers (or focus one and use the arrow keys) to resize the editor, input and output panels; double-click a divider to reset it. Layout can be side by side or stacked, and any panel can be enlarged.
- **Made for phones.** On a narrow screen the panels become pages (Code, Input, Output) with a tab bar, a row of symbol keys for typing C, and large touch targets.
- Choice of optimisation level and C standard, opening and saving `.c` files, a share link that carries the code and input, and your last program is kept in the browser.
- Installable and usable offline after the first build in each language.

## How it works

- A first C build downloads about 25 MB of compiler assets. Selecting C++ uses the same compiler and linker. Its extra headers and libraries (about 4 MB) download only on the first C++ build. The browser and service worker cache the files for later runs.
- Use **Install** to add CLab to the home screen. On iPhone and iPad, Safari provides **Share → Add to Home Screen**. Build a program once in each language before using that language offline.
- Compilation and execution happen in a Web Worker, so the page stays responsive. Output is streamed as the program prints. The Stop button ends a runaway program.
- Programs run in a private in-memory folder: the files you add are placed there before the run and the files the program writes are read back afterwards. Nothing leaves the device.
- Leave **Prepared input** empty and the program behaves like a terminal: prompts such as `printf("Enter n: ")` appear at once (standard output is unbuffered when `<stdio.h>` is included), and an input line appears right after the prompt, where you type and press Enter. Ctrl+D or **Send EOF** ends the input stream. **Send EOF** ends the input stream. For a repeatable run, supply the complete input before pressing Run. The 18 numerical and file examples still open directly, for example with `?example=07-bisection`. The 25 sample problems of the C course are in the Examples menu under **Sample problems** (for example `?example=prob-18-prime-check`), and eleven further `learn-` programs go with the tutorial lessons.
- The [C programming tutorial](tutorial/) starts with a first program and builds toward tables, number patterns, and a data summary project. Every C17 lesson includes a coding task and a short quiz. **Try it in CLab** opens a temporary practice workspace. Download a practice program to keep your edits. The tutorial now covers the whole syllabus, from computers and compilers through decisions, loops, arrays, strings, functions and the library, and ends with the 25 sample problems and their solutions. Fuller lecture notes for the same course are at [mainul.pages.dev](https://mainul.pages.dev/notes/cprog/).
- The compiler files (`clang/` and `vendor/`) are committed, so the repository root is the whole site and needs no build step.

## Hosting

The site is plain static files at the repository root.

- **GitHub Pages:** Settings, Pages, deploy from branch `main`, folder `/ (root)`.
- **Cloudflare Pages:** connect the repository, leave the build command empty and set the build output directory to `/` (or `.`). Every file is below the 25 MiB Pages limit; the largest is the 15 MB `clang.wasm.gz`.

Live standard input needs a browser with cross-origin isolation. Cloudflare Pages uses the supplied `_headers`. On GitHub Pages or another static host without those headers, reload once the service worker is ready. The Input panel provides a reload button when needed. Prepared input remains available if the browser cannot enable live input.

To rebuild the editor bundle after changing `src/editor.js`: `npm install`, then `npm run build-editor`.

To update the compiler later (requires Python 3.9+): `npm install`, then `npm run update-assets`, and commit the result.

## Logo

A hexagonal C in a blue-to-cyan gradient holding `</>`, with the CLab wordmark set in Montserrat ExtraBold (converted to outlines, so no font is needed). `icon.svg` is the mark and favicon and switches its dark parts to light grey in dark mode; `brand/` has the full wordmark with tagline, the header lockup, a white-tile app icon, and PNG sizes 32, 180, 192 and 512.

## Licence

The code in this repository is MIT licensed. The bundled compiler runtime is covered by the licences in `THIRD-PARTY-NOTICES.md` (LLVM, wasi-libc and others).
