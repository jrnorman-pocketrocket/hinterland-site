# Hinterland Trailer Hire website

Static site built with Astro, hosted on GitHub Pages at www.hinterlandtrailerhire.com.au. Bookings, payments, ID checks and confirmations are all handled by Lockii; this site never touches customer data.

## Everyday edits

Almost everything lives in `src/data/site.ts`:

- **Prices, specs, wording:** edit the trailer entry.
- **Add a trailer type:** copy a trailer entry, change the details, add photos to `public/images` as `name-800.webp` and `name-1600.webp`, and paste the Lockii widget code into `lockii.embedHtml`. The card, trailer page and footer link appear automatically.
- **Another trailer of the same type:** add it as stock in Lockii. No site change needed.
- **New location:** copy a location entry. Set `page: true` to publish a `/locations/<slug>/` page.
- **Going self-serve:** change `pickup.mode` to `'self-serve'`. Pickup wording updates everywhere.

## Lockii

1. Paste each product's widget code into that trailer's `lockii.embedHtml`, or set `booking.hostedUrl` to Lockii's hosted booking page.
2. In Lockii, allow the domain `www.hinterlandtrailerhire.com.au` if it asks for domain approval.

## Run locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/ plus sitemap.xml
```

Pushing to `main` deploys automatically via `.github/workflows/deploy.yml`.
