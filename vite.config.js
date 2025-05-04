import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // Add this line to make sure the app uses the root path
  plugins: [react(), tailwindcss()]
})
