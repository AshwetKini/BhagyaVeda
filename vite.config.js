import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        quality: 80,
      }
    })
  ],
  build: {
    // Let Rollup's default code splitting handle the chunking naturally,
    // which automatically separates lazy-loaded dependencies like Three.js.
    chunkSizeWarningLimit: 1600
  }
})


