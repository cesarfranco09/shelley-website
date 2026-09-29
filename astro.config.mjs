// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Old page URLs from the previous site, pointed at their new homes so
// existing links and search results keep working.
const legacyRedirects = {
  '/shelley-marks-kramer': '/about/',
  '/videos': '/about/',
  '/how-i-can-help-you-with-your-decisions-on-health-product-choices': '/wellness/',
  '/your-decisions-as-health-product-consumers': '/wellness/#consumer-guide',
  '/essential-oils-pure-unadulterated-from-nature': '/wellness/#products',
  '/pure-haven': '/wellness/#products',
  '/cancer-focus-on-prevention': '/wellness/#cancer-prevention',
  '/dr-samuel-s-epstein-md-and-cancer-prevention-coalition': '/wellness/#cancer-prevention',
  '/fine-impressionist-art-paintings-mosaics-ipad-art': '/art/',
  '/watercolor-paintings': '/art/',
  '/embroidery': '/art/#handmade',
  '/jewelry': '/art/#handmade',
  '/masks-by-shelley': '/art/#handmade',
  '/puzzles-by-shelley': '/art/#puzzles',
  '/malibu-garden-club': '/community/',
  '/special-topics': '/community/',
  '/andrew-sean': '/community/',
  '/links-and-resources': '/community/#resources',
  '/childrens-resources': '/community/#resources',
};

export default defineConfig({
  site: 'https://healthy-communications.com',
  trailingSlash: 'ignore',
  redirects: legacyRedirects,
  integrations: [sitemap({ filter: (page) => !Object.keys(legacyRedirects).some((p) => page.endsWith(`${p}/`)) })],
});
