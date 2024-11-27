'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cc954765653d804905e10723daa35ebd",
"version.json": "fd7bd2a5d5aca14a3694f16476e8a26b",
"index.html": "ba3969edb63dc7a6827440ad93921143",
"/": "ba3969edb63dc7a6827440ad93921143",
"pig_logo.png": "c384ed905762f33526050ef6698e2ec7",
"main.dart.js": "295b2251956600f8ecac28ffa078dc76",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5b125927e6f3b9ad093a9a23d1139af9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad6fc2a9d6e7a1f649825e3e518f254e",
".git/config": "4828dabe0995d91f9b2e0101db51b529",
".git/objects/0d/b74fdf5ff72a08c80142711fce256e586aca58": "7fafd75f3e855c2ffca3a2f8dac439c4",
".git/objects/50/d5df9363761111caf24f8ec8b989c00340bcb4": "d1b0b4e0538e3c4d7d092c3dc11897a1",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "4643131532bd21681468718600b3fdcf",
".git/objects/57/f1a7e5a277d426a93f863a973ecd6d47fa64a6": "99753677d1cbfb72341c3894dd89dd77",
".git/objects/9e/4b14a843f759d4742e13255f0d897eff4d8e86": "baac1b0b9db3596141260058d85451f0",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/69/3f8f68358f82e44477822ec269a9881e90b8d6": "ed57b315d6ded7baabc79d359287dd5b",
".git/objects/51/d5e8843e6d0a917f08091936155f4aac5136f0": "b3061ca7de47981e51bad67e47fee925",
".git/objects/51/86ecc257526733722adaa10f48f3833c244751": "a0e08b2d3ec424bb5890d72ced10f8de",
".git/objects/94/d1e3799ac10e7467455de47b70b18baea0f90a": "acbd1feb0ba7d8c6d351ad7a8a304246",
".git/objects/33/054c8e75d654e9791dbc7747e502bc6211f1d5": "8787a6968be3175d89ac598415f2a970",
".git/objects/9d/9158fa3714f80d8448270e31f65412c3faaa4f": "425f6573663c91fb9f28e27809e5e243",
".git/objects/b5/33f662dc9d6f1d564a4c28f49c0c48197ba707": "b91aa24719ecbdaabb00d149d7fbd239",
".git/objects/ad/b1ef8d0808f41588f94f1246eaffce686f80ec": "9208840f8d9cd6e577ef82693c057252",
".git/objects/bb/d67a6c89197534f26eb5f1d3f1e4c6c765c298": "2deaa3805ee45ffb6822a27eff0b76ce",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/a2/9887d2fe654b66aa1700a223467eaa547246a0": "9076a072d5c340af45e70940ab5f7227",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e5/41fb8c527add6788d718e55a859338bfee9354": "38669cf058156fe23377954814a14e71",
".git/objects/f4/1ba0f4438ec73feb5bbb4dd7c80a17b551c829": "43d937b28229fe2709186ecac9557f47",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/967adac67d29ca3a0db5fd2ec7444921f6a11c": "7f406df230ba95c035c89665378190e2",
".git/objects/cf/4f61d412febc705e007e228ca3b116c52829fe": "2b5dc26130f16fa35786d189f8601e39",
".git/objects/fb/bbedef31d7b1cea5ac45ff686cdb6b647cecc4": "6135f21246045aeff54186e56e04235c",
".git/objects/fb/5feebf69c27fec96ec9cf9a5a307576e864082": "444cc6de84b301ccf29d4d65f3adab87",
".git/objects/c1/6ce0a24fd6c17be2891b5877cd63b650ff742b": "614118949c91ce57dccbe4381c2357a3",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "4bc616bb5a6fe4ff4302fe0e26e644eb",
".git/objects/7c/89691a04b0713f4fc45f5a8afb29a31edfdeaf": "e642ee67d0f796c2f5a7e4fac4cfee91",
".git/objects/42/d98d2dda39cd7692e4e048c6a9dd7bfea1b2ff": "97a4a752b269b238124c413fb8a5b3c1",
".git/objects/1f/b5c7f9646b2edc218d4b890fbd009368fa9a37": "99cccbac2aa84ef9800fdf749d7c3255",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/7b/139c856999db23ba41e01fe22b104190c067b1": "e9ce61f4f02e78f9744ba97750b97311",
".git/objects/19/31b1d2367eee6b0ac4c834fecd79579cd7f3cd": "d64df38e412f4346c5643ea1381ce701",
".git/objects/21/15252530151115fd7ba7822d1a26a52836eb3a": "ee7abd2c207a96e17e5ddd93e13da126",
".git/objects/4d/ea97679fc54fcf4e8433a64e120bdd5e3ce018": "a4d8f2e21748777545f5d7c06df7a10e",
".git/objects/4d/21b3c52e0c5dc9cfacaaec5d0b27b8797b0553": "0175d32079bc572ef54a3ef8df5c5502",
".git/objects/81/23fcb489eac0a46a6b5ee8268ab6c7667b9709": "3679ef8de47570dc833e4ba2eaf87d8e",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/44/ba05555328aee4e352921eb35f6e5fd4aafa5e": "79456f32fd69943ada012b8ff9444f73",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/07f0ec2b110167d725996a0df4d34cf8b636db": "ded855b1459dbfe069681bd837bc7a9f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/9a/6d1ceab09e4e42d76b0979e9848ddaf60d0bf3": "fc9fbcd4b2fba8efac65c4c49353b14b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/30/645eba66d1114f9fa145d0d66f57ead8f14956": "38cb17477e8a1deded350b8907567e43",
".git/objects/37/1f5c8e40e207f7bc4ec33814283b7389c6247f": "6a98e1666abd79d7bd39d6983ca96fd7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/0f/d38bf076ad0d53e8dfc9feeb3d13cecdbf069e": "f0107da42dfef4e8e0d379f3d159ad8e",
".git/objects/64/6bf43efde09a64c7f6ebee972a2745f1ed43cd": "4a81166fe859b87a5aa2153c1081a478",
".git/objects/90/3271e0ff077981e6797416feb1f014a7071aa9": "2d7fb2506813645570add8b905b67e80",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/d3/634d3d26b01a4136db22302143c59cbe5cd8ab": "acb2c213c50e2a5737b11483517e08ca",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/a0/0a7909c3db94fc10a0bbcbd7447dc364297fb5": "784b8c0104878b193fcc817ce1a748ef",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/dd/1965c177249213da6d495a3be154f1046e37d7": "9a49e800ce8e52875a56a586ae19f2f7",
".git/objects/dd/f4df7525dd1c876385cddb65c79a136e6b93d9": "e97ab84c8101659af0f33923dc8c75e6",
".git/objects/af/bfdef430a2edf9e943dfc95c0bcd0f2fd2bc1b": "97678a667fb84ad7115c1986eb7bd77d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a6/a097b5588d5df0b5339d412ce20c314355b27a": "afada5048ee8e4faa6214fd2076cac17",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/cd/b18b6fa9923f1fb42250fcb643b1f50e5a2967": "037dd1b0c6e572da36a31d56a87aaed2",
".git/objects/e6/2097e2b1c3679ece9acb8e326bdb5d65c5d59a": "accbb9475d952ef4783aa95d8709c4cb",
".git/objects/ff/77be109d0a6b47b55eb89f577018c690d4e2fa": "36cfa85081dbd10d17f434c77a1c47b0",
".git/objects/46/2d766800fa2cd241e734a744dad733fcd3a955": "3558d6b84dc326a12a74974eb99e79d5",
".git/objects/77/47162a234785978775932a12889d903db0fdc1": "4ddb6fbaa8ee0248fe5da3bd3ba49836",
".git/objects/1e/69f1e8e814d235f5bf693127212bbd3b551a14": "43e386b2af96e94e6067b5e2b755cc57",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/49/ef7df6e140281d843666e2ed13ef6dc2c4a9c6": "185629e5ac5f92fc90f5acec8216f848",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "b8d6f15ef784ef37473a3264834abc7d",
".git/objects/2e/39cd2a41acf3fc47312ea1585662d575e3f425": "0a8986d7819708791034266ad7244c45",
".git/objects/2e/5b59c9a14c2593d4db5f5713f288dfec61bfe7": "0e3c9fc395de0ebdca379aa7d1f82d3f",
".git/objects/13/26c3a90d4ac04b9b79893205db5265e4718740": "6c888c5323a40ba11277461736bc44b7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/HEAD": "f86dda9abf416dd37328f9007a1b9758",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "507844fef372689ecc2e3bace8165ee7",
".git/logs/refs/heads/connect_wallet_9": "e091eefbbfbca9ae326d7d5ea8ea9f7c",
".git/logs/refs/heads/main": "4e6ecfc2d1199e6f379c9ad36e5622c8",
".git/logs/refs/remotes/origin/connect_wallet_9": "477049aa133154d706f96fc2d0848362",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/connect_wallet_9": "19c267b455e678cc2980f2547aac5bac",
".git/refs/heads/main": "19c267b455e678cc2980f2547aac5bac",
".git/refs/remotes/origin/connect_wallet_9": "19c267b455e678cc2980f2547aac5bac",
".git/index": "b752d326da5972801fb4afc6c6c9378d",
".git/COMMIT_EDITMSG": "7861fdf36a9227f825bd486a335855f6",
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
