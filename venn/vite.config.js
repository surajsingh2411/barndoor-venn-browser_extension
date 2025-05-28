// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),],
// })

import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin(),tailwindcss()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('development'), // or 'development' depending on build
  },
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/content.js') // or .js
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  },
}); 