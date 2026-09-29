# Healthy Communications

A rebuild of [healthy-communications.com](https://healthy-communications.com), the site for Shelley Marks-Kramer's wellness, safe-products and art work.

Built with [Astro](https://astro.build). The output is a static site with no backend, so it's fast and cheap to host.

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into ./dist
npm run preview   # serve the production build locally
npm run check     # type-check all .astro files
```

Requires Node 22.12 or newer.

## Structure

```
src/
  data/site.ts          ← business name, email, phones, social links, nav
  layouts/Base.astro    ← <head>, SEO/OG tags, JSON-LD, header/footer
  components/           ← Header, Footer, Logo, Icon, Artwork, PageHero, CtaBand
  styles/global.css     ← design tokens (colors, type, spacing) and shared styles
  pages/                ← index, about, wellness, art, community, contact, 404
public/                 ← favicon, og-image, robots.txt, and your images
```

## Common edits

- **Contact details and social links:** edit `src/data/site.ts`. Every page picks up the change.
- **Colors and fonts:** edit the variables under `:root` in `src/styles/global.css`.
- **Adding real artwork and photos:** the gallery currently shows painterly placeholders that are generated in code (`src/components/Artwork.astro`). To use a real photo:
  1. Put the image in `public/images/art/`, for example `public/images/art/malibu-morning.jpg`.
  2. In `src/pages/art.astro`, add `src` to the matching entry in `works`:
     ```ts
     { title: 'Malibu Morning', medium: 'Acrylic', kind: 'ocean', seed: 3, ratio: '4/5', src: '/images/art/malibu-morning.jpg' },
     ```
  3. Any `<Artwork>` on any page accepts `src` and `alt` the same way (the portrait on the home page, the handmade cards, the puzzles, and so on).
- **Contact form:** the form opens the visitor's email app with the message filled in, so no server is needed. To collect messages on a server instead, point the form at a service such as Formspree or Netlify Forms (see `src/pages/contact.astro`).

## Old URLs

The previous site's page URLs (such as `/puzzles-by-shelley` or `/essential-oils-pure-unadulterated-from-nature`) redirect to their new sections, so existing links and search results keep working. The mapping is in `astro.config.mjs`.

## Deploying

Run `npm run build` and upload the `dist/` folder to any static host. Netlify, Vercel, Cloudflare Pages and GitHub Pages all detect Astro automatically: set the build command to `npm run build` and the output directory to `dist`.
