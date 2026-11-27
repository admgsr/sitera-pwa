const CACHE_NAME = "sitera-v2";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener("fetch", event => {
  // Tidak menyimpan halaman aplikasi atau data pasien ke cache.
  // Permintaan diteruskan langsung ke jaringan.
});
