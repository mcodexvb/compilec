// Runs the compiler off the main thread so the page stays responsive.
importScripts('vendor/clang-wasm.global.js');

let compilerPromise = null;

function getCompiler() {
  if (!compilerPromise) {
    const baseUrl = new URL('clang/', self.location.href).href;
    compilerPromise = self.clangWasm.createCompiler('c', {
      baseUrl,
      std: 'gnu17',
      onProgress: (value) => self.postMessage({ type: 'progress', value })
    });
    compilerPromise.catch(() => { compilerPromise = null; });
  }
  return compilerPromise;
}

self.onmessage = async (event) => {
  const msg = event.data;
  try {
    if (msg.type === 'load') {
      await getCompiler();
      self.postMessage({ type: 'ready' });
    } else if (msg.type === 'run') {
      const compiler = await getCompiler();
      self.postMessage({ type: 'ready' });
      const result = await compiler.run(msg.code, msg.input, { compileArgs: msg.flags });
      self.postMessage({ type: 'result', result });
    }
  } catch (error) {
    self.postMessage({ type: 'failure', message: String((error && error.message) || error) });
  }
};
