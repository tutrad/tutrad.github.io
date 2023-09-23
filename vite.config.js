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
    // Configura la política de caché para recursos estáticos (por ejemplo, 1 año).
    // Ajusta maxAge según tus necesidades.
    hmr: {
      maxAge: 31536000, // 1 año en segundos
    },
  }
})
