import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
  "/api/v1/tasks": {
    target: 'http://localhost:3000/',
    changeOrigin: true,
    secure: false,
    ws: true
  },
  "/api/v1/schema": {
    target: 'http://localhost:3000/',
    changeOrigin: true,
    secure: false,
    ws: true
  }
}},
  plugins: [react()],
})