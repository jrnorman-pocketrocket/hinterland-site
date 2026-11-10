# Hinterland Trailer Hire website

Static site built with Astro, hosted on GitHub Pages at www.hinterlandtrailerhire.com.au. Bookings, payments, ID checks and confirmations are all handled by Lockii; this site never touches customer data.

## Everyday edits

Almost everything lives in `src/data/site.ts`:

- **Prices, specs, wording:** edit the trailer entry.
- **Add a trailer type:** copy a trailer entry, change the details, add photos to `public/images` as `name-800.webp` and `name-1600.webp`, and paste its Lockii product ID (with the `product_` prefix) into `lockii.productId`. The card, trailer page and footer link appear automatically.
- **Another trailer of the same type:** add it as stock in Lockii. No site change needed.
- **New location:** copy a location entry. Set `page: true` to publish a `/locations/<slug>/` page.
- **Going self-serve:** change `pickup.mode` to `'self-serve'`. Pickup wording updates everywhere.

## Lockii

1. Set `booking.companyId` (Lockii > Settings > Website & Embeds) and each trailer's `lockii.productId` (from the product page URL, including the `product_` prefix). The base script and checkout button switch on automatically.
2. In Lockii, allow the domain `www.hinterlandtrailerhire.com.au` if it asks for domain approval.

## Run locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/ plus sitemap.xml
```

Pushing to `main` deploys automatically via `.github/workflows/deploy.yml`.
