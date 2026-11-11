# App Router Directives

## Architecture
- Root `layout.js` sets font variables, pre-launch guard metadata, `<Nav />`, `<Footer />`, and `<WhatsAppButton />`.
- Page routes (`page.js`) are thin Server Components <= 80 lines rendering section components in order.
- Route-specific components reside in `_components/` under each route folder, <= 250 lines each.
- Dynamic CMS routes (`blog/`, `blog/[slug]/`, legal policies) consume class-based helpers from `@/lib/cms-kit`.

## Conventions
- Every section component begins with `// section: <id>` and attaches `data-section="<id>"`.
- Standard page-bottom stack strictly preserved: FAQ Accordion -> Final CTA Banner -> Contact Form -> Footer.
- Interactive leaves (`'use client'`) isolated to spec drawers, accordion toggles, and form submissions.

## Anti-patterns
- Never add `'use client'` to `page.js` or `layout.js`.
- Never exceed 80 lines in `page.js` or 250 lines in section components.
- Never hardcode prices, rates, or commercial splits.

## Commands
- `pnpm check:structure`: Validate line ceilings and RSC boundaries.
