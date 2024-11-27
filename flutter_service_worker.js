'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6d3f8f9479adbc3f6a6e73dae7450631",
"version.json": "fd7bd2a5d5aca14a3694f16476e8a26b",
"index.html": "ff70cd222f03337d52ffa5bc3d59ec99",
"/": "ff70cd222f03337d52ffa5bc3d59ec99",
"pig_logo.png": "c384ed905762f33526050ef6698e2ec7",
"main.dart.js": "295b2251956600f8ecac28ffa078dc76",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5b125927e6f3b9ad093a9a23d1139af9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad6fc2a9d6e7a1f649825e3e518f254e",
"assets/AssetManifest.json": "203993e09b7e8f908efb1536d563e3c9",
"assets/NOTICES": "0c0cc62a7834b5a21e13570715954836",
"assets/FontManifest.json": "7f5791d1ead6f88f29333c0ac9ddbe89",
"assets/AssetManifest.bin.json": "e017e487ae3192ae5207915a1e57a05d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "63f5409016159b697aeb10c941e7f81f",
"assets/fonts/NunitoSans_7pt-Medium.ttf": "d7b72fa3e5f4ea251a8eb27381f60049",
"assets/fonts/NunitoSans_7pt-SemiBold.ttf": "35d5db5e910116b1f7c27d10d1c354ef",
"assets/fonts/MaterialIcons-Regular.otf": "dd84349afaf99aad00a2378f63e36365",
"assets/fonts/NunitoSans_7pt-Regular.ttf": "b31d295edf1de6be9a475411bd8d07fe",
"assets/fonts/NunitoSans_7pt-Bold.ttf": "5eca7f02cd39e97bdb62f4fd6221c4ce",
"assets/assets/ads.png": "0a817f3ec8192a047e521fe9af6ba9ce",
"assets/assets/level_2.png": "8089db412cda7cc560010cc5b2996b29",
"assets/assets/level_3.png": "e208549a230094a1bb59119bfd520733",
"assets/assets/level_1.png": "be63762f0c21e7d991a7fc9dbece8564",
"assets/assets/pigs/pig_8.png": "754e01dc340675c583b26b1c4dd0cc91",
"assets/assets/pigs/pig_9.png": "faef721e15e26e200a7cea0ff965d051",
"assets/assets/pigs/pig_1.png": "74a4beaac5444692cd0f52eb89c9398d",
"assets/assets/pigs/pig_13.png": "e2995980b6d98d4c307b0d7be71b4c29",
"assets/assets/pigs/pig_12.png": "5965a4777ee95c60c8a47b9b18cbd433",
"assets/assets/pigs/pig_2.png": "2771a94cb33527e052ccd6b922b1629f",
"assets/assets/pigs/pig_10.png": "a73b76fdf09aa561c58cc4f0585e4084",
"assets/assets/pigs/pig_11.png": "803b87f05e2fa844c25f627397c8790c",
"assets/assets/pigs/pig_3.png": "cb43e0e9b93be7cbf41b049ad8c17738",
"assets/assets/pigs/pig_7.png": "f6b5d50f0c97e0ab0b4213bf849f2540",
"assets/assets/pigs/pig_15.png": "14277864253d30bca2ca80bebef0e0d1",
"assets/assets/pigs/pig_14.png": "493f8ca436639f56f67f92eb9cc6b9dd",
"assets/assets/pigs/pig_6.png": "a467771ec137c6a2ce620bea874ca6a9",
"assets/assets/pigs/pig_4.png": "1080fa81278e7cf9d5462f40e5cd068c",
"assets/assets/pigs/pig_16.png": "4304826e7e6f991450a4c4e6c3da71f1",
"assets/assets/pigs/pig_5.png": "c8f236066e0acc8f8b53f888f8f1663a",
"assets/assets/whatsapp_icon_outlined.png": "2690a3d8b76498a1b92eaf5b8ea381cc",
"assets/assets/fb.png": "139bfc6d5aa082ffbe4870c9dffec445",
"assets/assets/youtube_icon.png": "0c03b04e8d6b794ddf574becd38786c9",
"assets/assets/shooting_start.png": "e59c04cc1e05d6079e008d7842e6debe",
"assets/assets/star.png": "d029275d06b4806eabcc66323c19dc9c",
"assets/assets/pig.png": "5b125927e6f3b9ad093a9a23d1139af9",
"assets/assets/premium.png": "2fcbad7e17536a8d77e9f3f8683ca88c",
"assets/assets/twitter_icon.png": "1f696d5e0a532d38e6632fdfdac40006",
"assets/assets/tranfer.png": "69083f80949a8b2eb4a03596b010e5c9",
"pig.png": "5b125927e6f3b9ad093a9a23d1139af9",
"tonconnect-manifest.json": "105c621d1582222faf1cbd73a2604565",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
