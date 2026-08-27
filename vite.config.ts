import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sharepointDataPlugin } from './vite-plugins/sharepoint-data'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  return {
    define: {
      // Inject a constant that you can use in your app
      __API_BASE__: JSON.stringify(
        isDev ? 'http://localhost:3000/api' : 'https://api.example.com'
      ),
      __LOCAL_SERVE__: JSON.stringify(isDev) // true in dev, false in prod
    },
    plugins: [sharepointDataPlugin(), react()],
    server: {
      port: 5173,
      open: true,
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name][extname]',
        },
      },
      assetsInlineLimit: 1024 * 1024, // Inline alle Assets bis 1MB
      minify: 'terser',
    }
  }
})
