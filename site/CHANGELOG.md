# Changelog

All notable changes to the Next Web Works platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2026-11-11

### Added
- **Ultra Motion System & GSAP Primitives (`site/components/motion/`)**: Built a reusable motion system powered by GSAP 3.15.1, `@gsap/react` 2.1.2, and Lenis 1.3.27. Includes reusable client primitives:
  - `MotionFadeIn`: Viewport scroll-triggered fade and slide with `@gsap/react` scoping and matchMedia fallback.
  - `MotionStagger`: Coordinated staggered entrance for card grids, timelines, and feature lists.
  - `MotionTilt`: 60fps cursor tilt card interaction using `gsap.quickTo()` with 3D transform perspectives.
  - `MotionMagnetic`: Physics-based cursor spring magnet for high-intent primary CTA buttons.
  - `MotionNumberTicker`: Numerical counter transition for metrics and statistics.
  - `MotionPathDraw`: SVG stroke draw reveal for schematics and architectural lines.
- **Shared Motion Tokens (`site/lib/motion.js`)**: Codified standardized duration tokens (`instant`, `fast`, `base`, `smooth`, `epic`), GSAP easing curves (`power2.out`, `power3.out`, `back.out(1.4)`, `power2.inOut`), stagger delays, and the `shouldAnimate()` guard enforcing system `prefers-reduced-motion` and touch hardware awareness.

### Changed
- **Full-Site Motion & Design Polish Across All Pages & Sections**: Upgraded every page and every section (Home, Services list & details, Work list & details, For Agencies, About, Blog list & articles, Contact, Book a Call, Thank You, 404, and Error) with purposeful entrance choreography, magnetic actions, and 3D card tilts.
- **Layout & Rhythm Diversity**: Ensured no adjacent sections share identical layout and entrance choreography, eliminating uniform fade-up patterns and generic templates.
- **Strict Accessibility & Performance Guardrails**: Zero layout shift, full SSR/prerender content preservation, automatic event cleanup via `useGSAP` contexts, touch fallbacks, and zero new runtime dependencies (static chunk size reduced to ~799 KB).

## [0.5.2] - 2026-11-11

### Fixed
- **Duplicate Brand Name in Page Titles**: Removed redundant `| Next Web Works` suffixes across all App Router `page.js` routes (`/about`, `/blog`, `/blog/[slug]`, `/book-a-call`, `/book-a-call/thank-you`, `/contact`, `/for-agencies`, `/privacy`, `/terms`, `/services`, `/services/[slug]`, `/work`, `/work/[slug]`), allowing the root `template: '%s | Next Web Works'` in `site/app/layout.js` to append the brand suffix cleanly exactly once without duplication.

## [0.5.1] - 2026-11-11

### Fixed
- **Markdown Table Support for Blog Articles**: Added semantic markdown table parsing to `cleanArticleHtml` in `site/lib/blog-utils.js`, automatically converting both paragraph-wrapped (`<p>| ... |</p>`) and multiline markdown tables into responsive, theme-styled HTML `<table>` elements with horizontal scrolling, subtle borders, and monospace headers.

## [0.5.0] - 2026-11-11

### Added
- **Modular SVG Generator System (`site/lib/svg/`)**: Introduced a modular, theme-aware, deterministic SVG generator library composed of primitives (`defs`, `patterns`, `frames`, `nodes`, `blocks`, `badges`), Tailwind-derived tokens, real CMS category/work scenes, a seeded PRNG (Mulberry32) for build-stable rendering, and a central registry `<SvgScene />`.
- **Services Page Redesign to Reference Standards**: Redesigned `/services` and `/services/[slug]` to match reference benchmarks (`linear.app`, `stripe.com`, `posthog.com`) with 12-column responsive split grid, deliberate section anatomy (eyebrow, heading, support line, action, proof), dedicated capabilities bento (`ServicesCapabilitiesSection.js`), 4-stage connected delivery pipeline (`ServicesProcessSection.js`), and inline SVG architecture schematics.
- **Work Page Redesign to Reference Standards**: Redesigned `/work` and `/work/[slug]` with 12-column split case study layouts, dedicated deliverable showcase grid (`WorkShowcaseGridSection.js`), 4-stage white-label staging & transfer pipeline (`WorkProcessSection.js`), and bespoke deliverable SVG schematics.

### Changed
- **Removed SVG Size Limit**: Completely removed all SVG byte budgets ($\le 5.0\text{ KB} / 15\text{ KB}$) across `check-assets.mjs`, `AGENTS.md`, `release-checklist.md`, `zero-rates-and-confidentiality.md`, `verify/SKILL.md`, and documentation while preserving the strict zero-stock policy (`stock_ceiling: 0`) and asset manifest integrity.
- **Re-Wired Blog Components to Modular SVG System**: Replaced legacy monolithic cover code in `site/lib/blog-utils.js` with `<SvgScene />` across `BlogFeaturedSection`, `BlogGridSection`, and `BlogArticleHeaderSection`.
- **Decoupled Blog Article Author & CTA Banners**: Parameterized `BlogArticleAuthorSection` and `FinalCTABanner` per slug with dedicated copy in `site/content/blog.js`, ensuring 100% content uniqueness and 0 duplicate text violations.

## [0.4.0] - 2026-11-11

### Added
- **Hard Content-Uniqueness Rule**: Added `.agents/rules/unique-content-per-page.md` (`trigger: always_on`) strictly prohibiting content block duplicates ($\ge 4$ words or $\ge 25$ chars), exact section repeats, thin FAQs ($< 5$ Q&A or answers $< 25$ words), and near-duplicate answers sitewide. Added invariant directives to `AGENTS.md` and `site/app/AGENTS.md`.
- **Lightweight Pre-Render HTML Content Auditor (`check:content`)**: Created `site/scripts/check-content.mjs` and wired `"check:content"` into `package.json`, `.agents/skills/verify/SKILL.md`, `release-checklist.md`, and `AGENTS.md`. Parses prerendered HTML output under `.next/server/app/**/*.html`, evaluating Jaccard shingle similarity, section hashes, FAQ item depth, and an explicit approved allowlist.
- **Dedicated Decoupled Content Modules**: Created `site/content/contact.js`, `site/content/bookACall.js`, and `site/content/blog.js`, and expanded `site/content/home.js`, `site/content/about.js`, `site/content/forAgencies.js`, `site/content/services.js`, and `site/content/work.js`. Every page features distinct hero, CTA, contact form, and FAQ content.
- **Dynamic Blog Related Reading System**: Enhanced `BlogArticleRelatedSection.js` to accept `currentSlug` and render distinct, article-specific playbooks from `blogContent.relatedArticlesBySlug` with zero repetitive text across blog posts.

### Changed
- **FAQ Component Accessibility & Prerendering**: Updated `FAQSection.js` accordion body to toggle `block` vs `hidden` classes instead of unmounting so all questions and answers render completely into SSR HTML for search engine indexing and automated content audits.
- **Dynamic CTA & Contact Form Intros**: Parameterized `FinalCTABanner.js` (`content.badge`, `content.footnote`) and `ContactFormSection.js` (`content.eyebrow`, `content.leadIn`, `content.description`) to eliminate sitewide boilerplate cloning.
- **Route-Specific Capability & Showcase Grids**: Decoupled `/services` and `/work` card grids from Homepage summaries (`servicesContent.drawers`, `servicesContent.stackMatrix`, `workContent.showcase`), providing deep technical architecture specifications.

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

