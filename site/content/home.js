// site/content/home.js - Verbatim copy and data structures for Home page showcase

export const homeContent = {
  hero: {
    eyebrow: 'White-Label Engineering Partner for Marketing Agencies',
    title: 'Say Yes to Every Client Dev Request. Without Hiring Developers.',
    description:
      'We handle the complete development, staging, and deployment under your brand. WordPress, Webflow, custom Next.js, and mobile apps. Fixed-scope pricing. Zero client contact.',
    primaryCta: { text: 'Book a 20-Min Call', href: '/book-a-call' },
    secondaryCta: { text: 'Explore Services & How We Work ↓', href: '#services' },
    mobilePill: { text: 'Book a 20-Min Call →', href: '/book-a-call' },
  },

  painPoints: {
    eyebrow: 'Why Agencies Partner With Us',
    title: 'Three Dev Problems Killing Your Margin',
    description:
      'Marketing agencies lose margin and client trust to unpredictable engineering capacity. Here is why hiring in-house or relying on solo contractors fails at scale.',
    cards: [
      {
        tag: 'The Reliability Trap',
        title: 'The Freelancer Ghost',
        description:
          'Solo contractors take on other gigs and vanish mid-sprint, leaving your account managers to apologize to irate enterprise clients when deadlines blow past.',
      },
      {
        tag: 'The Fixed Overhead',
        title: 'The Unbillable In-House Salary',
        description:
          'Full-time senior engineers cost substantial payroll and benefits. When client retainers pause or pitch cycles stall, you carry dead unbillable bench overhead.',
      },
      {
        tag: 'The Technical Debt',
        title: 'The Costly Code Rewrite',
        description:
          'Offshore discount shops deliver fragile code that fails client security audits, breaks under traffic spikes, and forces your agency to pay for an emergency rebuild.',
      },
    ],
    cta: { text: 'Tell us what your clients keep asking for', href: '/book-a-call' },
  },

  workflow: {
    eyebrow: 'Execution Blueprint',
    title: 'From Agency Brief to Production Launch in 4 Steps',
    description:
      'A repeatable, transparent engineering workflow designed specifically for marketing agency account directors.',
    steps: [
      {
        number: '01',
        title: 'Scoped Discovery',
        desc: '20-minute technical review with our founder. We review your client brief, confirm stack fit, and deliver a fixed-scope quote in 24 hours.',
      },
      {
        number: '02',
        title: 'White-Label Setup',
        desc: 'We set up a dedicated private repository and staging environment on your agency domain or neutral preview URL. Zero NWW branding.',
      },
      {
        number: '03',
        title: 'Sprint Delivery',
        desc: 'Milestone-based development with regular async loom check-ins. Your team reviews staging links before your client ever sees them.',
      },
      {
        number: '04',
        title: 'Production Handover',
        desc: 'We deploy directly to Vercel, AWS, or your client’s cloud. 14-day post-launch defect fix window included on full builds.',
      },
    ],
    cta: { text: 'Start with a scoped pilot', href: '/book-a-call' },
  },

  services: {
    eyebrow: 'Engineering Capabilities',
    title: 'Builds in the Platform Your Client Already Uses',
    description:
      'From rapid CMS marketing hubs to enterprise multi-tenant SaaS. Scoped and quoted on your first call.',
    platforms: [
      { category: 'CMS & No-Code', items: ['WordPress', 'Webflow', 'Wix Studio', 'Shopify'] },
      { category: 'Custom Web & SaaS', items: ['Next.js App Router', 'React.js', 'Node.js / Express', 'PHP / Laravel'] },
      { category: 'Mobile Apps', items: ['React Native', 'Expo', 'iOS & Android Builds'] },
      { category: 'Cloud & Staging', items: ['Vercel', 'AWS', 'DigitalOcean', 'Cloudflare'] },
    ],
    drawers: [
      {
        id: 'websites',
        title: 'High-Performance Marketing Websites',
        tag: 'WordPress · Webflow · Next.js',
        summary:
          'Pixel-perfect Figma-to-code implementations with sub-second page loads, strict accessibility, and turnkey client editor workflows.',
        specs: [
          'Clean, componentized code matching Figma 1:1 down to 1px precision',
          'Core Web Vitals optimized with zero layout shift and sub-second paint targets',
          'Client-friendly visual editors or headless CMS custom field groups',
          'Structured data schema, OpenGraph, dynamic sitemaps, and technical SEO',
        ],
        ctaText: 'Discuss this build',
      },
      {
        id: 'web-apps',
        title: 'Custom Web Applications & Portals',
        tag: 'Next.js · React · Node.js',
        summary:
          'Scalable interactive web applications, client portals, internal dashboards, and multi-tenant SaaS tools built on robust architectures.',
        specs: [
          'React Server Components for instant data streaming and sub-second TTFB',
          'Role-based access control (RBAC), multi-tenant data schemas, and audit logs',
          'Third-party REST/GraphQL API integrations and webhook pipelines',
          'Comprehensive automated testing, error boundaries, and telemetry',
        ],
        ctaText: 'Discuss this build',
      },
      {
        id: 'erps',
        title: 'Operations & Business ERPs',
        tag: 'Full-Stack Custom Engine',
        summary:
          'Proprietary product capabilities: multi-tier GST tax engine, atomic FIFO inventory transactions, and high-fidelity PDF report generation.',
        specs: [
          'Atomic FIFO stock depletion with transactional rollbacks',
          'Multi-tier GST tax engines (CGST / SGST / IGST) and compliance audits',
          'Server-side vector PDF generation and automated financial exports',
          'Enterprise role-based permissions with immutable event logs',
        ],
        ctaText: 'Discuss this build',
      },
      {
        id: 'mobile-apps',
        title: 'Cross-Platform Mobile Applications',
        tag: 'React Native · Expo',
        summary:
          'Native-feel iOS and Android applications built from a single shared TypeScript codebase with camera, location, and offline sync.',
        specs: [
          'Single shared React Native codebase targeting iOS and Android',
          'Hardware API access: native camera capture, geolocation, and biometrics',
          'Push notification workflows via Apple APNs and Firebase Cloud Messaging',
          'End-to-end Apple App Store and Google Play Store submission support',
        ],
        ctaText: 'Discuss this build',
      },
      {
        id: 'cms-platforms',
        title: 'Agency CMS & No-Code Platforms',
        tag: 'WordPress · Webflow · Wix Studio',
        summary:
          'Expert implementation across standard client CMS ecosystems. Custom themes, Gutenberg blocks, Webflow CMS collections, and visual client handover.',
        specs: [
          'Custom WordPress themes and Gutenberg block development without bloated page builders',
          'Advanced Webflow CMS architecture, interactions, and custom code embeds',
          'Turnkey client editor documentation and video walkthroughs',
          'Zero NWW branding; ready for agency delivery under your brand',
        ],
        ctaText: 'Discuss this build',
      },
    ],
  },

  workShowcase: {
    eyebrow: 'Deliverable Showcase',
    title: 'Proven Technical Builds Delivered Under NDA',
    description:
      'Because we operate as a strictly white-label engineering partner, our agency client projects remain confidential. Below are illustrative technical builds showcasing our architectural depth.',
    samples: [
      {
        id: 'b2b-saas',
        title: 'Enterprise B2B Client Analytics Dashboard',
        stack: 'Next.js 15 App Router · React Server Components · Tailwind · PostgreSQL',
        badge: 'Illustrative sample · not a client project',
        overview:
          'High-density multi-tenant dashboard streaming real-time client performance metrics, campaign attribution, and automated PDF export reports.',
        highlights: [
          'Instant TTFB via streaming Server Components with Suspense boundaries',
          'Exportable branded PDF executive reports generated server-side',
          'Zero-latency filter state synchronized via URL search parameters',
        ],
        ctaText: 'Discuss a build like this',
      },
      {
        id: 'ecommerce-pwa',
        title: 'Headless E-Commerce & Inventory Sync',
        stack: 'Shopify Storefront API · Next.js · Redis Cache · Edge Functions',
        badge: 'Illustrative sample · not a client project',
        overview:
          'Headless storefront handling 5,000+ SKU catalogs with instant predictive search, dynamic cart drawer, and automated inventory sync.',
        highlights: [
          'Edge Middleware cache routing for instant global storefront responses',
          'Optimistic UI updates for zero-lag cart operations',
          'Atomic stock lock preventing overselling during flash promotions',
        ],
        ctaText: 'Discuss a build like this',
      },
      {
        id: 'field-mobile',
        title: 'Field Inspection & Asset Auditing Mobile App',
        stack: 'React Native · Expo · SQLite Offline Sync · Node.js Backend',
        badge: 'Illustrative sample · not a client project',
        overview:
          'Cross-platform iOS/Android app allowing field teams to capture high-res photographic inspections offline with automatic cloud synchronization.',
        highlights: [
          'Local SQLite storage with automatic background queue synchronization',
          'Native camera integration with automated EXIF metadata stamping',
          'Dual store release pipeline with automated OTA updates',
        ],
        ctaText: 'Discuss a build like this',
      },
    ],
  },

  faqs: {
    eyebrow: 'Frequently Asked Questions',
    title: 'Everything Agencies Ask Before Their First Build',
    description: 'Direct answers to standard questions about white-label operations, scoping, and code handover.',
    items: [
      {
        question: 'Who owns the code?',
        answer: 'You do: the repository is transferred to your organization at handover.',
      },
      {
        question: 'Will our client find out?',
        answer:
          'We deliver under your brand with no NWW credits or watermarks. You can introduce us as your in-house developer. Commits appear under our developer handle unless you ask us to author them under your agency’s identity.',
      },
      {
        question: 'What if a bug appears after launch?',
        answer:
          '14-day post-launch fix window included on full builds (proactive check-ins on Day 7 and Day 14), followed by an optional ongoing maintenance plan covering up to 1 hour of copy edits per month (excludes domain and hosting).',
      },
      {
        question: 'Can you join client calls?',
        answer: 'We can join client calls as your technical lead when you introduce us.',
      },
      {
        question: 'What stacks do you support?',
        answer: 'Next.js, WordPress, Webflow, Wix, React.js, MERN, PHP, and React Native.',
      },
      {
        question: 'How do scope changes work?',
        answer: 'Written change request with an itemized, revised quote before any out-of-scope work proceeds.',
      },
      {
        question: 'How do we get started?',
        answer:
          'Book a 20-min call, sign a mutual NDA, review your brief, quote in 24 hours, and kickoff the same day. (Small-task and critical-blocker turnaround: typical).',
      },
    ],
  },

  ctaBanner: {
    title: 'Ready to Expand Your Agency’s Dev Capacity?',
    description:
      'Book a 20-minute discovery call with our founder. We’ll review your active client briefs, match stacks, and provide a fixed-scope pilot quote within 24 hours.',
    primaryButton: { text: 'Book a 20-Min Call', href: '/book-a-call' },
  },

  contactForm: {
    leadIn: 'Prefer to write? Send us your brief.',
    description:
      'Tell us about your client’s project, timeline, and preferred stack. We review briefs and reply within 24 hours.',
  },
};
