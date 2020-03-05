importScripts('/_nuxt/workbox.6041bd81.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04202ebd0dfea976c827.js",
    "revision": "2db9d919992ddff4147878224d85ff4f"
  },
  {
    "url": "/_nuxt/1d479f4b0949b80d1f7c.js",
    "revision": "5e33fbaaae31551d7d12e592639625ac"
  },
  {
    "url": "/_nuxt/a03d6727aa4f28bf822f.js",
    "revision": "cbee9b99f1c803bd1f04053eb259c1ca"
  },
  {
    "url": "/_nuxt/a359dd52149413093d7d.js",
    "revision": "57ae2c2f359dfdb42228e868570fa064"
  },
  {
    "url": "/_nuxt/a83ad005a95501bba1f8.js",
    "revision": "5490c554e9bf362915e63a41648c7d86"
  },
  {
    "url": "/_nuxt/b19c17b6ddce31ae9a94.css",
    "revision": "26d44fcffb190215ac8ae76e4f657df6"
  },
  {
    "url": "/_nuxt/c61ad31ce9219990dc3c.js",
    "revision": "be90defa5ee3eb53c83a3e1494a89fd2"
  },
  {
    "url": "/_nuxt/c6b1818dedc9b136221d.js",
    "revision": "e670a214f1dc1a47ec322c35a83e4524"
  },
  {
    "url": "/_nuxt/dc2c439a8994df0699ec.js",
    "revision": "2e9c639f4b37e7c09d7e816f5060d50e"
  }
], {
  "cacheId": "blackhawkforce",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
