// vite.config.ts

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path'; // Importa el módulo path

export default defineConfig({
  plugins: [reactRefresh()],
  
  base: '/',
});