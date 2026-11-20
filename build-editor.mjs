// Bundles src/editor.js (CodeMirror 6) into vendor/editor.js. The bundle is committed.
import { build } from 'esbuild';
await build({
  entryPoints: ['src/editor.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  globalName: 'CEditor',
  target: ['es2020'],
  outfile: 'vendor/editor.js',
  legalComments: 'none'
});
console.log('Built vendor/editor.js');
