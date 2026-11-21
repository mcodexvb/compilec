// Small files are refreshed from the network when possible. Compiler assets
// stay in the existing cache so this update does not make users download them again.
const VERSION = 'clab-v7';
const SHELL = ['./', 'index.html', 'style.css', 'theme.js', 'app.js', 'worker.js', 'vendor/editor.js',
  'manifest.webmanifest', 'icon.svg', 'brand/favicon-v2.svg',
  'brand/logo-header.svg', 'brand/icon-192.png', 'brand/icon-512.png', 'brand/touch-v2-180.png', 'brand/logo-wordmark.svg', 'examples/examples.json', 'tutorial/',
  'tutorial/tutorial.css', 'tutorial/tutorial.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then(async (cache) => {
    await cache.addAll(SHELL);
    const examples = await (await cache.match('examples/examples.json')).json();
    await cache.addAll(examples.filter((e) => e.id.startsWith('learn-')).map((e) => 'examples/' + e.id + '.c'));
    await self.skipWaiting();
  }));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

// Static hosts without custom headers can isolate CLab once this service worker
// controls the page. The worker response also needs the embedder policy.
function isolate(response, request) {
  if (!response?.ok || (request.mode !== 'navigate' && request.destination !== 'worker') ||
      (response.headers.get('Cross-Origin-Opener-Policy') === 'same-origin' &&
       response.headers.get('Cross-Origin-Embedder-Policy') === 'require-corp')) return response;
  const headers = new Headers(response.headers);
  headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  const heavy = /\/(clang\/bin|fonts)\//.test(url.pathname);
  if (heavy) {
    e.respondWith(caches.open(VERSION).then(async (c) => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok && res.status === 200) e.waitUntil(c.put(req, res.clone()).catch(() => {}));
      return res;
    }));
  } else {
    // Existing installations may have cached the old manifest with an immutable HTTP TTL.
    const options = url.pathname.endsWith('/clang/runtime-manifest.v1.json') ? { cache: 'no-cache' } : undefined;
    e.respondWith(fetch(req, options).then((res) => {
      if (res.ok) {
        const copy = res.clone();
        e.waitUntil(caches.open(VERSION).then((c) => c.put(req, copy)).catch(() => {}));
      }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true })).then((res) => isolate(res, req)));
  }
});
