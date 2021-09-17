const CACHE_NAME = "pwa-news";
const urlToChache = ["/", "/index.html"];

this.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache");
        return cache.addAll(urlToChache);
      })
      .catch(console.log)
  );
});

this.addEventListener("active", (evt) => {
  const whiteList = ["pwa-task-manager"];

  evt.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!whiteList.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .catch(console.log)
  );
});

this.addEventListener("fetch", (evt) => {
  console.log("fetch", evt);

  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        return (
          response ||
          fetch(evt.request).then((response) => {
            cache.put(evt.request, response.clone());

            return response;
          })
        );
      });
    })
  );
});
