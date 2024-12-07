import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from 'vite-plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), babel()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    host: 'local.quartz-ui.ru',
  },
  base: '/quartz-ui/',
})
