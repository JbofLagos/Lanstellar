import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          thirdweb: ['@thirdweb-dev/react', '@thirdweb-dev/sdk'],
        },
      },
      treeshake: {
        annotations: true,
      },
    },
    chunkSizeWarningLimit: 2000,
  },
})
