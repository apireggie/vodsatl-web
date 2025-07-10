'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fbd1c1e51b5478b916763747abefa35c",
"version.json": "2607ef3edc3a871247ac1835b4b55a3c",
"index.html": "598c34cb2c7238fd3af04aea7017ab9d",
"/": "598c34cb2c7238fd3af04aea7017ab9d",
"CNAME": "49a95b124b322c053ffe6470f24b528d",
"main.dart.js": "6f91371c1450e9022aad1900e42020b8",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "652eafc91edacc6e0ad4e8ebfc74c00f",
".git/config": "dae3d3942cb9f917ccd90a77f563ed13",
".git/objects/59/15cf48635f3ccd0d2e5ae019340f77787ed1d0": "02bec85a1ad4bf32374224b6a64cdb9b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "dc1d3b6ac68817e26c52a2b7aca98a10",
".git/objects/56/40a677eb34d2ddb6b7666898b4908cbcc9b96c": "0f6c44de862bb16561aab14c5bc73002",
".git/objects/58/e753f85aca4edbd9483b7f9693ece6742db713": "43dd725dced212800170a146d53179e3",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "24deb07a93d7e0dcc8e55b7be1f11989",
".git/objects/5a/50ed0f31dfa1a6761791db013d8c7481e32493": "cfa7bdb4eec63ecd56ea6bad7ddeca7f",
".git/objects/9d/14e602ba2e19fcd9810969d0147502416d911b": "9d9bd721e233aff2e6f9d0be1e87fd4d",
".git/objects/9c/de019ccf10ab1edbaa5f960542bf315c45a269": "bf85468ec5a4c5ce3185bc4f8d7636ce",
".git/objects/a3/a87c66d5a76e9f039224a3261a088e2f78d213": "bc4d3d4cab689d699fb8d3cf490f3550",
".git/objects/ad/8ab6ec271f6c4bf11fa7eab43d0565dd167684": "5ef6d8f754ce74b2c3a679905b7db5cc",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "1f4decf6bd1e79e74c383dd9dbcf3d4b",
".git/objects/d0/b9b0761e412a34ab23676110889a2d782f7ad2": "07f6e6c5c6144ee412feaf10e7515726",
".git/objects/b3/a7922bad49fdf2a29d65ab46f94cd7ce9b9187": "18703ebd6459224d600b11d6c84ba86b",
".git/objects/d1/34ed491806ed5610560298828207cf6c816eaa": "174768dc78875e520ab1d22e34028e9a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ab/b23ede1454878ea3df3977c5c8f629dd27ef25": "1c083d1339c6419b0266bba867e3ecda",
".git/objects/e2/829d63e17d4c00620ef0c1db1777515da67478": "f19238c8f739ca7091853c9949d8edc0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "6d9279f777bb9f4a4d82d12aa6126867",
".git/objects/fd/6cb5c141cf2d0a1ae6e74e9cfa53c1033dddc9": "7e0bba34dd4caebe68b7af480de4c767",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/fb/333d0e1e507ec01081d484b9f1b119157f46fb": "dc8567548c902acc6b54efc50433492e",
".git/objects/20/a0885235de30f881f2f7a62ae89eef7afe94ce": "51f66e8f6d39c6df9001235f501adf1f",
".git/objects/20/932dd899e9dc710bc559726c5aa1a432e110b5": "8caa986cf3b2321011665cde5ddb50b0",
".git/objects/18/29cec35a7e022be83babb0277a7db8eed47e01": "c2c0ea1e5597f6d50bb2583a6ff647b5",
".git/objects/7d/9d1722e6a279f9581662e10484efd69cb057e8": "48428be45e06e756e74b0209aa9729c2",
".git/objects/29/25b005a159191288428f28f1f5da11c3d85a54": "9c8251f7ce753bdf6040c8912e93d1d7",
".git/objects/7b/968c345f9e9ff5062a3d9505c9fd9729e07875": "b08071c81038cba3ec6e32947d219117",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/7e/265ddae8e4946cc162eeb70ffa33d6a5813942": "f1823d106584d2856f57e656bca4499f",
".git/objects/19/b0293cf62bf443403c9a20668640b7b7b7e3f2": "4cd000c0716e533a4ae77d201b21c451",
".git/objects/4c/35fbaefaaba353be7db0b0faa858bd3d36bcad": "d1a9c23501c15afe29dc702fcb3bb188",
".git/objects/26/49acfcc62ca397688585f60a7f9be9c5c255fd": "77c46f0288ee1fd3fb85261e19b05f2a",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "c90089055a4f7117fb58f15dd50973a0",
".git/objects/72/0e63bbf6bbcf5edab4ed77dfc2ae8ceb1027c1": "8787db9cdf5cbdf7b01c44628e1bebe0",
".git/objects/44/6bcd54a8a20aafa2f87266dd8b6dc86f66d8de": "2e1f7a407b59fdef7bb866b9149887ec",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "a285976a30d9d9853ec76d45237be835",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/59d53f222061171ed0d35388ec70ecdd1088c2": "a4910b0b483d3c2be5677976ae46cdc5",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "abaee217f18e544d20dc0cdba473ddc5",
".git/objects/5c/0e82be779b44aabf7de6a4ad57ec4084e39c51": "85804292b26137e8bf8d99bfb8bb6e13",
".git/objects/5d/34ff6d7528072808337d203968affd433e6f9f": "1ebe84d1fe6afb2814c60b8ed829eeb3",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "3d4253531a67214af9c53bfea0e5f3c3",
".git/objects/31/6c0493ee341a28f21ccd4c68457720f03ae84a": "b628d89e75b5302f0d86b8f71c3404c4",
".git/objects/65/f79db55682b388d78d63a12a6689c0336a94b9": "bfccd6a4a64a14e77a56a7b6952cd796",
".git/objects/96/70d1bc2da9347a6c15ccd5b9525fca6b902fb8": "1d639482e1c4076eb9c84be54398d761",
".git/objects/3a/86444df1a3c3e222beccf161e643608f282ac0": "10f5ce3dd663097b789ff4155982afe4",
".git/objects/3a/3479463f1c8005fbbdd940aec472619a53dde8": "a4d476660c8315f8f126744646153120",
".git/objects/3f/9c146b09cb18e46d6687464a95fc7da0b97431": "65b4dc3ba983de0f4b3d82d1cbc8c9a0",
".git/objects/30/fc224f1a80931fb08ad7a560dbe7034987e1a9": "299a9cfcf70a93b9d8a40fb9dba81802",
".git/objects/37/14b3ca665b07791eb07ab144655a501e0a57cb": "71b95017cb604d921326e8049d3f1697",
".git/objects/01/fde51b4350be3020c91e3138a956077fbd15be": "4f6fe1128fd5d20be8b6cfb79083c1b4",
".git/objects/6c/e4cd3921cff12212fa8c049a322db90d204bbd": "524810df334aca7ee5fb38d2eac52f88",
".git/objects/6c/39f4d8e7378a55a479c2051d55b409b70875e7": "862e7eb0462f9daa43251f9e318c015a",
".git/objects/63/2ddb4c94bf060fce60504726a71fad83b9720e": "a55371b0e76d376498df93daab7fc4f9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/b1/acb54ec04e6872b6800f51ae67a66b4c5c7560": "cd7000d42117ae9943f705cac953b5e6",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "6a4baf0ee5d7f24d01892e880c87e9b5",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "719b91b3b0c9c9c1b12187af557fd8cf",
".git/objects/d2/eebd14cf0851ca97ce81602c2bbf7a33eee9e0": "20885d8a2e550c8974f78229a74b97da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/b3cc60226b8c1009f34dd6d0533e1e23f98651": "9d896259e9cd52a54a51d97a47e8abdb",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "5f83b77b168ef9af36490eb3cb643560",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/4cfc26c46a65d62eedc6dd50a05b974d03dfae": "0e926a9b47e8110bcedbb472d016483d",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "a488dd5b768f3e95bb3ded676201c413",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "ff0540ff2ad01de40a8a51b854e31e72",
".git/objects/e1/948357bc36da53c26ed7bb455dcd1fd8ab683e": "849d835108bdd13c95c72c9fca61956d",
".git/objects/e1/c2821189241c64b520bf3d9484d711ae663132": "160c27aae1990d023cf76fbc0c5d0cb2",
".git/objects/f9/71b8b1b957664c8f8b1c0252b2ac8b311c4995": "9b5fed0db35ab1c2cfa2f25e96e049d9",
".git/objects/ff/451acf78e7e5bee41cdf948e3fa7c0ac1516e2": "07f14a5bd73be76d691928984adb0df1",
".git/objects/c2/b87c3168c1798e1f30be66cc55aff1a0b5cacd": "0914c697c0ed6044fc6699f6091ecf48",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "61e81e4beb22083a786d82e99ad076a0",
".git/objects/e0/86d01822f347c9f299c9127d9a401fbffb0f55": "c3fdf64f20df47453045b994f6885b21",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/79/0ac0b0ae4e2ecc771858ed616723fad4cfe8df": "1a37f5f6df3b7b5d068b7b8ab059b34b",
".git/objects/2d/a13742b1802cc5e0addd14733a029da75ee5e0": "7e5ad691f7ae0938bae72bd6539d01a1",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "54f8ff0d387380c0b9c25486e6bb6bce",
".git/objects/83/e5ba7f5ab9b06544d2146fef52aec4053fd64f": "5afc08a18829a1f909554931e7f94544",
".git/objects/48/66056688175d29a7005a760b34f77a1f21c7b0": "9a5df51c28d38d674060e5b89848e9be",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "b1ef66f3885813d266e0413975db0a56",
".git/objects/48/276cff3862dd5dc015f0ac5bc1f661220ef1eb": "fcb8288f718b345f1f30f18a323e1cec",
".git/objects/70/6c797287e7d4d22b413ca8b13251ceba238ff4": "a8977fd24fe22b4b649495a6cb535585",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "6dc767ec6498faa598b6dd7d00386498",
".git/objects/1e/d3390d46b03a3cfd313a068c8a090720aace65": "62fcf994778a19219f4a299ec5889c94",
".git/objects/8d/2d5f127600173d17ca6ac83b7e05de754a007e": "be58c8751dc36d6da3c0ccd7b9cfb1c6",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "e33c70e0eae492a795d978ed34591073",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "81eb5686768718a01892b81166ee3cd0",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "4cd8e95b87d7bb2b2c3e8979aff35223",
".git/objects/2e/9091431fb168631c9f539eaca0232382b2cca8": "2bbe5457084e3c06c085b997c4bc5e44",
".git/objects/78/8a11d1c405b1bf8bfd13dadacc158afbf0c8a4": "a415257e386278cc579ee0ab38383ec0",
".git/objects/7a/c61b0cf85791ab2051735a12c4de39fc006a50": "8fc92da3f90b8f6d89f7eb9efdaf4eb1",
".git/objects/14/cab1af9c35409833b49ed19bcc12752917d228": "9e801fc95e00d41a6400e2622700950f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b114280b8b12776071b20b98adf4fca",
".git/logs/refs/heads/main": "4b114280b8b12776071b20b98adf4fca",
".git/logs/refs/remotes/origin/main": "64c3430a59ebdcb0c208d2eefe667bf7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
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
".git/refs/heads/main": "87a7e5863b82b8cc570a8e2fcfbb8b1f",
".git/refs/remotes/origin/main": "87a7e5863b82b8cc570a8e2fcfbb8b1f",
".git/index": "9543085043c4b1b9e17bf8733fdeaa69",
".git/COMMIT_EDITMSG": "2c627663cc9a1825439671d19bc7a064",
"assets/AssetManifest.json": "c3444528ccec362e9606b97935f498e0",
"assets/NOTICES": "771761bcf40c4a6c3d8cbc78d18106b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bc63ac1905b270a68d9ca09927836b63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "8a5f575ecdf23f21bcae8204882d54bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a2061204689d7ca3e071bd00f8ef9adf",
"assets/fonts/MaterialIcons-Regular.otf": "c8f7848f843fae774526aa6433f6268b",
"assets/assets/logo.jpg": "51608e1deb87a2baa3792bb6c08936bb",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
