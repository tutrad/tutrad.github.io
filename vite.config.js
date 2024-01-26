import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const projectRootDir = path.resolve(__dirname);
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(projectRootDir, "src"),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {

    hmr: {
      maxAge: 31536000, // 1 año en segundos
    },
    headers: {
      'Cache-Control': 'public, max-age=31536001, immutable',
      'Content-Security-Policy': "object-src 'none'; script-src 'self' 'unsafe-inline'",

    },
  },
})
