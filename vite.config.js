import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    // three.js alone is ~600 kB minified (~170 kB gzipped); it only loads on /village/.
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      // The classic site and the game-mode village are separate pages, so the
      // classic page never downloads the village's three.js bundle.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        village: fileURLToPath(new URL('./village/index.html', import.meta.url)),
      },
    },
  },
})
