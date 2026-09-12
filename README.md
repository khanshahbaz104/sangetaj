# Sange Taj Marble

The lifestyle and home decor subdomain for Sange Taj. Built as a separate Next.js app and intended to deploy to `marble.sangetaj.com`.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion for animation
- Lenis for smooth scroll

## Develop

```bash
npm install
npm run dev
```

The dev server runs on port 3001 so it can run alongside the parent `sang-e-taj` project (which uses 3000).

## Structure

- `src/app` — App Router pages, layouts and metadata
- `src/components/sections` — Homepage and large reusable sections
- `src/components/layout` — Navigation and Footer
- `src/components/ui` — Smaller shared components (ProductCard, ProductGallery, Reveal, etc.)
- `src/data` — Static product and category data
- `src/lib` — Utility helpers

## Production build

```bash
npm run build
npm start
```
