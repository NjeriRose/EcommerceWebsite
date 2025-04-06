// Use CommonJS format for Workbox
module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,jpeg,gif,svg,webp,ico,woff,woff2,ttf,eot}'
  ],
  swDest: 'dist/sw.js',
  clientsClaim: true,
  skipWaiting: true,
  // Define runtime caching rules
  runtimeCaching: [
    {
      // Match any request that ends with .png, .jpg, .jpeg, .webp, .svg
      urlPattern: /\.(?:png|jpg|jpeg|webp|svg)$/,
      // Apply a cache-first strategy
      handler: 'CacheFirst',
      options: {
        // Use a custom cache name
        cacheName: 'images',
        // Cache up to 50 images for 30 days
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        },
      },
    },
    {
      // Match CDN image URLs
      urlPattern: /^https:\/\/(ext\.same-assets\.com|cdn-img\.oraimo\.com)/,
      // Apply a cache-first strategy
      handler: 'CacheFirst',
      options: {
        // Use a custom cache name
        cacheName: 'cdn-images',
        // Cache up to 100 images for 7 days
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        },
        cacheableResponse: {
          statuses: [0, 200]
        },
      },
    },
    {
      // Match any API requests
      urlPattern: /^https:\/\/api\./,
      // Apply a network-first strategy
      handler: 'NetworkFirst',
      options: {
        // Use a custom cache name
        cacheName: 'api-cache',
        // Only cache 10 API requests, expire after 1 day
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 24 * 60 * 60, // 1 Day
        },
        // Only store responses with these status codes in the cache
        cacheableResponse: {
          statuses: [0, 200]
        }
      },
    },
    {
      // Match any request that doesn't match above
      urlPattern: /.*/,
      // Apply a network-first strategy
      handler: 'NetworkFirst',
      options: {
        // Use a custom cache name
        cacheName: 'others',
        // Only cache 50 requests for 1 day
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 1 Day
        },
      },
    },
  ],
};
