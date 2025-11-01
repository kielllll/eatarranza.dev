// @ts-check

import tailwindcss from '@tailwindcss/vite'
import { defineConfig, passthroughImageService } from 'astro/config'

import react from '@astrojs/react'

import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://eatarranza.dev/',
  integrations: [react(), icon(), sitemap()],

  image: {
    service: passthroughImageService(),
  },
})
