// Runs the compiler off the main thread so the page stays responsive.
// It uses the low-level toolchain so that a program can be given a virtual folder of files
// (for fopen) and the files it writes can be read back afterwards.
importScripts('vendor/clang-wasm-toolchain.global.js');

const T = self.clangWasmToolchain;
let toolchainPromise = null;

function getToolchain() {
  if (!toolchainPromise) {
    const baseUrl = new URL('clang/', self.location.href).href;
    toolchainPromise = T.createToolchain({
      baseUrl,
      onProgress: (value) => self.postMessage({ type: 'progress', value })
    });
    toolchainPromise.catch(() => { toolchainPromise = null; });
  }
  return toolchainPromise;
}

const ansi = /\u001b\[[0-9;]*[A-Za-z]/g;

// Program output is sent in batches so a program that prints a great deal does not flood the page.
let buf = '', bufErr = false, lastFlush = 0;
function flush() {
  if (buf) self.postMessage({ type: 'out', text: buf, err: bufErr });
  buf = '';
  lastFlush = Date.now();
}
function emit(text, err) {
  if (buf && err !== bufErr) flush();
  bufErr = err;
  buf += text.replace(ansi, '');
  if (buf.length > 4096 || Date.now() - lastFlush > 60) flush();
}

function liveInput(buffer) {
  const signal = new Int32Array(buffer, 0, 1);
  const bytes = new Uint8Array(buffer, Int32Array.BYTES_PER_ELEMENT);
  return () => {
    if (Atomics.load(signal, 0) === -1) return null;
    flush();
    self.postMessage({ type: 'input' });
    Atomics.wait(signal, 0, 0);
    const length = Atomics.load(signal, 0);
    if (length === -1) return null;
    const line = bytes.slice(0, length);
    Atomics.store(signal, 0, 0);
    return line;
  };
}

// Collects every file in the program's folder (not /tmp) as { path, bytes }.
function collect(dir, prefix, out) {
  for (const [name, node] of dir.contents) {
    const p = prefix + '/' + name;
    if (node && node.contents instanceof Map) {
      if (p !== '/tmp') collect(node, p, out);
    } else if (node && node.data) {
      out.push({ path: p, bytes: new Uint8Array(node.data) });
    }
  }
}

async function runProgram(msg) {
  const tc = await getToolchain();
  self.postMessage({ type: 'ready' });
  return tc.lock(async () => {
    const started = performance.now();
    const compiled = await tc.captureCompilerOutput(() =>
      tc.runtime.compileArtifact(msg.code, {
        language: 'C',
        fileName: 'main.c',
        compileArgs: [...T.CLANG_DRIVER_DEFAULT_ARGS, ...msg.flags]
      })
    );
    const compileMs = Math.round(performance.now() - started);
    const warnings = T.compilerDiagnostics(compiled.raw || '');
    if (compiled.error) {
      const errors = T.compilerDiagnostics(compiled.raw);
      if (!errors.length) errors.push(String((compiled.error && compiled.error.message) || compiled.error));
      return { errors, compileMs, exitCode: null, files: [] };
    }
    if (msg.compileOnly) return { errors: [], warnings, compileOnly: true, compileMs, exitCode: null, files: [] };
    self.postMessage({ type: 'running', compileMs });

    let host = null;
    let input = msg.input || '';
    const files = (msg.files || []).map((f) => ({ path: '/' + f.name, contents: new Uint8Array(f.bytes) }));
    const runStarted = performance.now();
    let exitCode = null, crash = '';
    try {
      const r = await tc.execute(compiled.result, {
        args: msg.args || [],
        files,
        stdin: msg.inputBuffer ? liveInput(msg.inputBuffer) : () => {
          const text = input;
          input = null;
          return text || null;
        },
        stdout: (c) => emit(c, false),
        stderr: (c) => emit(c, true),
        extraImports: (ctx) => { host = ctx.host; return {}; }
      });
      exitCode = r.exitCode;
    } catch (e) {
      crash = String((e && e.message) || e);
    }
    flush();
    const runMs = Math.round(performance.now() - runStarted);
    const out = [];
    if (host) collect(host.rootDirectory, '', out);
    return { errors: [], warnings, compileMs, runMs, exitCode, crash, files: out };
  });
}

self.onmessage = async (event) => {
  const msg = event.data;
  try {
    if (msg.type === 'load') {
      await getToolchain();
      self.postMessage({ type: 'ready' });
    } else if (msg.type === 'run') {
      const result = await runProgram(msg);
      const transfer = result.files.map((f) => f.bytes.buffer);
      self.postMessage({ type: 'result', result }, transfer);
    }
  } catch (error) {
    self.postMessage({ type: 'failure', message: String((error && error.message) || error) });
  }
};
