import react from '@vitejs/plugin-react';
import path from 'node:path';
import url from 'node:url';
import { defineConfig } from 'vite';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tester',
  resolve: {
    alias: {
      '@/api': path.resolve(__dirname, './generated/api'),
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [react()]
});
