# Indivisual

A simple gallery website for original artwork collections.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding images

Place files in:

- `/public/images/logo.png` - site logo
- `/public/images/ozdinkum/` - OZ Dinkum Series gallery
- `/public/images/blart/` - Blart Series gallery
- `/public/images/iconic/` - Iconic Series (`icon16.png` for homepage preview; `icons1.png` and `icons2.png` for the gallery)

Supported formats: jpg, jpeg, png, webp, avif

## Etsy shop

Edit `etsyUrl` in `src/lib/site.ts`. Leave it blank to keep the button disabled with the "Coming Soon" label. Once a URL is added, the button becomes "Shop on Etsy".

## Editable content

All page copy lives in `src/lib/site.ts`.
