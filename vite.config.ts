import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://mantri-homecare.vercel.app',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      exclude: ['/404'],
    })
  ],
})