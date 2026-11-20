// Keeps C Lab working offline after the first visit.
// Small files are refreshed from the network when possible; the compiler files never change
// for a given version, so they are served from the cache once stored.
const VERSION = 'clab-v5';
const SHELL = ['./', 'index.html', 'style.css', 'app.js', 'worker.js', 'vendor/editor.js',
  'vendor/clang-wasm-toolchain.global.js', 'manifest.webmanifest', 'icon.svg', 'examples/examples.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  const heavy = /\/(clang|fonts)\//.test(url.pathname);
  if (heavy) {
    e.respondWith(caches.open(VERSION).then(async (c) => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok && res.status === 200) c.put(req, res.clone());
      return res;
    }));
  } else {
    e.respondWith(fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true })));
  }
});
