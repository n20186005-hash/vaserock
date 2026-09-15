// =============================================================================
// Vase Rock PWA Service Worker
// 提供离线缓存与基础网络回退能力，确保在没有网络时仍可读取页面与图片。
// =============================================================================

const CACHE_VERSION = "vaserock-v1";
const PRECACHE_URLS = [
  "/",
  "/map/",
  "/from-baisha-port/",
  "/best-time/",
  "/tide-guide/",
  "/photo-guide/",
  "/snorkeling/",
  "/safety/",
  "/faq/",
  "/about/",
  "/manifest.webmanifest",
  "/favicon.svg",
  "/images/vase-rock-hero.webp",
  "/images/vase-rock-water.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // 导航请求：网络优先，离线时回退到首页缓存
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match("/"))
        )
    );
    return;
  }

  // 静态资源：缓存优先，缺失时回退到网络并填充缓存
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          if (response.ok && (response.type === "basic" || response.type === "default")) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match("/images/vase-rock-hero.webp"));
    })
  );
});