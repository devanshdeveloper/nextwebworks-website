# Changelog

All notable changes to the Next Web Works platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

