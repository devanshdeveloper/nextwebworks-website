---
trigger: manual
description: Pre-release verification checklist covering line ceilings, asset manifests, dynamic sitemap, and robots directives.
---

# Pre-Release & Deployment Checklist

Execute this checklist before deploying to Vercel production or delivering builds for client review:

## 1. Compliance & Static Audits
- [ ] Run `pnpm --dir site check:structure` — verify 0 line ceiling violations (`page.js` <= 80, section <= 250) and 0 RSC violations.
- [ ] Run `pnpm --dir site check:assets` — verify all assets are present in manifest and adhere to zero-stock policy.
- [ ] Run `pnpm --dir site lint` — verify ESLint passes with 0 errors.
- [ ] Run `pnpm --dir site build` — verify all static and ISR routes compile cleanly without date evaluation or prefetching errors.
- [ ] Run `pnpm --dir site check:content` — verify zero cross-page text repeats, unique CTA/form copy, and FAQ depth compliance (>= 5 Q&As, answers >= 25 words).

## 2. Content & Brand Invariants
- [ ] Zero rates, prices, hourly figures, retainers, or split percentages anywhere in the build.
- [ ] Zero stock photography (`stock_ceiling: 0`).
- [ ] Sample builds tagged with `Illustrative sample · not a client project`.
- [ ] Verbatim approved FAQs present, including *“Will our client find out?”*.

## 3. SEO & Indexing Directives
- [ ] Apex domain canonicalization active (`https://nextwebworks.in`).
- [ ] Dynamic sitemap generated at `/sitemap.xml` with all indexable routes, excluding `/book-a-call/thank-you`.
- [ ] Robots rules correct (`/robots.txt` disallows `/book-a-call/thank-you` and references sitemap).
- [ ] For production launch: `NEXT_PUBLIC_PREVIEW_GUARD="false"` so search engines index the site and staging banner is hidden.
