'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1bef705fac1a364f323f4579ce4d0efa",
"assets/AssetManifest.bin.json": "e25877ec84932fa1c07f4b4d175ced67",
"assets/AssetManifest.json": "89767e38c87623b7803c7900c2ef8069",
"assets/assets/images/ChatArc.png": "0f933b95f18e948b16320d8d167d9979",
"assets/assets/images/Female/pat/angry.png": "8564fd3466a311214e2bc1a62f173e2c",
"assets/assets/images/Female/pat/cry.png": "50f5c1feeda27c3e174e3f3e623f7134",
"assets/assets/images/Female/pat/happy.png": "81e627158cabdb8cdd1c919f73fa7605",
"assets/assets/images/Female/pat/like.png": "f3b6cc164fe4663d3cd93f921b5d8d43",
"assets/assets/images/Female/pat/love.png": "73b2cc95aaf4b0dfb54ea96685b3e9a8",
"assets/assets/images/Female/pat/welcome.png": "0a15b3a7364f9300cbfb8349774392cf",
"assets/assets/images/Icon.png": "d2ef10fa8c6bc54740eae07d1f3f1688",
"assets/assets/images/intro.gif": "f0911b7e946b5213f3342e8344c81d2b",
"assets/assets/images/introweb.gif": "213130e7b1eb76d1f89a6185a0470a44",
"assets/assets/images/logo.png": "d996f0719089ac5448ae43baeb32c3ae",
"assets/assets/images/logo1.png": "fa1b04ebb16adfe53fcd51f7003c3294",
"assets/assets/images/Male/pat/angry.png": "b2751521ad3bc1a66a26489199045dae",
"assets/assets/images/Male/pat/happy.png": "3e4429b5e9454646236ac04bae424de5",
"assets/assets/images/Male/pat/like.png": "3e4429b5e9454646236ac04bae424de5",
"assets/assets/images/Male/pat/love.png": "1e1f315514059adebe145cc1ab454be2",
"assets/assets/images/Male/pat/peace.png": "25345913a801931d5673cf735d3134ee",
"assets/assets/images/Male/pat/sad.png": "3b87b60302acfd21707cdbc21c8fcd68",
"assets/assets/images/Male/pat/think.png": "df1b642bba8b18d616b5e046bafb3a95",
"assets/assets/images/notify%2520icon.jpg": "1f4a123078eac66130fbe308596c700a",
"assets/FontManifest.json": "7475626943e8f47e1f4927b2a14cf8c8",
"assets/fonts/MaterialIcons-Regular.otf": "a05dec78f39cf9dd99492fa25fe1631a",
"assets/NOTICES": "55b4840fb0040102c8674ae36b50803c",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "b3cfd6832181cbaa3c98988c49d34641",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "c650b8af21e7e7c5cce27618cd12c849",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "8c25b0b5d468be6705ffa081fc9fbc61",
"icons/Icon-192.png": "4becb8814843e3d4b3edc5ae7df7a6a5",
"icons/Icon-512.png": "97dbf594454967db8894c8a941ae298a",
"icons/Icon-maskable-192.png": "4becb8814843e3d4b3edc5ae7df7a6a5",
"icons/Icon-maskable-512.png": "97dbf594454967db8894c8a941ae298a",
"index.html": "b0556d663a5c36740bd6336240b168a7",
"/": "b0556d663a5c36740bd6336240b168a7",
"main.dart.js": "b8789515e30d8e49306ca2d82da64ac0",
"manifest.json": "d451dea379b0306395bd9ffbffbeea29",
"version.json": "664b6b5c65f941161daa90d20c8c03e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
