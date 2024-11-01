import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://www.serp-secrets.com',
  output: 'server',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    vercel({
      webAnalytics: { enabled: true },
      imageService: true,
      imagesConfig: { sizes: [320, 640, 1280] },
      isr: { expiration: 60 * 60 * 24 },
    }),
    tailwind({ applyBaseStyles: false }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
        debug: false,
      },
    }),
  ],
});