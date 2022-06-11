import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias : {
      '@' : path.resolve(__dirname, './src'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@images' : path.resolve(__dirname, './src/images'),
      '@lib' : path.resolve(__dirname, './src/lib')
    }
  },
  plugins: [react()]
});
