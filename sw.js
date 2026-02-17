// =====================================================
// sw.js  — しだ検索 Service Worker
// キャッシュバージョンを上げると全ファイルが再取得される
// 属データを追加・更新したときは CACHE_VERSION を変更する
// =====================================================

const CACHE_VERSION = 'v1';
const CACHE_NAME    = `fern-search-${CACHE_VERSION}`;

// インストール時にキャッシュするファイル一覧
const PRECACHE_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './data/genera.js',
  './data/dryopteris.js',
  './data/thelypteris.js',
  './data/polystichum.js',
  './data/athyrium.js',
  './data/asplenium.js',
  './data/pteris.js',
  './data/arachniodes.js',
  // ▼ 新しい属JSを追加したらここにも追加する
];

// ---- インストール: 全ファイルをキャッシュ ----
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_FILES))
      .then(() => self.skipWaiting())  // 即座にアクティブ化
  );
});

// ---- アクティベート: 古いキャッシュを削除 ----
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())  // 即座に全クライアントを制御
  );
});

// ---- フェッチ: キャッシュ優先（オフライン対応）----
// キャッシュにあればそこから返す
// なければネットワークから取得してキャッシュに追加
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // 正常レスポンスのみキャッシュ
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      });
    })
  );
});
