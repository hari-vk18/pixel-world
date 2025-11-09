import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/pixel-world/',
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client'),
    },
  },
})