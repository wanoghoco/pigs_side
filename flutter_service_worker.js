'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a35e2cac920f85253de2fe26ed037e80",
"version.json": "fd7bd2a5d5aca14a3694f16476e8a26b",
"ads_gram.js": "9ad55d9dad22e20ee0617eacf66c4091",
"index.html": "2d4e5d5cb8b5d3c7ad669fd0e69ab286",
"/": "2d4e5d5cb8b5d3c7ad669fd0e69ab286",
"pig_logo.png": "c384ed905762f33526050ef6698e2ec7",
"main.dart.js": "ab919de912538bae6e69465c7736af55",
"okx.js": "7215ee9c7d9dc229d2921a40e899ec5f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5b125927e6f3b9ad093a9a23d1139af9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad6fc2a9d6e7a1f649825e3e518f254e",
".git/config": "4828dabe0995d91f9b2e0101db51b529",
".git/objects/0d/b18f585528bc545f858f1d6507495355a6a9f9": "375bbd0fbef6e34bc00ae458247728ff",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "4643131532bd21681468718600b3fdcf",
".git/objects/04/28f24861f88dd6b12ed7de0fc1e7912ceab43b": "83dd6aa5b752cf9c83105eb3aed2f55a",
".git/objects/6a/0100ab021591814378b2163603972388529ce9": "090208b408f4b9f3b223382a0247ac54",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/69/3f8f68358f82e44477822ec269a9881e90b8d6": "ed57b315d6ded7baabc79d359287dd5b",
".git/objects/51/d5e8843e6d0a917f08091936155f4aac5136f0": "b3061ca7de47981e51bad67e47fee925",
".git/objects/51/eec9a5fb553e649e8f78a00aadfa63f70f6333": "58132097a0ce8ecde81a9e86ccce0b0b",
".git/objects/51/86ecc257526733722adaa10f48f3833c244751": "a0e08b2d3ec424bb5890d72ced10f8de",
".git/objects/5f/f529fb6360592ec4a915fef3daffbaefc46186": "7906a616f2ae0382aedea140b8fc5a54",
".git/objects/33/966366ab505e6c0a81783094f5c6e331b3c879": "8a02cc45069b6c80618c24db32114cc6",
".git/objects/05/80f2f74c348fc376a6d7fd2996b18a1519db7b": "828068c8b3f120f07a2426b025650bac",
".git/objects/05/19ecba6ea913e21689ec692e81e9e4973fbf73": "f496060fee9d2fe84d2dd36c72c904da",
".git/objects/ac/fa606d61a61d590139bb6228b00ea8e910e05a": "50a601fa94f81926748289978cdd3d7f",
".git/objects/bb/d67a6c89197534f26eb5f1d3f1e4c6c765c298": "2deaa3805ee45ffb6822a27eff0b76ce",
".git/objects/d7/d1050a662060b139a6347e57c7bd38c42a5ee4": "64ad602e33bacdaf8df91cb0ed6aa663",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/bd/b0bd97966a5b8c9718a2cee42f342dbb56b03d": "635e244127749ce580d9946ffedffba1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e5/41fb8c527add6788d718e55a859338bfee9354": "38669cf058156fe23377954814a14e71",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/da29b94b252593ed1ae471fafc707dc1726524": "b7e7dd0c877d29bf800e17fb0b137718",
".git/objects/c9/78a2b9fdf586e3737cb191a9fb31c39b6c1145": "56233fb3e8560f2ca061d916baf50c8f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/cf/4f61d412febc705e007e228ca3b116c52829fe": "2b5dc26130f16fa35786d189f8601e39",
".git/objects/18/356f1f2a4a40f8a897ab807dc30202612720a6": "87c39a19d1161ae9e2996faa396de65c",
".git/objects/7c/99d5e3979f980ced3e91011f664a8b47382cb6": "696b5a605e713fe09083c4babfc531bd",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "4bc616bb5a6fe4ff4302fe0e26e644eb",
".git/objects/1f/b5c7f9646b2edc218d4b890fbd009368fa9a37": "99cccbac2aa84ef9800fdf749d7c3255",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/17/a0f7fb0bf97bc4766dfc1e4cdcdf6e1a1cf1ed": "17d23fcd9208793a09be66e71e081f64",
".git/objects/8f/16ba86b8798bf28c9971208477cd9fb5ecdd87": "5af3a2d333baa66c1558616591cf6976",
".git/objects/7e/57fbe11a8383655d1907aa1ca115ecf36e8340": "ecf19aaccd941deb7c2a69b9c8574b40",
".git/objects/19/31b1d2367eee6b0ac4c834fecd79579cd7f3cd": "d64df38e412f4346c5643ea1381ce701",
".git/objects/21/d9ecaf942926f9098d9f07359721e9c9c4dd46": "20c42b76cd67527c8ffa4d1f2f5895e9",
".git/objects/21/15252530151115fd7ba7822d1a26a52836eb3a": "ee7abd2c207a96e17e5ddd93e13da126",
".git/objects/4d/21b3c52e0c5dc9cfacaaec5d0b27b8797b0553": "0175d32079bc572ef54a3ef8df5c5502",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/07f0ec2b110167d725996a0df4d34cf8b636db": "ded855b1459dbfe069681bd837bc7a9f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/96/cc4448b46084db0c54d33175ee888e2de6b7b5": "6a13f05dacd8b01dc62756dd71c7b08b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/98/8666a0457b2d43e333ae61d79897490050773f": "22bd49e4d33685f193f9e829a7746744",
".git/objects/30/645eba66d1114f9fa145d0d66f57ead8f14956": "38cb17477e8a1deded350b8907567e43",
".git/objects/5b/bbc34aed1d548be267b9ac47d7e56c1e9dc6d9": "d2da1395c334f7e535ba3e075a1d3a2d",
".git/objects/37/1f5c8e40e207f7bc4ec33814283b7389c6247f": "6a98e1666abd79d7bd39d6983ca96fd7",
".git/objects/08/d52ff6b20b5f336330fb50d27fce9abf669f63": "014af285aafc4ec00e110b6ddcbaff5a",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/63/b02f168a5f4c2331e8d52cfd9a19ef63f2d89b": "02e4b69f878be706200ec203619405bb",
".git/objects/0f/d38bf076ad0d53e8dfc9feeb3d13cecdbf069e": "f0107da42dfef4e8e0d379f3d159ad8e",
".git/objects/0f/d2fdd7c145fbadef64b2c76837bb20370029d4": "946aab7c7daad25461e5bf626fb33192",
".git/objects/0a/9593cfcdff0242751af4c8b8bd238c69f4a2fb": "e5744983746850108977542333d25028",
".git/objects/90/3271e0ff077981e6797416feb1f014a7071aa9": "2d7fb2506813645570add8b905b67e80",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/d3/634d3d26b01a4136db22302143c59cbe5cd8ab": "acb2c213c50e2a5737b11483517e08ca",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/d7863878bd60bcfdf1fc5b04cc80c07c6ef633": "3cb558d50b3fbf5590c0951447e54f7a",
".git/objects/dd/1965c177249213da6d495a3be154f1046e37d7": "9a49e800ce8e52875a56a586ae19f2f7",
".git/objects/d2/dab003eedf380275e9cbd43ebb945e47706bfd": "2df145050e9e205df6ca9b2924e6c401",
".git/objects/af/0d56f2e17f0d9f89eb34525fe5ff151576300f": "a73c32333e742b1da28505605454b9d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/a56ac66f752bac0e17218ec684fe50803a3878": "fecd5ef3bfc5115e5232cd3b6cd2d683",
".git/objects/db/b9fbd3ce98a97f9f16fb200886688b4c86f370": "bbc59c54e217a026a983206cde0e40a5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/c4/cb5fbf85f1267b1e6ba9490ae05d2df0e1006f": "624ccae85b9fa964c9ddb25aa009a009",
".git/objects/cc/73a9da5df5e4f686d88bc7fdecd9422fcec2b0": "e4a8a6def3060785ca85240f9b217d47",
".git/objects/e6/2097e2b1c3679ece9acb8e326bdb5d65c5d59a": "accbb9475d952ef4783aa95d8709c4cb",
".git/objects/e6/f78c3acc0a6ac594bd40af0e26742a846f327f": "fe340c6d0bca684c4bffb2291918537c",
".git/objects/f7/7c9ed4688a7ea04330b4a8f200234c9fa9ee0b": "f6c83c0ee4c8711caf9cfdb196e369c3",
".git/objects/f6/a59c01d069443d8fdcd3b32f74981ee2acedf2": "6de20ab7de90d4b30d30443cf930220f",
".git/objects/46/d9c4478df792a55fa8c39e2dbd3e59637df58d": "6cdfbf90992620463f3db688059e2ebf",
".git/objects/1b/bf60ef7f03692aab78d11a1abc4937157ca1bf": "bc7361cc542257d77453a66d16e23827",
".git/objects/77/47162a234785978775932a12889d903db0fdc1": "4ddb6fbaa8ee0248fe5da3bd3ba49836",
".git/objects/1e/f451c0210255dcedc6cfeef218b4c9103791b4": "0857b29ee0f308c900d0a3d240833af2",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/4f/3b4b73b3ab4aebbd90872e482569e663dba0aa": "4dae1fb4b4cc33efa8cc5484913d3f59",
".git/objects/15/22de5af2bae97f7799c36c59dea949df697931": "aaed567c9302261d784e23e2fe2a8f9e",
".git/objects/8c/40cea447f084acee30d5c52bab06c6762959f7": "7e45059deff46aab914731060bf9bd2d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/49/b923d39d3a3bb73be2a190536822b1b63ef340": "1c93f8596f86274b28f4e914e8c69842",
".git/objects/49/ef7df6e140281d843666e2ed13ef6dc2c4a9c6": "185629e5ac5f92fc90f5acec8216f848",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "b8d6f15ef784ef37473a3264834abc7d",
".git/objects/2e/39cd2a41acf3fc47312ea1585662d575e3f425": "0a8986d7819708791034266ad7244c45",
".git/objects/2e/5b59c9a14c2593d4db5f5713f288dfec61bfe7": "0e3c9fc395de0ebdca379aa7d1f82d3f",
".git/objects/47/a795db73d72ce50038834f9b4a6c68a19aa9ee": "3ee6e605ea5d8241e15c4ef101eb1865",
".git/objects/13/26c3a90d4ac04b9b79893205db5265e4718740": "6c888c5323a40ba11277461736bc44b7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/25/f3e9776441e059a11e4601131c1a29bca3a6b7": "63e4194a722c04a438da6f072cfa244e",
".git/HEAD": "9fecf1a13f40cc02fc318b13f26cf7d5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16caef1763cab01a54922763575a909a",
".git/logs/refs/heads/daily_check_in_1": "16caef1763cab01a54922763575a909a",
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
".git/refs/heads/daily_check_in_1": "d61f8d1da46290588b8efc0a49b31d0c",
".git/index": "a74c5e67c12f9c52ee9f1f6a11dd0a77",
".git/COMMIT_EDITMSG": "7861fdf36a9227f825bd486a335855f6",
"assets/AssetManifest.json": "48b3fe6c3541a34a7743e8a040368b53",
"assets/NOTICES": "c445642bb8c2f44eff4c62911d4d6034",
"assets/FontManifest.json": "7f5791d1ead6f88f29333c0ac9ddbe89",
"assets/AssetManifest.bin.json": "4d8ea66d65199f195ffccc2be3d50f46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "051eaf535abbbdd0bca57c608e84632c",
"assets/fonts/NunitoSans_7pt-Medium.ttf": "d7b72fa3e5f4ea251a8eb27381f60049",
"assets/fonts/NunitoSans_7pt-SemiBold.ttf": "35d5db5e910116b1f7c27d10d1c354ef",
"assets/fonts/MaterialIcons-Regular.otf": "a6af62c129f07e8f57016b6caaab1d91",
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
