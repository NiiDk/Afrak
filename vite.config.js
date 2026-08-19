import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/Afrak/',
  server: {
    host: true, // Exposes server to local network (Wi-Fi)
    port: 5173,
  },
})
