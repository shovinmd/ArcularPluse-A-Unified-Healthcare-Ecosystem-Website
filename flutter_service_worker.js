'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0d0ebe4453d0b68cb1c6fe96ebd2721a",
"assets/AssetManifest.bin.json": "3100ba4a86323b68e4a00373442f279a",
"assets/AssetManifest.json": "2a9b029b122beba8ecdd6202554da4de",
"assets/assets/images/audio/SOS.mp3": "8e37c28f94e3f6634be9888b092d41a1",
"assets/assets/images/ChatArc.png": "0f933b95f18e948b16320d8d167d9979",
"assets/assets/images/Female/doc/angry.png": "699e967581ca21dafd4a6359d419b367",
"assets/assets/images/Female/doc/cry.png": "fd8ca455721a06b7c7d05d7f8eec85d0",
"assets/assets/images/Female/doc/happy.png": "4f9c94f160865dc817e15245a4d1f1e0",
"assets/assets/images/Female/doc/like.png": "d44198e460c815ad34e01f9664be3c68",
"assets/assets/images/Female/doc/love.png": "f3a32ad346f296c0c1bb5ab5483f28b8",
"assets/assets/images/Female/doc/oops.png": "3322395006cd988a81a825483e3bf955",
"assets/assets/images/Female/doc/think.png": "5f572e776eed135cdb819d10e26d41d6",
"assets/assets/images/Female/doc/welcome.png": "db3a376c7e563ec1442476e18dd83140",
"assets/assets/images/Female/hosp/happy.png": "c0f756f0b014f4d00f03a57eba5ae9e8",
"assets/assets/images/Female/hosp/think.png": "cb140fdc578f55da26db1b912dd11015",
"assets/assets/images/Female/lab/angry.png": "d5e728803029690040f9092e51af8060",
"assets/assets/images/Female/lab/cry.png": "9a32364efd66a1a1b7f0f91f16615c25",
"assets/assets/images/Female/lab/happy.png": "23478f729f2f76920e99240a56170d5a",
"assets/assets/images/Female/lab/like.png": "ad33fa0b39235028fc2d64161f39e796",
"assets/assets/images/Female/lab/ohh.png": "e4bcf3fcf1f1f8e648e9c563f6188806",
"assets/assets/images/Female/lab/think.png": "d0620f445b1dcee2c475d4411f3ae735",
"assets/assets/images/Female/lab/welcom.png": "c88627a7a51a4acaff5bf0635852b092",
"assets/assets/images/Female/nurs/clam.png": "273598830897d385f9e8538c9872c044",
"assets/assets/images/Female/nurs/cry.png": "7f47785e51f774cd65a114e3a69f7fa2",
"assets/assets/images/Female/nurs/happy.png": "73560f065d91507fe69836fa18e6cfa5",
"assets/assets/images/Female/nurs/like.png": "26a12643eab3f9980c6aef5375dde83b",
"assets/assets/images/Female/nurs/love.png": "f2298b8cf7d6c407a79b0902dddf90a2",
"assets/assets/images/Female/nurs/oops.png": "249e79960046647349df01eec7cf7cfb",
"assets/assets/images/Female/nurs/think.png": "5a9a4111000dc593bc70c60b57e831b6",
"assets/assets/images/Female/nurs/welcome.png": "5969f51233296262d99d2af78d8ecd2b",
"assets/assets/images/Female/pat/angry.png": "8564fd3466a311214e2bc1a62f173e2c",
"assets/assets/images/Female/pat/cry.png": "50f5c1feeda27c3e174e3f3e623f7134",
"assets/assets/images/Female/pat/happy.png": "81e627158cabdb8cdd1c919f73fa7605",
"assets/assets/images/Female/pat/like.png": "f3b6cc164fe4663d3cd93f921b5d8d43",
"assets/assets/images/Female/pat/love.png": "73b2cc95aaf4b0dfb54ea96685b3e9a8",
"assets/assets/images/Female/pat/think.png": "0a15b3a7364f9300cbfb8349774392cf",
"assets/assets/images/Female/pharm/404%2520ohh.png": "f23c1b3a9c057d6f1f59ad6ab2cf77bf",
"assets/assets/images/Female/pharm/clame.png": "76f38024362f9013835323b213dac482",
"assets/assets/images/Female/pharm/cry.png": "3179dc19ad56bf65a17f39299c601fc4",
"assets/assets/images/Female/pharm/happy.png": "44cd7a18f4bb341b4e2cb2bbb7967978",
"assets/assets/images/Female/pharm/love.png": "81b054fb744b3041a1ae654209aaa25d",
"assets/assets/images/Female/pharm/sad.png": "bbe1d71a24bbf9a9b3758cbe0e56d88c",
"assets/assets/images/Female/pharm/smile.png": "a3e6d858f44aa84368373adf2c1f4686",
"assets/assets/images/Female/pharm/think.png": "c6317f4f78278db4046e6c77c917e758",
"assets/assets/images/google_logo.png": "55a16466273b22f06a016e9975d92e7f",
"assets/assets/images/Icon.png": "d2ef10fa8c6bc54740eae07d1f3f1688",
"assets/assets/images/intro.gif": "f0911b7e946b5213f3342e8344c81d2b",
"assets/assets/images/introweb.gif": "213130e7b1eb76d1f89a6185a0470a44",
"assets/assets/images/logo.png": "d996f0719089ac5448ae43baeb32c3ae",
"assets/assets/images/logo1.png": "fa1b04ebb16adfe53fcd51f7003c3294",
"assets/assets/images/Male/doc/angry.png": "b1b87bc4c69cbd8cc47c545fbd2f1cfe",
"assets/assets/images/Male/doc/cry.png": "40309f58afa4cf448e13433daf7c5ec9",
"assets/assets/images/Male/doc/good.png": "9a03f3d52a295f1c4a0a91959edab80b",
"assets/assets/images/Male/doc/happy.png": "2142f52e7a0f899fe7bf495a9913cced",
"assets/assets/images/Male/doc/love.png": "d467af62670e7d9cf291b615fbdb3808",
"assets/assets/images/Male/doc/ohh.png": "9044bb1f163f2b9f33c856eb371d454b",
"assets/assets/images/Male/doc/smile.png": "2142f52e7a0f899fe7bf495a9913cced",
"assets/assets/images/Male/doc/think.png": "df1b642bba8b18d616b5e046bafb3a95",
"assets/assets/images/Male/doc/welcome.png": "def76914739a829ecc287ef4b2fbf7fe",
"assets/assets/images/Male/hosp/happy.png": "2e14202445c446b06d34e9c83f174464",
"assets/assets/images/Male/hosp/think.png": "2e14202445c446b06d34e9c83f174464",
"assets/assets/images/Male/lab/angry.png": "36764631a9d1231a2cef7d4700094bb7",
"assets/assets/images/Male/lab/clam.png": "f6f22fdd94daa58c58861710c6b12c07",
"assets/assets/images/Male/lab/cry.png": "6bdea88187961ca1bd44c662d99fc364",
"assets/assets/images/Male/lab/love.png": "a7bd8f01087072af2af49b6149cd8b31",
"assets/assets/images/Male/lab/think.png": "0d788da4e351b4a5ebe3787421d3b5e2",
"assets/assets/images/Male/lab/welcome.png": "527c6674ae7c77b3d257023befc66b4e",
"assets/assets/images/Male/nurs/angry.png": "cb16ca9ee1e0ac3d473e45455d199e65",
"assets/assets/images/Male/nurs/clam.png": "7f86e37fcdb4979fa48455fdf8d07d1b",
"assets/assets/images/Male/nurs/cry.png": "9142841d35cd1d8f4dce50cb6b9d80ec",
"assets/assets/images/Male/nurs/love.png": "f8ad9f86b17378448b85236e1063340c",
"assets/assets/images/Male/nurs/ohh.png": "115d015f67c7952398df112b5f44865b",
"assets/assets/images/Male/nurs/smile.png": "377011cdceaeb1f61dd955b8793bfee5",
"assets/assets/images/Male/nurs/think.png": "995c69d702b09d7b752ea993472b64d1",
"assets/assets/images/Male/nurs/welcom.png": "ee5403cae0e3234a89f12df344d7d1e3",
"assets/assets/images/Male/pat/angry.png": "b2751521ad3bc1a66a26489199045dae",
"assets/assets/images/Male/pat/happy.png": "3e4429b5e9454646236ac04bae424de5",
"assets/assets/images/Male/pat/like.png": "3e4429b5e9454646236ac04bae424de5",
"assets/assets/images/Male/pat/love.png": "1e1f315514059adebe145cc1ab454be2",
"assets/assets/images/Male/pat/peace.png": "25345913a801931d5673cf735d3134ee",
"assets/assets/images/Male/pat/sad.png": "3b87b60302acfd21707cdbc21c8fcd68",
"assets/assets/images/Male/pat/think.png": "df1b642bba8b18d616b5e046bafb3a95",
"assets/assets/images/Male/pharm/happy.png": "a1975e2b229ac113166cdc388d45fbc5",
"assets/assets/images/Male/pharm/think.png": "cb1b409a8698316f6092137fca1296d6",
"assets/assets/images/notify%2520icon.jpg": "1f4a123078eac66130fbe308596c700a",
"assets/FontManifest.json": "7475626943e8f47e1f4927b2a14cf8c8",
"assets/fonts/MaterialIcons-Regular.otf": "c20863f5eced09b761e966fe604d40db",
"assets/NOTICES": "f98726a20f93be251a556d64e1f090aa",
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
"flutter_bootstrap.js": "16eb719286488a38eaf98c34c9004e8d",
"icons/Icon-192.png": "4becb8814843e3d4b3edc5ae7df7a6a5",
"icons/Icon-512.png": "97dbf594454967db8894c8a941ae298a",
"icons/Icon-maskable-192.png": "4becb8814843e3d4b3edc5ae7df7a6a5",
"icons/Icon-maskable-512.png": "97dbf594454967db8894c8a941ae298a",
"index.html": "5a3f12a69a43dc252000861c262d4e19",
"/": "5a3f12a69a43dc252000861c262d4e19",
"main.dart.js": "fd6e2ad524a7be1482a9507ccae912f4",
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
