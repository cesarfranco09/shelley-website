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
  data/gallery.ts       ← every artwork/photo with its title and size
  data/redirects.json   ← old page URLs → new pages
  layouts/Base.astro    ← <head>, SEO/OG tags, JSON-LD, header/footer
  components/           ← Header, Footer, Logo, Icon, Photo, PageHero, CtaBand
  styles/global.css     ← design tokens (colors, type, spacing) and shared styles
  pages/                ← index, about, wellness, art, community, contact, 404
public/                 ← favicon, og-image, robots.txt, and your images
```

## Common edits

- **Contact details and social links:** edit `src/data/site.ts`. Every page picks up the change.
- **Colors and fonts:** edit the variables under `:root` in `src/styles/global.css`.
- **Artwork and photos:** all images come from the original site and live in `public/images/` (resized for the web). Titles, sizes and captions are in `src/data/gallery.ts`, grouped by medium (acrylic, watercolor, mosaic, digital, embroidery, masks, puzzles, floral, people, products). To add a piece, drop the image into the matching folder and add an entry:
  ```ts
  { src: '/images/art/acrylic/new-painting.jpg', title: 'New Painting', detail: '18 × 24', width: 1200, height: 900 },
  ```
  `width` and `height` are the image's pixel size; they keep the layout from jumping while images load.
- **Contact form:** the form opens the visitor's email app with the message filled in, so no server is needed. To collect messages on a server instead, point the form at a service such as Formspree or Netlify Forms (see `src/pages/contact.astro`).

## Old URLs

All 108 page URLs from the previous site (such as `/puzzles-by-shelley` or `/essential-oils-pure-unadulterated-from-nature`) redirect to their new sections, so existing links and search results keep working. The mapping is in `src/data/redirects.json`.

## Deploying

Run `npm run build` and upload the `dist/` folder to any static host. Netlify, Vercel, Cloudflare Pages and GitHub Pages all detect Astro automatically: set the build command to `npm run build` and the output directory to `dist`.
