const CACHE_NAME = 'vaultstock-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});
