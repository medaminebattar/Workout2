/* ==========================================================================
   Service Worker — Asymétrie · Suivi
   Stratégie : cache-first pour la coquille de l'app (fonctionnement hors ligne
   total), avec mise à jour en arrière-plan.
   Change CACHE_VERSION à chaque modification de l'app pour forcer la MAJ.
   ========================================================================== */
const CACHE_VERSION = 'asym-v1.4.0';

const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-32.png'
];

/* ---------- Installation : pré-cache de la coquille ---------- */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] précache partiel', err))
  );
});

/* ---------- Activation : purge des anciens caches ---------- */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ---------- Requêtes ---------- */
self.addEventListener('fetch', e => {
  const req = e.request;

  // On ne gère que les GET de même origine
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // Navigation : réseau d'abord (pour récupérer une MAJ), repli sur le cache
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Ressources : cache d'abord, réseau en repli, puis mise en cache
  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
    })
  );
});

/* ---------- Message depuis la page (forcer la MAJ) ---------- */
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
