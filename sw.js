/* Evich Case Tracker service worker — offline shell */
const CACHE = "evich-tracker-v45-20260729";
const PRECACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon-32.png",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/PWA_CASE-MGTM_Image-Jul-24-2026.png",
  "/guide-engine.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Network-first for Firebase / AI APIs; cache-first for app shell
  if (
    url.hostname.includes("googleapis.com") ||
    url.hostname.includes("firebaseio.com") ||
    url.hostname.includes("firestore.googleapis.com") ||
    url.hostname.includes("gstatic.com") ||
    url.hostname.includes("api.anthropic.com") ||
    url.hostname.includes("api.openai.com") ||
    url.hostname.includes("api.x.ai") ||
    url.hostname.includes("generativelanguage") ||
    url.hostname.includes("perplexity")
  ) {
    return;
  }
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetched = fetch(req)
        .then((res) => {
          if (res && res.ok && url.origin === self.location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || fetched;
    }),
  );
});
