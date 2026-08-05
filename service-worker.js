const CACHE_NAME = "bearcrest-crm-v11-1-0";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=11.1.0",
  "./config.js?v=11.1.0",
  "./app.js?v=11.1.0",
  "./auth.js?v=11.1.0",
  "./v11.js?v=11.1.0",
  "./manifest.json?v=11.1.0",
  "./bcf-logo.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      })
      .catch(() => caches.match(request))
  );
});
