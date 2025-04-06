import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: new URLSearchParams([
        ['format', 'webp'],
        ['quality', '80'],
        ['progressive', 'true'],
      ]),
    }),
  ],
  server: {
    host: '0.0.0.0', // Make the server accessible from outside containers
  },
  build: {
    // Optimize build settings
    cssMinify: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Group vendor code
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
          // Group UI components
          if (id.includes('/components/ui/')) {
            return 'ui';
          }
          // Default chunk
          return undefined;
        },
      },
    },
  },
  // Add asset handling options
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.webp', '**/*.svg', '**/*.gif'],
});
