'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "032f8e6033e73c535830fc9c9283d05a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6c497aee0d3241b5febb5564217f1354",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f0a5f0789f5ec1035a8c8adffd40d679",
".git/logs/refs/heads/main": "b41ef78a6279ede8d9e7774d16c94eda",
".git/logs/refs/remotes/origin/main": "033f74eb7c275ecba663c00b2f2a1e77",
".git/objects/07/003c86c9070ded59223bb6e46ab7a4cadc4e39": "2c889dabe6c409500c977321af92199e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/1c/942631da43b790e871dd053298655472358e74": "fda44a870f1b858e7ea914c4f422af35",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/8a908124ab42e42fbbcf5b1ef33e3c866d3454": "47c46c2316701e0829908b13c9dbe233",
".git/objects/25/7f4e0b058ae9df6181527ece227d345f706e56": "cf6d3c95f24819ea7d31c8c4a4494f34",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/774e953b21f36f010c0d4f32185283455ad8df": "7843f0f52c0ba93fc5d9cd9d193a367b",
".git/objects/2c/9136a0638bdb4b1c2e18226d043474c8517ded": "09c13ac9215fd29464030a9249359d38",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/3848d853d61c6d9b4cc04d638cff76cc8ebbb3": "b7e623762e97427656112b6c1ba96294",
".git/objects/36/0098f981f7813c94e4ef02f378c20665346208": "b5b9dde1f15b8e6bb0aad99977db4356",
".git/objects/36/f308aa1651a10f8ce7234ba91af7b01255915b": "bb1f586acf2d11daece02024d19564cb",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/f66a70a4903205335b8b254d45d5219b77cb0f": "894aae7f3595fa1e8340cf829c52050e",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4d/c6e6008ba9bc88840833338051d559189559ae": "37cbbbb8d863545a8d0f721cd38ace62",
".git/objects/50/aeee7c37a359cee5c59db9188f55453e15c601": "dddb9c9113c12ba999a5d383efc4c205",
".git/objects/5d/0c9d25c05a66a19b4f850d2b0337290da4abe3": "51f992cfd26bd4adddab5e7224927a84",
".git/objects/5e/6286565298dcf5e318ddab781bf0e3d79b130a": "5c16b96dbf5feced0bc31bacaa95cf22",
".git/objects/5f/7067bdb93801c84f2977240cd3ce4f867677fa": "d62e72034e3f0651810ab93ba3c9845e",
".git/objects/60/238c560a09a1f48e3c236d79688ec855bcb93b": "1049d2f2ca372717469e7eda2af2dbe4",
".git/objects/63/27b9a28564ed4116b3aaeb41c9bb83de44d4d3": "eeeeeb413557fe82889128108353e902",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/79/70dd4174b9e46fae98fecb1c99c110ea2994ea": "cb7cde2a67757048954aae9e725ab262",
".git/objects/7b/880bce261ab9ac864077d4692a71a83778ff5b": "5ccab2b0709c98ed2acc4b166d8eda8f",
".git/objects/7d/1f932d24c3c03d1deda62eba12fb9f65951dad": "74fb2eb38d13ce94bbd8e06b0e1cba28",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/59d8f8c0df651734756c66b633160cc6130497": "28119609ac042c94aa525aed1b72ff46",
".git/objects/8d/5da051374694638a88c9d50d993928192a2344": "628bd019ca7728f97e42548afe276432",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/95/e67b0f37f2c278a21743f446af8e5210a971ab": "ec5135b002560a489dbb9070550c171a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/30821b511a2fc991e1d7be41510ada8880c061": "37c3ac2193d6d20285bf1f21d2686360",
".git/objects/a0/1b659ff41831a2c4458afd5f35716ca55e6db0": "5894b7b076fa6237f8a55314eb4e5ae3",
".git/objects/af/7fdf5143431812d4f743de4ae7ecd181c5751d": "e9c16f3a3c3d10371e67a16ddf8c6fbe",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/89a7a60615065d1e6bacefa2554a35f83d2847": "3935bd8fe084f9d93ff37dd70a2c1efe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2abb41be44323ec8d3733fdedab275a589c031": "8b7d59e3b670c603e33196bcb5514870",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/ac25b5a075255afd74f7fc3928ccbce19510b3": "5c3bde693b43152e209e4efac62e24f7",
".git/objects/c9/26ac23e912dfe0fbae1429de7909c0309c63fb": "069ae82da0069d14fb374fac970b996f",
".git/objects/cf/842a34263370ca6c1d1a62bc097eabe1b50224": "4ba8ea52e8a18e45d37dfb6c76cb23cf",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd702be7b336ee50131b4b92b54461be4dc33": "649e5519859ac070944a038816830d57",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/83354624e2800546f362f3bd11677db435f71e": "228ae537faecf4176cdef33c5299978e",
".git/objects/e2/a1a38e761d56ce8ede4cdb1031ad2dd0116a34": "92109c8d81cd23b4f2b1b62705663659",
".git/objects/e3/fb07b41ec45a04f6713c5dbe90cfee1fe3de6e": "e5bdf3157c0018422147c4987ae5899a",
".git/objects/e7/18a1d83b07f06e1a4883bf62cc4380830451da": "ff6190ac87020a401fe187e3ce5fd6b4",
".git/objects/e8/8c3c3751e35d4f730160bf5d9956819ee1459e": "fd83a2988a21c2447f203522694e7799",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/819aa19af3152292a74a0abca07c1788c37b05": "40ab4b1ea550f549bab627c5e0b3866b",
".git/objects/ef/e0332fb2205ddade22da3ef64ff1c2155450d6": "e3a5d1a1c981b168939c1b984668d7e9",
".git/objects/f1/a8eb57bad3514dea00a16c1268a00c887fc5ea": "9c53c0d84ca9bce1a0f8b955786205c5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/1389114623fc76a465dde234d3bb79cdda8808": "18f7891b45a44909d759690b505b7dcc",
".git/objects/f7/b65ee277350a2f1be4191a80bee39e7dc0f67c": "42c51ac625749f1336e0f252eaa7ef22",
".git/objects/f7/c1072dc155ba8ed088b83f8cd0ee8bd26d8ace": "403c43420cc4146e84a7ec5f9c7c49b2",
".git/objects/ff/b0d9c3818a89f86788e106976254038cdf1e16": "1586541742a160c5f1625e207d008373",
".git/refs/heads/main": "faee7152f6b88394fe8eabc88e98a6a2",
".git/refs/remotes/origin/main": "faee7152f6b88394fe8eabc88e98a6a2",
"assets/AssetManifest.bin": "c9f7340fb4af909c271bf9f42edc2199",
"assets/AssetManifest.bin.json": "abcf912775fbf7562a1d1c1b80c6ed5b",
"assets/AssetManifest.json": "7c5fc3a0593f1cc90626f53ec3f7d70f",
"assets/assets/fonts/font.ttf": "244c8b44cda75c9742dc43e0c324bb8c",
"assets/assets/images/bmi1.png": "318ea391418e2009ffa4452ce1d338af",
"assets/assets/images/bmi2.png": "25f0efb6ee16fbe0452743deb2a1a49e",
"assets/assets/images/filimo1.png": "551d36a1421f8c8eda657297558cfe9a",
"assets/assets/images/filimo2.png": "43ccc7831244cc97e8ff3c500a14f933",
"assets/assets/images/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/gmail.png": "b42d13d9123bfb6242b05307872b3a56",
"assets/assets/images/header.png": "cbecdaf6b201d81ca59bbff069c20ccd",
"assets/assets/images/linkdin.png": "1a9291b12d642cb2fa8aa8fbef5c7be1",
"assets/assets/images/me.png": "f25d42c3735476af1949b3f16fcb3aba",
"assets/assets/images/me1.png": "8ca1ec35377cc126371c3c7bed165129",
"assets/assets/images/music1.png": "f05d932d3fdac180a6056fec2ef833f7",
"assets/assets/images/music2.png": "1341cf37944f5ef28c582d2713ef5a29",
"assets/assets/images/quiz1.png": "b6baad8359549e598b944c4c5900b088",
"assets/assets/images/quiz2.png": "51af4dfb9ec55e40f6f64f0669b9536a",
"assets/assets/images/store1.png": "9dfdef5e51d4bf4c5c5a44a3639410fe",
"assets/assets/images/store2.png": "2e4b1f1bb0661f90acd2d1c19dc9ac76",
"assets/assets/images/store3.png": "9fc8fdd67af70b49b7d6bde823fc3264",
"assets/assets/images/telegram.png": "81eaef3ad228f0d1070233e9d5a0aacb",
"assets/assets/images/todo1.png": "f8406c7aefbb748bfec08f85124d27f2",
"assets/assets/images/todo2.png": "5b231ca1f1ce0c127bee303a97abaf62",
"assets/FontManifest.json": "faf0e6a2f27e10a5517e6499cf1440b7",
"assets/fonts/MaterialIcons-Regular.otf": "480730ac4c4fbc95a9f1dd2f7bbd11a5",
"assets/NOTICES": "cdbdd71478679e1ee84e8a4b4ea67701",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "fe6d57d26573193ef391c4791d026cf1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3033979defeb481d404c60261185dd5f",
"/": "3033979defeb481d404c60261185dd5f",
"main.dart.js": "7a40dfb4e04c9b53adc9a7cb0d32fd73",
"manifest.json": "ee1610bb14d252e9e726fe1c35da01d7",
"version.json": "2fdcecd439317165477c1fa5f2b6da7e"};
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
