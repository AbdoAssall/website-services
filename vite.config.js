/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@/*': path.resolve(__dirname, 'src/*'),
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // server: {
  //   proxy: {
  //     // Any request starting with /api will be routed to the backend server.
  //     '/api': {
  //       target: 'http://localhost:3001', // Backend server address
  //       changeOrigin: true, // Essential to avoid browser errors
  //       secure: false,
  //     },
  //   },
  // },
})
