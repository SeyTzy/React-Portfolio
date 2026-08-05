import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 900,
    rolldownOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('framer-motion') || id.includes('motion-dom')) return 'vendor-motion'
          if (id.includes('gsap')) return 'vendor-gsap'
          if (id.includes('react-icons')) return 'vendor-icons'
          if (id.includes('react') || id.includes('scheduler')) return 'vendor-react'
          return undefined
        },
      },
    },
  },
})
