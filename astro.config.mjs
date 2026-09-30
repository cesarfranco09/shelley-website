// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import legacyRedirects from './src/data/redirects.json' with { type: 'json' };

// Every page URL from the previous site is pointed at its new home
// (see src/data/redirects.json) so existing links and search results keep working.

export default defineConfig({
  site: 'https://healthy-communications.com',
  trailingSlash: 'ignore',
  redirects: legacyRedirects,
  integrations: [sitemap({ filter: (page) => !Object.keys(legacyRedirects).some((p) => page.endsWith(`${p}/`)) })],
});
