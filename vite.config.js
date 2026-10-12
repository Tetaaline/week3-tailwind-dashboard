import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative base so the build works on GitHub Pages, Netlify or Vercel
  base: './',
  plugins: [tailwindcss()],
})
