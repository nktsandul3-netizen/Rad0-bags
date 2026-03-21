// Сервис-воркер для PWA на iPhone (кэш при повторных посещениях)
const CACHE_NAME = 'rado-bags-v1';

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    fetch(e.request)
      .then(function (res) {
        var clone = res.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(e.request, clone);
        });
        return res;
      })
      .catch(function () {
        return caches.match(e.request);
      })
  );
});
