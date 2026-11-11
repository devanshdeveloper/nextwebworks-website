# App Router Directives

## Architecture
- Root `layout.js` sets font variables, pre-launch guard metadata, `<Nav />`, `<Footer />`, and `<WhatsAppButton />`.
- Page routes (`page.js`) are thin Server Components <= 80 lines rendering at least 5 section components in order (see .agents/rules/min-sections-per-page.md).
- Route-specific components reside in `_components/` under each route folder, <= 250 lines each.
- Dynamic CMS routes (`blog/`, `blog/[slug]/`, legal policies) consume class-based helpers from `@/lib/cms-kit`.
- Blog articles support dual content formats: legacy sanitized HTML and CommonMark/GFM Markdown via `@/lib/markdown/pipeline.js`. Markdown is parsed to HAST server-side and rendered into native RSC elements with Shiki syntax highlighting, responsive tables, callout alerts, and lazy client-side Mermaid diagrams. Excerpts and reading times are derived via `@/lib/markdown/helpers.js`.

## Conventions
- Every section component begins with `// section: <id>` and attaches `data-section="<id>"`.
- Standard page-bottom stack strictly preserved: FAQ Accordion -> Final CTA Banner -> Contact Form -> Footer.
- Interactive leaves (`'use client'`) isolated to spec drawers, accordion toggles, and form submissions.
- Unique content invariant strictly enforced: zero cross-page text repeats, unique CTA/form copy, and FAQ floor >= 5 Q&As >= 25 words (see .agents/rules/unique-content-per-page.md).

## Anti-patterns
- Never add `'use client'` to `page.js` or `layout.js`.
- Never exceed 80 lines in `page.js` or 250 lines in section components.
- Never hardcode prices, rates, or commercial splits.

## Commands
- `pnpm check:structure`: Validate line ceilings and RSC boundaries.
- `pnpm check:content`: Validate unique content and FAQ depth.
