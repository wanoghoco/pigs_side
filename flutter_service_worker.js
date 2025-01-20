'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e1c743416eb833313e042700ad75c318",
"version.json": "fd7bd2a5d5aca14a3694f16476e8a26b",
"ads_gram.js": "9ad55d9dad22e20ee0617eacf66c4091",
"index.html": "825648f61da61cae77ce81dbdfa0b1a7",
"/": "825648f61da61cae77ce81dbdfa0b1a7",
"pig_logo.png": "c384ed905762f33526050ef6698e2ec7",
"main.dart.js": "b24668298d317fa0958aaa31ae8d0334",
"okx.js": "3e095400f0562c5ff378df7213b6a39a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5b125927e6f3b9ad093a9a23d1139af9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad6fc2a9d6e7a1f649825e3e518f254e",
"assets/AssetManifest.json": "9b3035925c3f3c11480e5f66295f3abd",
"assets/NOTICES": "c445642bb8c2f44eff4c62911d4d6034",
"assets/FontManifest.json": "7f5791d1ead6f88f29333c0ac9ddbe89",
"assets/AssetManifest.bin.json": "229602a45bf55e5ec54eddb750b68043",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "aa666030e656eadbc246ccffeb41bf8e",
"assets/fonts/NunitoSans_7pt-Medium.ttf": "d7b72fa3e5f4ea251a8eb27381f60049",
"assets/fonts/NunitoSans_7pt-SemiBold.ttf": "35d5db5e910116b1f7c27d10d1c354ef",
"assets/fonts/MaterialIcons-Regular.otf": "2f913d646b6aebbb274354093189ede0",
"assets/fonts/NunitoSans_7pt-Regular.ttf": "b31d295edf1de6be9a475411bd8d07fe",
"assets/fonts/NunitoSans_7pt-Bold.ttf": "5eca7f02cd39e97bdb62f4fd6221c4ce",
"assets/assets/ads.png": "0a817f3ec8192a047e521fe9af6ba9ce",
"assets/assets/level_2.png": "8089db412cda7cc560010cc5b2996b29",
"assets/assets/level_3.png": "e208549a230094a1bb59119bfd520733",
"assets/assets/level_1.png": "be63762f0c21e7d991a7fc9dbece8564",
"assets/assets/tone_keeper.png": "c5347b0d696ae11f2f5b3f554a22b947",
"assets/assets/pig_pass.png": "e3d2645388238fc172d0f9e3654b95c5",
"assets/assets/whatsapp_icon_outlined.png": "2690a3d8b76498a1b92eaf5b8ea381cc",
"assets/assets/ton.png": "660708fe75775c8d3520881f526f17ae",
"assets/assets/fb.png": "139bfc6d5aa082ffbe4870c9dffec445",
"assets/assets/youtube_icon.png": "0c03b04e8d6b794ddf574becd38786c9",
"assets/assets/image.gif": "d546dad874db0088846b1cbb33a84b1a",
"assets/assets/ton_background.png": "7efe372e95a636c8b374cb1f63fca26b",
"assets/assets/heart.png": "a3a122a78ae636cf68969f8d965331f4",
"assets/assets/friends.png": "5b698702c453a9b99f8fe1651d1d75d7",
"assets/assets/shooting_start.png": "e59c04cc1e05d6079e008d7842e6debe",
"assets/assets/pig_auth.png": "e701e0a2ab742679cdb1c6bf845367aa",
"assets/assets/ton_pigs.png": "9ac4acba341ae85a4b1eec66eda4969c",
"assets/assets/hot.png": "a127d8a6a542f1a60214ad74673a47a9",
"assets/assets/pig_pass/pig_pass_8.png": "f7b445fc684356fedd8ea98644ab5d93",
"assets/assets/pig_pass/pig_pass_9.png": "e2d015a3c4b0eeb0c4e62c8f46c4300a",
"assets/assets/pig_pass/pig_pass_7.png": "cbdc108e9debc5edb861ca49d432cd15",
"assets/assets/pig_pass/pig_pass_16.png": "0c1104abd083a09b42b3f8742f2c5e9a",
"assets/assets/pig_pass/pig_pass_6.png": "52aa263eef147b3ee4e8014077460f50",
"assets/assets/pig_pass/pig_pass_4.png": "04151ec0890f5084495354b304db11c2",
"assets/assets/pig_pass/pig_pass_14.png": "e95adc1b7ad1ca10ceda04d338b59f79",
"assets/assets/pig_pass/pig_pass_15.png": "51403a1aaae675913aefcdb727683539",
"assets/assets/pig_pass/pig_pass_5.png": "16033d01179e454ec8cdc94089fdde24",
"assets/assets/pig_pass/pig_pass_1.png": "3da9ab91281ab6427e89b0e1d4a58d11",
"assets/assets/pig_pass/pig_pass_11.png": "6470b00f5bd2254098bd444465e754ec",
"assets/assets/pig_pass/pig_pass_10.png": "ef112c506dd9cbb7a6686c9e718e147e",
"assets/assets/pig_pass/pig_pass_2.png": "a4753a93f80136b6d48e138a240db342",
"assets/assets/pig_pass/pig_pass_12.png": "de68655e42688fb096e3768d0275ef6b",
"assets/assets/pig_pass/pig_pass_13.png": "3a812593f58cb6c925b1a7f92d13177b",
"assets/assets/pig_pass/pig_pass_3.png": "8b018ae8d046edeefa504e3b41d4383b",
"assets/assets/star.png": "d029275d06b4806eabcc66323c19dc9c",
"assets/assets/tone_wallet.png": "c6c49d2dfac9386abc4ad5e842bcee5b",
"assets/assets/burst.gif": "0af70ced2966e8e802e608192927a37e",
"assets/assets/pig.png": "5b125927e6f3b9ad093a9a23d1139af9",
"assets/assets/premium.png": "2fcbad7e17536a8d77e9f3f8683ca88c",
"assets/assets/twitter_icon.png": "1f696d5e0a532d38e6632fdfdac40006",
"assets/assets/tranfer.png": "69083f80949a8b2eb4a03596b010e5c9",
"assets/assets/binace.png": "5a11a30728446ef34ac8014d50ec00f7",
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
