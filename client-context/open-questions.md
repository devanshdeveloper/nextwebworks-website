# Rolling Client Discovery & Refinement Questions

**Project:** Next Web Works (`nextwebworks-website`)  
**Status:** Active Rolling Brain & Context Expansion Queue (Batch 15: Component Blueprints, Breakpoints, Markdown Rendering & SEO Schemas)  
**Active Open Questions Count:** 20  

---

### Category A: Stage 3 Component Architecture & Visual Schematics

1. **Homepage Hero Schematic Nodes:** In the stylized architecture node card in the hero, what exact 4 connected nodes should represent the white-label workflow?
   - **(A) (Recommended)** `Agency Brand / Client Spec` → `Next Web Works Engineering Layer` → `Next.js App Router & API` → `White-Label Deliverable (Client Portal / Site)` (connected with cobalt lines and subtle packet flow).
   - **(B)** `Marketing Agency Brief` → `TypeScript Codebase` → `Isolated Staging Review` → `Handover Repository`.
   - **(C)** `Figma / Requirements` → `Server-Rendered UI` → `Prisma + Postgres DB` → `Production Handover`.

2. **Navigation Bar Interaction & Sticky Behavior:** How should the persistent header behave across scroll depths?
   - **(A) (Recommended)** Transparent at top of page; transitions smoothly to semi-opaque slate (`#0B0F19/80`) with `backdrop-blur-md` and 1px hairline border (`#1E293B`) once scrolled past 40px; "Book a 20-Min Call" CTA button remains permanently visible.
   - **(B)** Solid dark background (`#0B0F19`) at all times with permanent 1px hairline border.
   - **(C)** Auto-hiding header (slides up on scroll down, slides down on scroll up).

3. **Pain-Point Card Graphic Accents:** Beside the titles of the 3 qualitative pain-point cards (*"The Freelancer Ghost"*, *"The Unbillable In-House Salary"*, *"The Costly Code Rewrite"*), what visual graphic should accompany each?
   - **(A) (Recommended)** Minimalist monochrome Lucide icons with subtle slate badge containers (Ghost / UserX, Banknote / DollarSign, RefreshCw / Code2).
   - **(B)** Abstract 2-color SVG wireframe glyphs showing broken timelines, cash drains, and tangled code loops.
   - **(C)** Clean typography-only cards with oversized monospace numerals (01, 02, 03) in muted slate (`#64748B`).

4. **Service Spec Drawer Expanded Content Layout:** When a visitor clicks *"View Technical Specs ↓"* on any of the 4 service cards, how should the inner content be structured?
   - **(A) (Recommended)** Two-column structured drawer: Left column displays bulleted deliverables checklist; Right column displays technical architecture standards & typical deployment targets, followed by *"Scoped and quoted on your first call"*.
   - **(B)** Single-column vertical checklist with bold section badges.
   - **(C)** Accordion sub-tabs dividing "Deliverables", "Technology", and "Handover Package".

---

### Category B: Responsive Breakpoints & Viewport Adaptation

5. **Tablet Viewport (768px–1024px) Grid Collapse:** For iPad and medium tablet viewports, how should the 2x2 service grid and 3-column matrices adapt?
   - **(A) (Recommended)** 2x2 services grid remains 2 columns; 3-column cards (Pain Points, Partnership Models) collapse to 2 columns with the 3rd card spanning full width or 1-column vertical stack for optimal legibility.
   - **(B)** Immediate collapse of all multi-column grids to a single vertical column below 1024px.
   - **(C)** Horizontal scrolling swipe carousel on tablet viewports.

6. **Mobile Navigation Drawer Pattern (<768px):** When an agency founder taps the mobile hamburger menu icon, what interaction pattern should open?
   - **(A) (Recommended)** Clean slide-down drawer beneath the header with dark blurred backdrop (`#0B0F19/95`), large tap-friendly links ($\ge 48$px height), and prominent "Book a 20-Min Call" primary button.
   - **(B)** Full-screen modal overlay with high-contrast centered typographic navigation.
   - **(C)** Slide-in drawer from the right screen edge.

7. **Floating Mobile CTA Pill Scroll Threshold:** On mobile screens (<768px), at what scroll point should the floating bottom pill (*"Book a 20-Min Call →"*) fade in?
   - **(A) (Recommended)** Fade in once the visitor scrolls past the hero section ($\approx 550$–600px scroll depth); automatically hide when the viewport enters the booking or contact form areas.
   - **(B)** Visible immediately upon page load at the bottom of the screen.
   - **(C)** Fade in after 50% of the page has been scrolled.

8. **Touch Target Sizing & Spacing Standards:** Across mobile layouts, how should interactive touch targets be protected against mis-taps?
   - **(A) (Recommended)** Strict adherence to WCAG 2.5.5: all buttons, menu triggers, drawer expanders, and form inputs enforce a minimum height of 44px (recommended 48px on mobile) with at least 8px spacing between adjacent interactive elements.
   - **(B)** 40px minimum touch target height.
   - **(C)** Standard browser default button sizing.

---

### Category C: Content Modeling & Seed Data Generation (Stage 5)

9. **Blog Post Rich-Text Formatting:** Inside dynamic articles on `/blog/[slug]`, how should typography and elements be styled in the reader view?
   - **(A) (Recommended)** High-contrast reading column (`max-w-3xl`), Plus Jakarta Sans headings with generous margins, Inter body (18px, 1.65 line height), blockquotes with 3px electric cobalt left border, and custom bulleted list markers.
   - **(B)** Standard Tailwind `@tailwindcss/typography` (`prose prose-invert`) defaults.
   - **(C)** Ultra-dense technical documentation layout with left-hand sticky table of contents.

10. **Related Articles Widget on `/blog/[slug]`:** At the bottom of each blog article, how should next reading recommendations be presented?
    - **(A) (Recommended)** 2-column card grid showing 2 related articles in the same category (or most recent posts fallback), each with category pill, title, 2-line summary, and reading time.
    - **(B)** Simple textual "Previous Article" and "Next Article" directional links.
    - **(C)** Single featured article card + primary CTA linking to `/book-a-call`.

11. **Native Social Sharing Controls:** In blog post headers or footers, what sharing mechanisms should be provided?
    - **(A) (Recommended)** Lightweight native Web Share API button (triggers native mobile OS share sheet) + 1-click "Copy Article Link" button with temporary toast confirmation; zero heavy external social tracking scripts.
    - **(B)** Static icon links to LinkedIn and Twitter/X opening pre-populated share intents.
    - **(C)** No share buttons; rely purely on visitors copying the browser address bar.

12. **NWW CMS API Timeout / Fallback Strategy:** If the NWW CMS API endpoint experiences a network timeout or downtime during a build or page request, how should the blog feed behave?
    - **(A) (Recommended)** Fallback gracefully to statically cached seed articles stored locally in `site/content/blog/` so the site never renders an empty state or error page.
    - **(B)** Render a clean empty state card: *"Articles are being refreshed. Check back shortly or book an intro call."*
    - **(C)** Trigger standard Next.js error boundary (`error.js`).

---

### Category D: SEO Technical Attributes & Canonical Hygiene (Stage 4)

13. **Dynamic OpenGraph Social Image Generation:** For articles on `/blog/[slug]`, how should OpenGraph social preview images (1200×630px) be generated?
    - **(A) (Recommended)** Dynamic server-generated OG images via Next.js App Router `site/app/blog/[slug]/opengraph-image.jsx` rendering article title, category badge, and Next Web Works branding on deep slate canvas (`#0B0F19`).
    - **(B)** Single static branded fallback OG image (`/opengraph-image.png`) used across all blog articles.
    - **(C)** Manual image upload required for each article in CMS.

14. **Structured Data `BreadcrumbList` Schema:** On sub-pages (`/services`, `/for-agencies`, `/work`, `/about`, `/blog`, `/blog/[slug]`), should JSON-LD include `BreadcrumbList` schema?
    - **(A) (Recommended)** Yes, inject standard `BreadcrumbList` JSON-LD on all sub-routes to enhance search engine snippet hierarchy.
    - **(B)** Include breadcrumbs only on dynamic blog articles (`/blog/[slug]`).
    - **(C)** Omit breadcrumb schemas to keep structured data minimalist (`Organization` and `Service` only).

15. **Image Alt-Text Standards for Technical Schematics:** For wireframe node diagrams and sample schematics, what alt-text standard should be enforced?
    - **(A) (Recommended)** Precise architectural description (e.g. *"System architecture diagram showing Next.js App Router streaming data from Prisma ORM to an agency reporting dashboard"*); avoid decorative empty `alt=""`.
    - **(B)** Short title-based alt tags (e.g. *"SaaS Analytics Architecture"*).
    - **(C)** Mark all schematics as decorative (`aria-hidden="true"`).

16. **AI Crawlers & Web Scrapers Policy (`robots.txt`):** In `site/app/robots.js`, how should AI training scrapers (e.g., GPTBot, CCBot, Google-Extended) be governed?
    - **(A) (Recommended)** Standard search engine crawlers allowed (Googlebot, Bingbot); block aggressive non-search AI training scrapers (`User-agent: GPTBot`, `User-agent: CCBot`, `Disallow: /`) to preserve proprietary copy and runbooks.
    - **(B)** Open to all crawlers without restrictions.
    - **(C)** Standard default `robots.txt` without custom bot rules.

---

### Category E: Testing, Verification & Review Presentation

17. **Client Review Hub Viewport Toggle Presets:** In the Gate 2 comparison portal (`gate-2-design-theory/index.html`), what viewport simulation widths should be toggleable?
    - **(A) (Recommended)** Desktop 1440px (full canvas layout), Tablet 768px (grid collapse check), Mobile 375px (iPhone standard viewport).
    - **(B)** Desktop 1280px and Mobile 390px only.
    - **(C)** Full-width fluid responsive container with browser resize instructions.

18. **Gate 2 Variation Review Timeframe & Revision Rounds:** To keep pipeline momentum brisk while ensuring thorough client alignment, how should variation reviews be capped?
    - **(A) (Recommended)** Up to 2 revision rounds on the selected variation, with consolidated feedback provided via email/chat.
    - **(B)** Single revision round only.
    - **(C)** Unlimited revision iterations.

19. **Local File Navigation vs Hosted Previews:** For internal testing and preview verification, should the variation previews open cleanly via offline `file://` protocols without broken fonts or assets?
    - **(A) (Recommended)** Yes, 100% self-contained HTML with embedded styles, SVGs, and system/local font stacks, guaranteed to function offline via `file://` or preview server.
    - **(B)** Require a local HTTP server (`node preview.mjs`) for viewing.
    - **(C)** Rely exclusively on the live GitHub Pages deployment.

20. **Stage 3 Immediate Output Scope:** Upon your confirmation of the preferred visual variation (V1, V2, or V3), what immediate deliverable should open Stage 3?
    - **(A) (Recommended)** `project-docs/client-review/gate-3-page-list/page-list.md` detailing all 11 core routes, visual anchors, component candidates, and build tracker checkboxes.
    - **(B)** Immediate generation of Next.js folder structure in `site/`.
    - **(C)** Draft wireframe layouts for all sub-pages before documenting the route master list.

---

## Codified Decisions History (Resolved in Batches 01–14)

### Commercial Terms & Zero-Rates Policy
- **Zero Rates Policy:** NO rates, prices, "from" figures, yearly maintenance fees, retainer figures, volume discounts, pilot discounts, rush percentages, or payment-split figures anywhere on the public website. Pricing is discussed directly on discovery calls.
- **Hero Secondary CTA:** `"Explore Services & How We Work ↓"`.
- **Services 2x2 Grid:** 5 core sections approved. Anchors:
  1. Websites & Marketing Platforms (`#websites`)
  2. Custom Web Applications & Client Portals (`#web-apps`)
  3. Operations & Business ERPs (`#erps`)
  4. Cross-Platform Mobile Apps (`#mobile-apps`)
  5. Agency CMS & No-Code Platforms (`#cms-platforms`)
  - Spec drawers toggle: `"View Technical Specs ↓"` / `"Hide Technical Specs ↑"`. Each card ends with *"Scoped and quoted on your first call"*.
- **Partnership Matrix on `/for-agencies`:** 3-column side-by-side comparison matrix:
  - Column 1: *"Scoped Pilot Build"*
  - Column 2: *"Fixed-Price Sprints"*
  - Column 3: *"Dedicated Dev Bench"*
  - Ending: *"Terms discussed on discovery call"*. Zero published figures or hour caps.
- **Retainer Model Copy:** *"Dedicated monthly developer hours with a priority queue."*
- **Agency Margin Framing:** *"Predictable project scoping lets you bundle development into your own service lines."* (Softened framing; avoids outcome promises).
- **Maintenance Plan Scope:** *"Includes up to 1 hour of copy edits per month, maintenance, backups, security and updates. Domain and hosting not included."* No prices shown.
- **Client-Call Attendance:** Attendance on agency client calls is included in one-time project quotes; on retainers it is deducted from retainer hours. Site copy: *"We can join client calls as your technical lead when you introduce us."* The agency decides how to introduce the developer (no fake titles like "Head of Development").
- **Turnaround & Kickoff Commitments:** Quote line: `"Quotation in 24 hours"`. Kickoff: `"Kickoff: same day"`. Small-task and critical-blocker turnaround: `"typical"`.
- **Support & Triage Hours:** Standard business hours across all pages and support mentions: **Monday–Friday, 10:00 AM – 7:00 PM IST**.
- **Defect Intake & Triage SLA:** Bug intake asks for description, steps to reproduce, page URL, browser/device, screenshot/video, and severity. Critical blockers typically triaged same business day (IST: 10:00 AM – 7:00 PM); routine items within 1–2 business days.
- **Post-Launch Fix Window:** `"14-day post-launch fix window included on full builds"`. Proactive check-ins on Day 7 and Day 14. Formal Day-14 sign-off message confirming closure with offer to discuss ongoing maintenance or retainer hours (no figures in message).

### Supported Platforms & Engineering Capabilities
- **Primary Platform:** `Next.js` (App Router, React Server Components).
- **Supported Platforms & Stacks:** Displayed as static monospace pill tags (*"Builds in the platform your client already uses"*):
  - CMS & No-Code: `WordPress` (custom themes, plugins, Gutenberg, ACF), `Webflow`, `Wix`
  - Custom Web: `Next.js`, `React.js`, `MERN`, `PHP`
  - Mobile: `React Native` (iOS & Android)
- **Cloud Setup Line:** *"We set up production on Vercel, AWS, DigitalOcean or your preferred cloud provider."* Configured directly in agency's own cloud accounts so secrets rarely need transferring.
- **Staging Preview Hosting:** Hosted on the agency's own domain or cloud account, or neutral project name on Vercel preview (zero "nextwebworks" in staging URL so white-label promise is preserved).
- **Codebase Handover Standards:**
  - Standard `README.md` structure: 1. Project Overview & Architecture, 2. Prerequisites & Node/Package Manager versions, 3. Local Development Setup, 4. Environment Variables Reference, 5. Deployment Guide (Vercel/AWS), 6. Handover Verification Checklist.
  - Branching: `main` (production deployment branch) + `staging` (preview review branch), with feature branches merging into staging. Verify branch protection availability on agency GitHub plan.
  - Handover CI/CD: Include standard `.github/workflows/ci.yml` running linting (`eslint`), code formatting check (`prettier --check`), and build validation (`pnpm build`).
  - Credentials protocol: Production secrets transferred via Bitwarden/1Password secure share link. Never emailed. Private GitHub repository ownership transferred directly to agency GitHub organization at final delivery.

### Design System & Visual System (Gate 2)
- **Visual Variations Approved:**
  - V1 (The Modernist Technical Lead): Deep slate canvas (`#0B0F19`), `#0F172A` cards, subtle cobalt hairline highlights.
  - V2 (The Crisp Engineering Partner): Clean high-contrast neutral white canvas (`#FFFFFF`), `#F8FAFC` cards, cobalt interactive accents.
  - V3 (The Hybrid Operator): Deep slate dark hero/footer zones with high-contrast light content body zones. (Devansh lean: V3 or V1; final decision in review hub).
- **Hero Eyebrow Badge:** *"White-Label Engineering Partner for Marketing Agencies"*. Main H1 / subheadline carries outcome line: *"Say Yes to Every Client Dev Request. Without Hiring Developers."*
- **`/about` Engineering Standards Header:** *"Engineering Standards: How We Build Behind Your Brand"* (grounded in clean typed code, staging previews, clean handovers).
- **Color Discipline & Focus Rings:** Cobalt `#2563EB` reserved exclusively for interactive touchpoints and buttons; prohibited for body text on `#0B0F19` dark canvas. Keyboard focus rings: 2px electric cobalt ring with 2px offset (`ring-2 ring-blue-600 ring-offset-2 ring-offset-slate-900` on dark canvas; `ring-offset-white` on light surfaces). Emerald `#10B981` reserved for live status indicators and workflow nodes.
- **Typography:** Display: Plus Jakarta Sans; Interface/Body: Inter; Monospace: JetBrains Mono. Configured with `display: 'swap'` and `adjustFontFallback: true` for zero CLS.
- **Asset Budgets & Guards:** Strict byte budgets enforced ($<150\text{ KB}$ for card illustrations/SVGs; $<250\text{ KB}$ for sample schematics). Zero stock photography (stock ceiling = 0).
- **Internal Web Vitals Benchmarks:** Accessibility $\ge 95$, SEO $\ge 95$, CLS $< 0.1$, LCP $< 2.5\text{s}$, and Performance $\ge 85$ on mobile with `ultra` motion tier. Zero scores published until measured.
- **Pain-Points Order:** 1. The Freelancer Ghost, 2. The Unbillable In-House Salary, 3. The Costly Code Rewrite. Qualitative copy only; zero invented statistics.
- **Workflow Pipeline:** 4-step horizontal connected pipeline on desktop, vertical on mobile, with static emerald nodes (subtle pulse at most; zero scrubbed progress bars).
- **Grounded Illustrative Samples (`/work`):** 3 builds with interactive tab switcher, SVG node diagrams, cobalt lines, and expandable architectural specification notes.
  - Sample 1: SaaS Analytics Portal (Next.js App Router, React Server Components data streaming, Prisma + PostgreSQL, exportable client summaries).
  - Sample 2: Business & Operations ERP (derived from proprietary product capabilities `next-web-business`: multi-tier GST tax engine [CGST/SGST/IGST], atomic FIFO stock lot depletion with MongoDB session transactions, QuestPDF vector rendering service, role-based access audit trail; described as product capabilities, not client deliverables).
  - Sample 3: Field-inspection cross-platform mobile app (React Native shared codebase, camera/photo capture, push notifications, role-based checklists, store submission support; zero unconfirmed offline sync, biometrics, or signed S3 uploads).
  - Monospace pill: `Illustrative sample · not a client project`. Zero unmeasured synthetic metrics.
- **Mobile Persistent CTA Floating Pill:** *"Book a 20-Min Call →"* appearing after hero scroll on mobile viewports (<768px); strictly hidden on `/book-a-call`, `/contact`, and `/book-a-call/thank-you`.
- **Motion Tier:** `ultra` (GSAP 3 ticker sync + Lenis, non-blocking WebGL/GLSL, subtle border glow + -2px lift). Autoplay video reels prohibited.

### Legal Entity, Brand & Trust Guarantees
- **Legal Entity:** Next Web Works (Sole Proprietorship, Indore, Madhya Pradesh, India). Proprietor legal name: `[PROPRIETOR FULL LEGAL NAME - TO PROVIDE]`. No GSTIN shown unless provided.
- **Public Business Address:** `"Indore, Madhya Pradesh, India"` (city-level only in footer and structured data; no street address).
- **Founder Identity:** Devansh, `"Founder & Lead Engineer"`. Authentic narrative written by founder. Placeholders kept strictly visible until provided: `[FOUNDER HEADSHOT]`, `[FOUNDER BIO / STORY TO PROVIDE]`.
- **White-Label Definition:** *"We deliver under your brand with no NWW credits or watermarks. You can introduce us as your in-house developer. Commits appear under our developer handle unless you ask us to author them under your agency's identity."*
- **Legal Terms & NDA:** Mutual NDA signed before work starts and IP assignment stated as contract standards. Zero downloadable NDA/agreement templates; zero unapproved legal drafting (Terms and Privacy drafted by a lawyer).
- **7 Core FAQs on `/for-agencies`:**
  1. *Who owns the code?* "You do: the repository is transferred to your organization at handover."
  2. *Will our client find out?* "We deliver under your brand with no NWW credits or watermarks. You can introduce us as your in-house developer. Commits appear under our developer handle unless you ask us to author them under your agency's identity."
  3. *What if a bug appears after launch?* "14-day post-launch fix window included on full builds (proactive check-ins on Day 7 and Day 14), followed by an optional ongoing maintenance plan."
  4. *Can you join client calls?* "We can join client calls as your technical lead when you introduce us."
  5. *What stacks do you support?* "Next.js, WordPress, Webflow, Wix, React.js, MERN, PHP, and React Native."
  6. *How do scope changes work?* "Written change request with an itemized, revised quote before any out-of-scope work proceeds."
  7. *How do we get started?* "Book a 20-min call, sign a mutual NDA, review your brief, quote in 24 hours, and kickoff the same day."

### Forms, Lead Capture & Booking Architecture
- **Cal.com Meeting Parameters:** 20 minutes duration, Monday–Friday, 10:00 AM – 7:00 PM IST, 15-minute buffer between calls, 2-hour minimum advance notice.
- **Cal.com Blocked Embed Fallback UI:** Clean fallback card displaying: direct booking link + WhatsApp direct button + embedded 5-field inquiry form, ensuring a blocked embed never loses a lead.
- **Form Error Styling:** Crisp red-500 hairline border (`border-red-500`), subtle red tint background (`bg-red-500/5`), plus an icon or short text message in each error so color-blind visitors can read it (not relying on red alone).
- **Booking Thank-You Page (`/book-a-call/thank-you`):** "What to bring" checklist (client requirements, Figma designs, current dev bottlenecks), "Add to Calendar" buttons (Google/Outlook/iCal), link to `/for-agencies`, and WhatsApp contact. Strictly no downloadable NDA document link.
- **Inbound Notifications via Resend:** Internal alerts sent from `alerts@nextwebworks.in` with reply-to set to lead's own email for instant 1-click reply. Standardized subject line: `[Website Lead] <Agency Name> — <Dev Work Type>`. Slack completely eliminated from lead alerts.
- **Immediate Autoresponder:** Automated transactional email sent from `contact@nextwebworks.in` to lead: *"We've received your enquiry. Devansh will reply within 24 hours."*
- **Form Fields (5 Qualifying Fields):** Agency Name, Team Size, Type of Dev Work, Monthly Client Requests, Project Scope (`project_scope` placeholder: *"e.g. a Next.js client portal, 3 WordPress marketing sites, or dedicated monthly dev support"*).
- **Consent Line:** Displayed under every form: *"We'll use your details only to reply to your enquiry. Privacy Policy"* (linked to `/privacy`). Invisible honeypot spam trap (`company_url`).
- **Short 404 Page:** Clean and short: *"404: page not found."* + buttons: *"Return home"* and *"Book a 20-Min Call"*. Purely static with zero telemetry logging at launch to protect visitor privacy.

### SEO & Dynamic Blog Strategy
- **Global Title:** `White-Label Development Partner for Agencies | Next Web Works` (59 chars, <60 chars limit).
- **Global Description:** `We build websites, custom web apps, ERPs and mobile apps under your agency's brand. Say yes to every client dev request without hiring developers.`
- **Structured Data:** `Organization`, `Service`, `BlogPosting` schemas. Zero fake price markup; zero review markup.
- **Sitemap:** All core routes + dynamic blog posts; strictly omit `/book-a-call/thank-you` (noindexed).
- **Dynamic Blog (`/blog`):** 9 posts per page; pagination triggers only once >9 posts exist. Topic filter bar hidden until $\ge 6$ posts exist (show category pill on each card only until then).
  - Launch Article 1: *"The White-Label Playbook: How Marketing Agencies Ship Custom Web Apps Without In-House Devs"*
    - Subheadings: 1. The Dilemma: Turn Profitable Dev Work Away or Bleed Margin on Payroll? 2. Common Failure Modes of Freelance Delivery, 3. The Behind-the-Scenes Engineering Partner Model, 4. The 4-Point Checklist for Scoping Your First White-Label Sprint.
  - Launch Article 2: *"How to Scope Fixed-Price Web Projects Without Scope Creep"*
  - Launch Article 3: *"Headless Next.js vs WordPress vs Webflow: How to Choose the Right Stack"*
  - Author Bio Card: *"Devansh is the Founder & Lead Engineer at Next Web Works. He partners with marketing agencies to architect and ship custom websites, web applications, ERPs, and mobile apps under their own brand."*
  - Single mid-article service callout per post (zero pricing language) and bottom author card.
  - Code snippets: Dark slate container (`#0F172A`), 1px border (`#1E293B`), JetBrains Mono 14px, syntax highlighting tokens, file-name header badge, 1-click "Copy Code" button.

### Conversion Architecture, Sitewide CTAs & WhatsApp System
- **Standard Page-Bottom Stack:** Exact order: `FAQ Accordion -> Final CTA Banner -> Embedded Contact Form -> Global Footer with Newsletter`.
  - Final CTA Banner: Single primary button *"Book a 20-Min Call"* -> `/book-a-call`, one supporting line (*"Direct engineering conversation with Devansh. No sales pitch, no obligation"*), zero prices.
  - Contact Form Section: Headline *"Prefer to write? Send us your brief."*, reuses 5 qualifying fields, honeypot, consent line with `/privacy` link, accessible error styling.
  - Page mapping: Home, `/services`, and `/for-agencies` include FAQ; `/work` and `/about` omit FAQ; `/blog` and `/blog/[slug]` omit FAQ and form (render CTA banner -> footer); `/book-a-call`, `/contact`, `/book-a-call/thank-you`, `/privacy`, `/terms` render footer only.
- **Additional Sitewide CTA Placements:** One primary CTA per viewport-sized section, varying copy contextually:
  - Header: Persistent *"Book a 20-Min Call"* button
  - Hero: Primary *"Book a 20-Min Call"* + secondary *"Explore Services & How We Work ↓"*
  - After pain points: *"Tell us what your clients keep asking for"* -> `/book-a-call`
  - After 4-step workflow: *"Start with a scoped pilot"* -> `/book-a-call`
  - Each service spec drawer: *"Discuss this build"* -> `/book-a-call`
  - Each `/work` sample card: *"Discuss a build like this"* -> `/book-a-call`
  - `/for-agencies` partnership columns: action link per model -> `/book-a-call`
  - `/about` after engineering standards: *"Talk to the founder"* -> `/book-a-call`
  - Blog articles: single mid-article service callout + bottom author card
  - Mobile: Floating bottom pill *"Book a 20-Min Call →"* appearing after hero scroll
  - Footer: *"Book a 20-Min Call"* link + WhatsApp direct link
- **Footer Newsletter Signup:** Email field + button *"Subscribe"*, description: *"The white-label engineering digest. At most 2 articles a month on agency dev scoping and delivery."*, consent notice with link to `/privacy`. Stored via NWW CMS `Lead` model (`metadata.type = 'newsletter'`, `metadata.source = 'footer-newsletter'`). Resend confirmation email with 1-click unsubscribe link.
- **Floating WhatsApp Button & Prefilled Message:** Pinned at bottom-right of every public page + links in footer and on `/contact`. URL: `https://wa.me/917999934815`. Dynamic message format on click:
  - Line 1: `Hi, I run an agency and want to discuss white-label development.`
  - Line 2: `Page: <current page title>`
  - Line 3: `Link: <current page URL, without query strings except utm_ parameters>`
  - Line 4: `Source: <utm_source if present, otherwise document.referrer domain, otherwise "direct">`
  - Line 5: `Via: <floating button / footer / contact page>`
  - Mobile safe layout: Floating CTA pill pinned at `bottom-4` centered; WhatsApp button elevated to `bottom-20 right-4` (`z-40`, 48x48px circle, $\ge 44$px touch target, 16px vertical clearance) to prevent overlapping tap targets.

