import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/reactcv.github.io/", // 👈 match repo name exactly
  plugins: [react()],
})
