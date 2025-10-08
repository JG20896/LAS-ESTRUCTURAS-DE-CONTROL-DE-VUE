// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/vue-control-structures-spa/', // Reemplaza con el nombre de tu repositorio
  build: {
    outDir: 'dist',
  },
});