import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build work on Netlify Drop AND GitHub project pages
// (username.github.io/repo) with no extra config.
export default defineConfig({
  plugins: [react()],
  base: './',
})
