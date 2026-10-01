import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // YUPOS2 is deployed as a GitHub Pages project site:
  // https://yunarmedia.github.io/YUPOS2/
  base: '/YUPOS2/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
