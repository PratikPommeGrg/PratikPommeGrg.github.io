'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4180c0e1a3cfbfe62fbc8357d40013c5",
"version.json": "e0fbf78141b90f500ac9e2b56fca0b74",
"index.html": "2d5eda68a3cb16949d48bb1b5c3d1c54",
"/": "2d5eda68a3cb16949d48bb1b5c3d1c54",
"fav/favicon-16x16.png": "f66962dbcd79088aab9849601b6d081f",
"fav/safari-pinned-tab.svg": "883385e9c7b85528eb2554db05af45f5",
"fav/favicon.ico": "e8a9b06f18f9442a1176998709c0415e",
"fav/android-chrome-192x192.png": "8f56dce166405075b24951ab4a177331",
"fav/apple-touch-icon.png": "191f587181796c209ff7ed3978ba493b",
"fav/android-chrome-512x512.png": "84c80bd17fc88cba352707fb38753ae3",
"fav/site.webmanifest": "35f3698d1ef7a7459be6ec9005be6466",
"fav/mstile-150x150.png": "7a4f28ad201da67373ebc29c2f7ae460",
"fav/browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"fav/favicon-32x32.png": "28e4ab9624cd5ecf318e2fd71b2d2b22",
"main.dart.js": "acf999e2b2c529b55b76dfd876b76d11",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icon.svg": "231ca0512d076afe0559f751b82553e0",
"manifest.json": "4e134ce3b3d39488bc40485b72c9546b",
"assets/AssetManifest.json": "25ce760fd8c99e68bc87dbcaa302aafc",
"assets/NOTICES": "bd44e64eeec14af7ce730a6bd6691fb3",
"assets/FontManifest.json": "94ba095fd4f3d1662e52f06baad41d35",
"assets/AssetManifest.bin.json": "48908783bf424b85902275fb73b406f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6c4061c6e8b86257a568f19366d26e13",
"assets/fonts/MaterialIcons-Regular.otf": "d0e0908b9a889e67c20a3d45b1646980",
"assets/assets/static_api/portfolio_id.json": "01d10603622b522343ceebb3ae897bf3",
"assets/assets/static_api/portfolio_en.json": "4cd9a9cd07853c818b10a599badb1a1b",
"assets/assets/images/java_icon.svg": "b6b6b97e6852f790fb16172e28f2efce",
"assets/assets/images/ic_facebook.svg": "3c3490700c33bb4e54b5964cf2a78d9d",
"assets/assets/images/ic_logo_text_oneline.svg": "793c1aa7ae85f645d9817a6264040c9e",
"assets/assets/images/git_icon.svg": "838cf58c0be039825232e8e724b5bab1",
"assets/assets/images/ic_upwork.svg": "57b8521494d9a2f34512e0abb5a7bd85",
"assets/assets/images/ic_tiktok.svg": "b7b8e497afdaea80e412ba3b57834128",
"assets/assets/images/mysql_icon.svg": "44a440678c878fd4378633dc164f1ef5",
"assets/assets/images/ic_close.svg": "24b3b74283c089eaefdbfb147e9f7f22",
"assets/assets/images/ic_avatar.png": "659fe3c30d698b3f7e983cea9075e23e",
"assets/assets/images/ic_linkedin.svg": "fb534c4ab06fb2deffcdd5b7f6ff06a0",
"assets/assets/images/firebase_icon.svg": "cab78eb340556b9f8fb04a0be32edf20",
"assets/assets/images/dart_icon.svg": "30cc09abbb3a8fb992990d5da4c9fdca",
"assets/assets/images/ic_profile.png": "38afdcc8e0907d006ca37a81979cc62c",
"assets/assets/images/ic_youtube.svg": "4216a9e9759b55e3837722aeae931581",
"assets/assets/images/ic_playstore.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/assets/images/ic_logo_text.svg": "231ca0512d076afe0559f751b82553e0",
"assets/assets/images/github_icon.svg": "a9f7ad3dc6d998df5c984f5363913c7f",
"assets/assets/images/ic_launcher.png": "6749627472c35c426f433e228419dcee",
"assets/assets/images/ic_menu.svg": "17b0fbdb410668d06be8b26620f289af",
"assets/assets/images/portfolio/krishiconnect/unnamed1.png": "baec0c96adc1831ac1b50512ab1f092a",
"assets/assets/images/portfolio/krishiconnect/unnamed2.png": "6a61c207e9ecc4e01476fda0035dec2d",
"assets/assets/images/portfolio/krishiconnect/unnamed3.png": "daf8effd1db0d739ef1b88c117280df4",
"assets/assets/images/portfolio/krishiconnect/unnamed.png": "6c75dd42132e127c71e30aefd9145890",
"assets/assets/images/portfolio/nepal/unnamed1.png": "bb5efc43b8155798ecd41c4c644d653c",
"assets/assets/images/portfolio/nepal/unnamed2.png": "498e67f6a48242905daa0bf66fb15b43",
"assets/assets/images/portfolio/nepal/unnamed3.png": "496eddc4a1fc331e9c062c432673a866",
"assets/assets/images/portfolio/nepal/unnamed.png": "643059fb960a673c6e9279875d2a6fcc",
"assets/assets/images/portfolio/enirman/unnamed1.png": "445c4605016d201771681c93bf7136f8",
"assets/assets/images/portfolio/enirman/unnamed2.png": "afff81a30b63928878981a83693eacae",
"assets/assets/images/portfolio/enirman/unnamed3.png": "95c6576c892cf9005020b12d98b496a6",
"assets/assets/images/portfolio/enirman/unnamed.png": "6427776af297a62f7feef1606520940b",
"assets/assets/images/portfolio/bhumisewa/unnamed4.png": "4c363014255885c0f75c8b82aae9acda",
"assets/assets/images/portfolio/bhumisewa/unnamed1.png": "496e28884c14db64578d6e6580fa3cc1",
"assets/assets/images/portfolio/bhumisewa/unnamed2.png": "bbee9c908146d6506e9e2b5ba9e30952",
"assets/assets/images/portfolio/bhumisewa/unnamed3.png": "5b28fb78bda911dd6ecffc544d92d9b5",
"assets/assets/images/portfolio/bhumisewa/unnamed.png": "fcaac26ca0e50703b27f049c78729065",
"assets/assets/images/portfolio/meropadhai/unnamed1.png": "52c68cc6e8b943f379d008cbe5d84ce2",
"assets/assets/images/portfolio/meropadhai/unnamed2.png": "e7585c2cc75af4e5c1628e1edbb5ab5e",
"assets/assets/images/portfolio/meropadhai/unnamed3.png": "b10e2d3245c7fe9a490679e1db89bf6a",
"assets/assets/images/portfolio/meropadhai/unnamed.png": "6770dc450ee2c4df7e405e8b27c0b5cd",
"assets/assets/images/portfolio/vendor/unnamed1.png": "761ada5d70352d93df7e3f5f7b686f2a",
"assets/assets/images/portfolio/vendor/unnamed2.png": "0e131eaea3fad85a09932e598a41aef0",
"assets/assets/images/portfolio/vendor/unnamed3.png": "dd770ba26611d48efce417110415a934",
"assets/assets/images/portfolio/vendor/unnamed.png": "0c1ac86f3cf607f189f1df1164a4b61e",
"assets/assets/images/portfolio/engineer/unnamed1.png": "97e8deffbfe396e6f7577c474c1790da",
"assets/assets/images/portfolio/engineer/unnamed2.png": "826b50e1a61006c69429ab168b34fe25",
"assets/assets/images/portfolio/engineer/unnamed.png": "b29f079ca674c85ef166d1ab980a5790",
"assets/assets/images/ic_logo.svg": "08c51b9aecc3e85f6a0dacc3147e819a",
"assets/assets/images/ic_launcher_staging.jpg": "7ace33ca7f59a5bfdee59bfd8254cbd0",
"assets/assets/images/ic_settings.svg": "1c66e137e1000a65ccac946e78bd2002",
"assets/assets/images/ic_github.svg": "3b5432e19db352bf12e16cf1d2ce7b37",
"assets/assets/images/flutter_icon.svg": "d82014167a81640b1ec8ea16ad2a196f",
"assets/assets/images/ic_instagram.svg": "d5368227272f1b9f38c5d2f2de975412",
"assets/assets/fonts/Rafisqi-Bold.ttf": "ddba7504fd6cba2fd8952c3f25e63a94",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
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
