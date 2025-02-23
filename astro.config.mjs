import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://www.filippodanesi.it',
  output: 'server',
  adapter: vercel({
    isr: { expiration: 60 * 60 * 24 },
  }),
  trailingSlash: 'always',
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ['nofollow', 'noopener', 'noreferrer'],
          target: '_blank'
        }
      ]
    ]
  },
  integrations: [
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
});