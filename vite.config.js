import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // resolve: {
  //   alias: {
  //     '@hooks': path.resolve(__dirname, 'src/hooks'),
  //     '@components': path.resolve(__dirname, 'src/components'),
  //     '@utils': path.resolve(__dirname, 'src/utils')
  //   }
  // }
})
