const CACHE_NAME = "bearcrest-crm-v13-0-0";
const APP_SHELL = [
  "./", "./index.html", "./styles.css?v=13.0.0", "./config.js?v=13.0.0",
  "./app.js?v=13.0.0", "./auth.js?v=13.0.0", "./v11.js?v=13.0.0",
  "./manifest.json?v=13.0.0", "./bcf-logo.png"
];
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
});
self.addEventListener("activate", event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))),
    self.clients.claim()
  ]));
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const isFreshFile = event.request.mode === "navigate" || /\/(index\.html|config\.js|service-worker\.js)$/.test(url.pathname);
  if (isFreshFile) {
    event.respondWith(fetch(event.request, {cache:"no-store"}).then(response => {
      const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy)); return response;
    }).catch(()=>caches.match(event.request).then(r=>r||caches.match("./index.html"))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy)); return response;
  })));
});
