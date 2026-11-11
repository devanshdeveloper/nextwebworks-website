# Changelog

All notable changes to the Next Web Works platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.2] - 2026-11-11

### Changed
- **Calendly 30-Min Call Alignment**: Standardized all discovery call copy across header, hero, agenda, blog articles, and footer from 20-min to "Book a 30-Min Call" to match the active Calendly event.
- **Sole Proprietorship Legal Declarations**: Codified Devansh Khetwani as the Sole Proprietor across footer and legal policies, resolving the `[PROPRIETOR FULL LEGAL NAME - TO PROVIDE]` placeholder.
- **Rolling Discovery Queue Batch 16**: Advanced open questions queue to Batch 16, codifying all Batch 15 architecture and component decisions.

## [0.3.1] - 2026-11-11

### Fixed
- **Privacy Policy & Terms of Service HTML Rendering**: Fixed raw HTML tags displaying on `/privacy` and `/terms` by parsing CMS policy body through `cleanArticleHtml` sanitizer and rendering sanitized semantic HTML via `dangerouslySetInnerHTML`.
- **Home Hero Services Link Navigation**: Wired `#services` section ID to `ServicesSection.js` with `scroll-mt-16` offset, added canonical anchor IDs (`#work`, `#faq`, `#contact`), and added smooth scrolling with graceful router fallback in `HeroSection.js`.
- **Link Integrity**: Validated all 72 internal and external links sitewide to ensure zero dead or broken links.

## [0.3.0] - 2026-11-11

### Added
- **Single Authoritative Hero Sections**: Resolved duplicate hero sections on `/services` and `/work` by implementing dedicated route hero components (`ServicesHeroSection.js`, `WorkHeroSection.js`) and adding a `hideHeader` prop to `ServicesSection` and `WorkShowcaseSection`.
- **Dynamic Service Detail Routes (`/services/[slug]`)**: Created dynamic App Router detail pages backed by NWW CMS `Service` model with graceful static fallback for all 5 technical capability drawers. Included unique dynamic metadata, breadcrumbs, Service JSON-LD (zero rates), and sitemap generator.
- **Dynamic Work Detail Routes (`/work/[slug]`)**: Created dynamic App Router deliverable detail pages backed by NWW CMS `Portfolio` model with strict white-label confidentiality enforcement (masking client identities unless marked `clientPublishable: true`), CreativeWork JSON-LD, and sitemap generator.
- **Minimum 5 Sections per Page Rule**: Added `.agents/rules/min-sections-per-page.md` and updated `AGENTS.md` and `site/app/AGENTS.md`. Extended `site/scripts/check-structure.mjs` to strictly enforce that every non-exempt public route composes $\ge 5$ modular section components following the `// section: <id>` and `data-section="<id>"` contract.
- **Modular Page Decompositions**: Upgraded `/services` (6 sections), `/work` (6 sections), `/blog` (5 sections), `/blog/[slug]` (5 sections), `/contact` (5 sections), `/book-a-call` (5 sections), `/services/[slug]` (7 sections), and `/work/[slug]` (7 sections). Route-scoped components are cleanly organized into subdirectories (`_components/services/`, `_components/work/`, `_components/blog/`, `_components/contact/`, `_components/book-a-call/`) ensuring no folder exceeds 10 files.
- **Redesigned 16:9 Theme-Aware Blog Covers**: Re-engineered deterministic vector SVG covers ($\le 5.0$ KB) in `site/lib/blog-utils.js` across 4 category motifs (`agency-growth`, `project-scoping`, `architecture`, `general`) with theme-aware classes for crisp rendering in both light and dark modes.
- **Clean Plain-Text Excerpt Deduplication**: Upgraded `stripHtml` in `site/lib/blog-utils.js` to strip leading heading tags, discard duplicate post title text at excerpt starts, decode HTML entities, and trim cleanly on word boundaries with an ellipsis only when truncated.

### Changed
- Bumped application version to `0.3.0`.

## [0.2.0] - 2026-11-11

### Added
- **Theme Switcher**: Complete light mode (default on initial visit) and dark mode implementation via Tailwind CSS v4 `@custom-variant dark`. Persisted in `localStorage` with zero-FOUT `<head>` blocking script and accessible toggle in desktop `Nav` and mobile drawer.
- **Brand SVG Logo & Mark**: Hand-crafted vector SVG wordmark (`site/public/assets/logo.svg`) and compact icon mark (`site/public/assets/logo-mark.svg`) featuring the distinctive magenta accent and crisp geometric typography across 24px, 40px, and 200px sizes. Registered in `public/assets/manifest.json`.
- **Engineering Capabilities Bento Grid**: Rebuilt the 5 capabilities cards into an asymmetrical Bento grid at the `ultra` motion tier (GSAP staggered entrance, hover micro-lift, prefers-reduced-motion check, and mobile touch fallback).
- **Independent Closed Specs**: Initialized all 5 capabilities specs as closed by default on load, with independent toggle controls and full keyboard accessibility.
- **Flagship Products Showcase**: Updated Deliverable Showcase to feature in-house products (**NWW Headless CMS Kit**, **ClassyMenu**, **CeramicSales**) under white-label confidentiality.
- **Per-Page Decoupled Content**: Created decoupled content modules in `site/content/` (`services.js`, `forAgencies.js`, `work.js`, `about.js`) providing unique contextual FAQs and custom Final CTA banners per route.
- **Synchronized Structured Data**: Added route-specific `FAQPage` JSON-LD schemas matching visible FAQ content on `/`, `/services`, `/for-agencies`, `/work`, and `/about` with zero rates.
- **About Page Expansion**: Expanded `/about` with Founder positioning, 4 Core Engineering Principles, 4 "What We Do NOT Do" boundaries, 14-day warranty details, and Indore engineering operations.
- **Blog Plain-Text Excerpts & Sanitization**: Implemented safe regex-based HTML stripping and word-boundary trimming for blog list cards, allowlist HTML sanitizer for detail pages with duplicate leading `<h1>` removal, and deterministic in-house SVG covers ($\le 5.0$ KB).

### Changed
- Refactored all sections, inputs, buttons, and navigation links to paired light/dark classes for high contrast and readability.
- Bumped application version to `0.2.0`.

