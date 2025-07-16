// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  vite: {
    server: {
      host: '0.0.0.0'
    },
    preview: {
      host: '0.0.0.0',
      port: process.env.PORT || 8080,
      allowedHosts: ['all']
    }
  }
});