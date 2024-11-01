'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dee4fac3756824cef40b1116e89b0c42",
"assets/AssetManifest.bin.json": "1b84bf00e732a3ae1bfe3aba28cf1e04",
"assets/AssetManifest.json": "683fe3a22950c70d02aeab5bfed1252b",
"assets/assets/images/about1.jpg": "a0915583611bd11955f069352fa5c124",
"assets/assets/images/add-life1.png": "faae772913a2181daa94ac235e3e15d2",
"assets/assets/images/Altar1.jpg": "5c9c44dd0b277b3ceef5594de145d549",
"assets/assets/images/Altar2.png": "564b2763c1dc3b3fb43d6ca8d49f6be3",
"assets/assets/images/Altar3.png": "e7a5c3db4247d0e590cdfe9fae35b70a",
"assets/assets/images/Altar4.png": "0a84004505dc6bf203d3c9b18a5604d4",
"assets/assets/images/aotp1.jpg": "85d894396a96489d3bd387cf221c4a49",
"assets/assets/images/aotp2.png": "730b70c99486e6fb393c5a6b02e3994e",
"assets/assets/images/avatar_default.png": "6d7a8d509be59100ec749b9ea8ab81e7",
"assets/assets/images/Beholder1.jpg": "81f50de8abab71d0353460c1b51869be",
"assets/assets/images/Beholder2.jpg": "842ce397c8693c31b2bdae6e433d74d5",
"assets/assets/images/Beholder3.png": "d26fd2cdb71fa3ef48b3d95d4818111f",
"assets/assets/images/Beholder4.png": "29dd73a13b92e688f5080458a30f8267",
"assets/assets/images/Beholder5.png": "f2cde9b85b6a67382d258ba87c4315c2",
"assets/assets/images/Beholder6.png": "d1ed9b466e5a66fb7457f756b4dcc662",
"assets/assets/images/Cave1.png": "5377e14848156b09ed1d688a5a593384",
"assets/assets/images/Cave2.png": "0cde8f966b6abb9db883624ed3a47476",
"assets/assets/images/Cave3.png": "9b0671404b0e3420cbde8c9c4c4cc6cc",
"assets/assets/images/Cave4.png": "2305e8b74e2ebe0d59d3cdc0cbd68553",
"assets/assets/images/Cave5.png": "85bd5c5b6aacd9199c4c086e997d78e4",
"assets/assets/images/Entrance1.jpg": "12a5b3677942e2fd79e85c8cf38b1915",
"assets/assets/images/Entrance2.png": "f0fd5f92fd4e2208caaf1fe535a2bad1",
"assets/assets/images/Entrance3.jpg": "de174aeaf6da4ec0ff5bd88fa6a62214",
"assets/assets/images/Entrance4.png": "6b72b360e9d7e48dfed0ce8cf0994fb8",
"assets/assets/images/Entrance5.jpg": "49151628720764c4444e53bbd0961ee1",
"assets/assets/images/Entrance6.png": "7bd5372b6a582c056cb332aab334f409",
"assets/assets/images/Gun1.jpg": "99049e2fca05e8736550861714c36b07",
"assets/assets/images/Gun2.jpg": "9340c0802e75aff67fcc3a48518ea527",
"assets/assets/images/Gun3.jpg": "0ee6be2afc84fc28d79e8fc040326e74",
"assets/assets/images/Gun4.jpg": "35ff130f30af09888d0a5dbf9c2b756f",
"assets/assets/images/Gun5.png": "bff9070c0bb668f1a7edc6be84122be3",
"assets/assets/images/Gun6.jpg": "98f7a10fd06b6bd14cdc2d369b58087d",
"assets/assets/images/Hands1.png": "d1469bb1361d9d14cb1fac804b24d93a",
"assets/assets/images/Hands2_1.png": "bdcf827fa4b998ce4cf5dd3600240bb8",
"assets/assets/images/Hands2_2.png": "e2e57e360a56972c5cec9b4f5238a0a3",
"assets/assets/images/Hands3.png": "fd6ae64c00278ee0aaba39aa0deee82b",
"assets/assets/images/Hands4.png": "560a880d0b40621775d57f8c6af29bef",
"assets/assets/images/House1.jpg": "11bf7cb735158185583d9995dad3b601",
"assets/assets/images/House2.png": "fecc72e75c4f6d461b958745c335627f",
"assets/assets/images/House3.png": "205287266fbab00d8d3df5ba42daded3",
"assets/assets/images/Image%2520Sequence_019_0000.jpg": "3b9ccf8222e59429f40e7515cb5096b1",
"assets/assets/images/Image%2520Sequence_022_0000.jpg": "55618fc9c35a5b1d82ce90a4cc7d166a",
"assets/assets/images/Robot1.jpg": "9c551f255534061a9113e9f0c2eb647d",
"assets/assets/images/Robot2.png": "4b651fc8123fb62e52ec8e33fecbec65",
"assets/assets/images/Robot3.png": "2e64c209608a9ae63428cb43878c3f91",
"assets/assets/images/Scene1.jpg": "6c9e4b3cdc235b2ec3e586f884ed4c42",
"assets/assets/images/Scene2.jpg": "0de56f4e6ba21b74f8884032d7bae76d",
"assets/assets/images/Scene3.jpg": "51570c3c98e802a1757b53f5f199d82c",
"assets/assets/images/Scene4.jpg": "6fc058ffd7e4d04a806cbfd640e9830a",
"assets/assets/images/Scene5.jpg": "3605cdfc6985e5cb595094d2904e36ad",
"assets/assets/images/Scene6.png": "be5e477ae6f3e7705a4cc84ceb4db4b0",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "31368718080ab192e827a3795a7e1f64",
"assets/NOTICES": "f84f7dbbf9e4ec834e1cc7c7abf1e87c",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5811b9075bb9bd34d0f1903a306b1787",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a5241f8bec7ab64ec4188b9e1362fdfb",
"icons/Icon-192.png": "cce232b30935c270d410c1f47c8414eb",
"icons/Icon-512.png": "fc1e815970316cad6a4afe9a0bb49aef",
"icons/Icon-maskable-192.png": "cce232b30935c270d410c1f47c8414eb",
"icons/Icon-maskable-512.png": "fc1e815970316cad6a4afe9a0bb49aef",
"index.html": "7fa2c83a3d709fff28c4b45cf371e38b",
"/": "7fa2c83a3d709fff28c4b45cf371e38b",
"main.dart.js": "e88d6dec85385164b1fffbfb67aea2e2",
"manifest.json": "926e99cf06b613cc6be8e3737a1fd15c",
"version.json": "ffbc4adfbc7ffd0c99b727dcaf18a6c3"};
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
