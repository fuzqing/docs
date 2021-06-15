/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a92074bb7d0fd3cfc95d7cd656c1c915"
  },
  {
    "url": "assets/css/0.styles.3ac08e06.css",
    "revision": "44f62e209da445f999281f1b4b0928ae"
  },
  {
    "url": "assets/fuzqing-file-manager/b2-theme/1.png",
    "revision": "9db68f26b5a1492157025138f9ea3e69"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/1.jpg",
    "revision": "1405f15d1e066a7a85e025bbeb1576cc"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/10.png",
    "revision": "f907b93c2cbb426e03451a4bfd538195"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/11.png",
    "revision": "01769b2209c7e1802013344e3a4f8fd1"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/12.png",
    "revision": "6421f858758cd17e8a05ac92c41c5d91"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/13.png",
    "revision": "5c0353c503cb1bb5e897db4ec408d200"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/14.png",
    "revision": "e24620f4560b2eb87f660a24c638fbb0"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/15.png",
    "revision": "12dd37540055b85e496075df15af1aed"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/16.png",
    "revision": "faf9f75d3078feca03527326ce286d23"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/17.png",
    "revision": "7eae0e277148dc026429eaf9a2f58b2c"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/18.png",
    "revision": "305bc6b5c42cedb6c0f0eeec0f85d7a4"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/19.png",
    "revision": "e7664a5930c7f73700ec085e129038e6"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/2.png",
    "revision": "4fb5134b2f2433b0b3720a0232383114"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/20.png",
    "revision": "c5f53c78e010b0933a6e77ecb7490112"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/21.png",
    "revision": "7f070804161a4511a70aac7987e78340"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/22.png",
    "revision": "1503ca8730e8e808e936d0884238511d"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/23.png",
    "revision": "c187c3ba642e5db3891bc522c62e2518"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/24.png",
    "revision": "28a9bcf954470f11c6936aee04a38708"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/25.png",
    "revision": "dccec3e3e4d6f704428e0d419e17f7e8"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/26.png",
    "revision": "d4fb0b030e3f4bb60c597c463ffd8329"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/27.png",
    "revision": "c18ba4e3826a4daf308a780dad064665"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/28.png",
    "revision": "169f2df2460d75ad488d8db0ceb0dc8f"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/29.png",
    "revision": "2033e973b05f06f0a4c0bd48e158264a"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/3.png",
    "revision": "58e23a8b724c06bc0d9f2753e13f9b52"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/30.png",
    "revision": "f89060c13c30c5a008f1292adc2a7071"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/4.png",
    "revision": "3ebb1cadeca1355ffa0c19738f273dc6"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/5.png",
    "revision": "c3d6528186b9d1f78dca772a8881a33b"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/6.png",
    "revision": "1ff129b95024bde560c39e0fc342a64f"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/7.png",
    "revision": "1ff129b95024bde560c39e0fc342a64f"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/8.png",
    "revision": "5eee56382a6c85c2cc2716ead42376c8"
  },
  {
    "url": "assets/fuzqing-file-manager/getting-started/9.png",
    "revision": "583304ab0eeed9d87905648fda0143fd"
  },
  {
    "url": "assets/fuzqing-file-manager/how-to-update/1.png",
    "revision": "fd418f300959901abdc653c4c04d6a5b"
  },
  {
    "url": "assets/fuzqing-file-manager/how-to-update/2.png",
    "revision": "4628b8ca6329a512b77ad5f477783e16"
  },
  {
    "url": "assets/fuzqing-file-manager/how-to-update/3.png",
    "revision": "3363adc0100ead80dfce0444d8d8778a"
  },
  {
    "url": "assets/fuzqing-file-manager/index/1.jpg",
    "revision": "4b17d11b4e3e9b2929f812369be4b232"
  },
  {
    "url": "assets/fuzqing-file-manager/index/10.jpg",
    "revision": "5078f5e666d3151624ebf9960298f69d"
  },
  {
    "url": "assets/fuzqing-file-manager/index/11.jpg",
    "revision": "eaa4cf72b33b4ecabc8c717761a1b5bf"
  },
  {
    "url": "assets/fuzqing-file-manager/index/2.jpg",
    "revision": "360f2aca9057e29bbd8dbf71f00986b6"
  },
  {
    "url": "assets/fuzqing-file-manager/index/3.jpg",
    "revision": "92e17532b8a94ca869d70c35698d6e44"
  },
  {
    "url": "assets/fuzqing-file-manager/index/4.jpg",
    "revision": "dbbf2bbce9978cdec368039992343c89"
  },
  {
    "url": "assets/fuzqing-file-manager/index/5.jpg",
    "revision": "0744cb65cf328a280ec790d037273b20"
  },
  {
    "url": "assets/fuzqing-file-manager/index/6.jpg",
    "revision": "3d9b4fd0e11fbf7b4444453b29c64f33"
  },
  {
    "url": "assets/fuzqing-file-manager/index/7.jpg",
    "revision": "adc9a0d0097a4fa6ffe15180a1060494"
  },
  {
    "url": "assets/fuzqing-file-manager/index/8.jpg",
    "revision": "ab5381c4d646517b93e150ce8d140171"
  },
  {
    "url": "assets/fuzqing-file-manager/index/9.jpg",
    "revision": "62a902eb13c0d5cc1fcad5db1892004e"
  },
  {
    "url": "assets/fuzqing-file-manager/question-and-answer/1.png",
    "revision": "59808e0fca8f5ab982ea17b03be10efc"
  },
  {
    "url": "assets/fuzqing-file-manager/question-and-answer/2.png",
    "revision": "d5728623b4693861a12b04a72ea3f17d"
  },
  {
    "url": "assets/fuzqing-file-manager/question-and-answer/3.png",
    "revision": "3196098cb9c56c376d71dd6ac829a9cd"
  },
  {
    "url": "assets/fuzqing-file-manager/question-and-answer/4.png",
    "revision": "dbedb5afc5d0230049fded0909a09f1b"
  },
  {
    "url": "assets/fuzqing-file-manager/question-and-answer/5.png",
    "revision": "2b69c37e47c7a5b2ab495a2d1513034a"
  },
  {
    "url": "assets/fuzqing-file-manager/question-and-answer/6.png",
    "revision": "ab96666f91bcaec795c7b349f29d9222"
  },
  {
    "url": "assets/fuzqing-file-manager/self-built-storage/1.png",
    "revision": "6c13f669c77f54afaa4d9389d510156c"
  },
  {
    "url": "assets/fuzqing-file-manager/self-built-storage/2.png",
    "revision": "10b521715559076d0438ee2335a29469"
  },
  {
    "url": "assets/fuzqing-file-manager/self-built-storage/3.png",
    "revision": "f31646048980c4c0f8a32da8b19b2242"
  },
  {
    "url": "assets/fuzqing-file-manager/self-built-storage/4.png",
    "revision": "3ea9b165511ad5ef700c9ba9515c973f"
  },
  {
    "url": "assets/fuzqing-file-manager/self-built-storage/5.png",
    "revision": "16e97c0f3c4ae1ffde882a00b532fbe3"
  },
  {
    "url": "assets/fuzqing-file-manager/self-built-storage/6.png",
    "revision": "15c7b8298c0732911fe9ee4f27cbe083"
  },
  {
    "url": "assets/fuzqing-file-manager/self-built-storage/7.png",
    "revision": "e91fd2f0a6644e93f9151d6fee1396dc"
  },
  {
    "url": "assets/fuzqing-tags-page/index/3.png",
    "revision": "d5728623b4693861a12b04a72ea3f17d"
  },
  {
    "url": "assets/fuzqing-tags-page/index/4.png",
    "revision": "090a5816ebdab79f00f291d9764b5507"
  },
  {
    "url": "assets/images/logo.jpg",
    "revision": "6dadcd261c02247fb116858c36db8cbb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d983aed8.js",
    "revision": "d6cbe0efd3ef2ab5ecfd5e0a2e99cbee"
  },
  {
    "url": "assets/js/11.c56d7c80.js",
    "revision": "15bdeab3a3cbb780d1c7997784f096c6"
  },
  {
    "url": "assets/js/12.1958c88f.js",
    "revision": "e6f2b042204fe390c3fc4e06aa26410e"
  },
  {
    "url": "assets/js/13.f0312e9e.js",
    "revision": "f972a69e4664b9c2e32c984d4cac1976"
  },
  {
    "url": "assets/js/14.6b41597e.js",
    "revision": "165e90c4cd37000237f7dac92fdb9ff7"
  },
  {
    "url": "assets/js/15.40ab5a27.js",
    "revision": "0b4427539e46bdfb44b49bc3cadd3eb4"
  },
  {
    "url": "assets/js/16.93166b1e.js",
    "revision": "8fa84b4aefe2c07d43e41adc33b8c84d"
  },
  {
    "url": "assets/js/17.8963ccf1.js",
    "revision": "86647dbc22c6fbb4985411459910b9cf"
  },
  {
    "url": "assets/js/18.2f01d8c5.js",
    "revision": "1ab75be1a2b9cf22c07e87740fd93833"
  },
  {
    "url": "assets/js/2.4e835e48.js",
    "revision": "ce429fdf64fc8419435a936110d707e6"
  },
  {
    "url": "assets/js/3.050f3734.js",
    "revision": "1592faabca2ba0c85e0dc1b256ada34f"
  },
  {
    "url": "assets/js/4.1716ad21.js",
    "revision": "a1d8450a28924e3d0a6541de2cbf45e3"
  },
  {
    "url": "assets/js/5.787ba1cf.js",
    "revision": "6c63eb7167f560be82d0ae42a28365ef"
  },
  {
    "url": "assets/js/6.ea343eb1.js",
    "revision": "b6fff3fd62a7e5b306fa0a16f80e6f10"
  },
  {
    "url": "assets/js/7.f93f9957.js",
    "revision": "4becd019b17bd108b086b1a798fccef6"
  },
  {
    "url": "assets/js/8.47160608.js",
    "revision": "c9ebed74cda1a2f60f6f55648762e4e4"
  },
  {
    "url": "assets/js/9.0adfc5bd.js",
    "revision": "def575fd1283ca55682f2c1df5c01ef5"
  },
  {
    "url": "assets/js/app.3daa5b21.js",
    "revision": "fb1c6c1063ade59eea2faa9ca8005f84"
  },
  {
    "url": "fuzqing-file-manager/change-log.html",
    "revision": "d0178e53ad8a5c48a374b731e66302c6"
  },
  {
    "url": "fuzqing-file-manager/download.html",
    "revision": "b791e5a3b83de12491d49d037ff25440"
  },
  {
    "url": "fuzqing-file-manager/files-migration.html",
    "revision": "9f8e2b2b0cc3fee21643a0adc82e3496"
  },
  {
    "url": "fuzqing-file-manager/getting-started.html",
    "revision": "080c2e3eb784130d629c52a50dda57f9"
  },
  {
    "url": "fuzqing-file-manager/how-to-update.html",
    "revision": "d147775638a33ea83b1cba4484c58296"
  },
  {
    "url": "fuzqing-file-manager/index.html",
    "revision": "bf953c2ded2d00f8c77c385444b6d173"
  },
  {
    "url": "fuzqing-file-manager/question-and-answer.html",
    "revision": "fa3b8462a562c3d50faba9960c109b89"
  },
  {
    "url": "fuzqing-file-manager/self-built-storage.html",
    "revision": "502d90406a9c312b731cf4e44f08f8e6"
  },
  {
    "url": "fuzqing-file-manager/template.html",
    "revision": "c13f731a4fc11aeb1be894a58fe75a08"
  },
  {
    "url": "fuzqing-file-manager/theme.html",
    "revision": "11771ac2341d04a12fbb2b974ecad3a5"
  },
  {
    "url": "fuzqing-tags-page/index.html",
    "revision": "63e1eb7176d00cca9629c0c082f83e77"
  },
  {
    "url": "icon/android-icon-192x192-dunplab-manifest-9822.jpg",
    "revision": "241829bc9fd142543da8077deaf342ca"
  },
  {
    "url": "icon/apple-icon-114x114-dunplab-manifest-9822.jpg",
    "revision": "c33db2001eac72408dc98405447293ab"
  },
  {
    "url": "icon/apple-icon-120x120-dunplab-manifest-9822.jpg",
    "revision": "4421cad811b45d090474a98c35caab7c"
  },
  {
    "url": "icon/apple-icon-144x144-dunplab-manifest-9822.jpg",
    "revision": "0c0bb02276604889aff8e10bc8794891"
  },
  {
    "url": "icon/apple-icon-152x152-dunplab-manifest-9822.jpg",
    "revision": "b6f27f004e5a5212192898e823811378"
  },
  {
    "url": "icon/apple-icon-180x180-dunplab-manifest-9822.jpg",
    "revision": "cb78a4eb59aaba4cff4ae376ab4592f3"
  },
  {
    "url": "icon/apple-icon-57x57-dunplab-manifest-9822.jpg",
    "revision": "0bc4c27ebb4fe9212821ce4bd4ef48d2"
  },
  {
    "url": "icon/apple-icon-60x60-dunplab-manifest-9822.jpg",
    "revision": "0cec9afee38748eef633e6d3b8a09352"
  },
  {
    "url": "icon/apple-icon-72x72-dunplab-manifest-9822.jpg",
    "revision": "7d99bd451b970b2be80a15fb6fc8d1e1"
  },
  {
    "url": "icon/apple-icon-76x76-dunplab-manifest-9822.jpg",
    "revision": "a7ff62f4d4dc8b7d81a512244558c666"
  },
  {
    "url": "icon/favicon-16x16-dunplab-manifest-9822.jpg",
    "revision": "f8393739b324ecb8e3eaed58d247da8a"
  },
  {
    "url": "icon/favicon-32x32-dunplab-manifest-9822.jpg",
    "revision": "8b5197d67c03519b57be17377a809e73"
  },
  {
    "url": "icon/favicon-96x96-dunplab-manifest-9822.jpg",
    "revision": "a990dca499a8d07885c27b05b29dcad3"
  },
  {
    "url": "index.html",
    "revision": "86cb197f746ef78be10f5eff5638ac3d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
