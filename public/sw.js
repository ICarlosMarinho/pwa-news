const cacheName = "cache-v1";
const resourcesToPrecache = ["index.html"];

self.addEventListener("install", (evt) => {
  console.log("Install event");

  evt.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(resourcesToPrecache))
      .catch((error) => console.log("Error on cache resource: ", error))
  );
});

self.addEventListener("activate", (evt) => {
  console.log("Activate event");
});

self.addEventListener("fetch", (evt) => {
  console.log("Fetch intercepted: ", evt.request);

  evt.respondWith(
    caches.match(evt.request).then((cachedResource) => {
      if (cachedResource) return cachedResource;
      else {
        return fetch(evt.request).then((response) => {
          caches.open(cacheName).then((cache) => {
            cache.put(evt.request, response.clone());

            return response;
          });
        });
      }
    })
  );
});
