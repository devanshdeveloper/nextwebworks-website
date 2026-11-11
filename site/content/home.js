// site/content/home.js - Verbatim copy and data structures for Home page showcase

export const homeContent = {
  hero: {
    eyebrow: 'White-Label Engineering Partner for Marketing Agencies',
    title: 'Say Yes to Every Client Dev Request. Without Hiring Developers.',
    description:
      'We handle the complete development, staging, and deployment under your brand. WordPress, Webflow, custom Next.js, and mobile apps. Fixed-scope pricing. Zero client contact.',
    primaryCta: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    secondaryCta: { text: 'Explore Services & How We Work ↓', href: '#services' },
    mobilePill: { text: 'Schedule Scoping Call →', href: '/book-a-call' },
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
        risk: 'Risk: Mid-Sprint Contractor Disappearance',
      },
      {
        tag: 'The Fixed Overhead',
        title: 'The Unbillable In-House Salary',
        description:
          'Full-time senior engineers cost substantial payroll and benefits. When client retainers pause or pitch cycles stall, you carry dead unbillable bench overhead.',
        risk: 'Risk: Unbillable Fixed Payroll & Cash Drag',
      },
      {
        tag: 'The Technical Debt',
        title: 'The Costly Code Rewrite',
        description:
          'Offshore discount shops deliver fragile code that fails client security audits, breaks under traffic spikes, and forces your agency to pay for an emergency rebuild.',
        risk: 'Risk: Code Failure & Emergency Agency Rebuild',
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
    title: 'Flagship Products & Production Platforms',
    description:
      'In addition to confidential white-label agency delivery, we build and operate our own proprietary software products and custom client platforms. Explore our architectural depth below.',
    highlightsLabel: 'Featured Architecture Capabilities:',
    deliveryLabel: 'Production Engineering Standards',
    deliveryDesc: 'White-label delivery with complete source code transfer and automated CI/CD pipelines.',
    samples: [
      {
        id: 'nww-cms-kit',
        title: 'NWW Headless CMS Kit',
        stack: 'Class-Based ISR Engine · Next.js App Router · Edge Revalidation',
        badge: 'In-House Proprietary Engine',
        clientLabel: 'In-House Engine',
        tagline: 'Zero-dependency headless CMS client providing instantaneous edge caching and typed schema models.',
        overview:
          'Class-based headless CMS client kit delivering sub-second ISR content rendering, deterministic schema generation, and zero-dependency API query pipelines.',
        highlights: [
          'Dynamic on-demand cache revalidation via secure webhook architecture',
          'Universal model helpers for articles, case studies, FAQs, and lead pipelines',
          'Native Schema.org JSON-LD generation with automated dynamic sitemaps',
        ],
        ctaText: 'Discuss CMS architecture',
      },
      {
        id: 'classymenu',
        title: 'ClassyMenu Digital Dining Platform',
        stack: 'Multi-Tenant SaaS · Next.js · Node.js · WhatsApp API Bridge',
        badge: 'In-House Proprietary Platform',
        clientLabel: 'In-House SaaS Product',
        tagline: 'Contactless hospitality platform connecting digital table sessions with direct WhatsApp kitchen ordering.',
        overview:
          'Multi-tenant contactless dining and hospitality ordering engine with sub-second catalog search, live table session synchronization, and automated WhatsApp order routing.',
        highlights: [
          'Zero-latency dynamic catalog navigation supporting thousands of menu variants',
          'Live multi-device table session synchronization with optimistic UI updates',
          'Direct WhatsApp Business ordering bridge with zero customer login friction',
        ],
        ctaText: 'Discuss SaaS engineering',
      },
      {
        id: 'ceramicsales',
        title: 'CeramicSales B2B Wholesale Portal',
        stack: 'Custom ERP Engine · React Server Components · PostgreSQL · Vector PDF',
        badge: 'Direct Client Deliverable',
        clientLabel: 'Confidential B2B Wholesale Partner',
        tagline: 'Full-stack enterprise inventory and invoicing portal engineered for high-concurrency wholesale trade.',
        overview:
          'B2B wholesale catalog and stock operations portal handling atomic FIFO inventory allocation, multi-tier GST compliance, and instant server-side PDF invoice generation.',
        highlights: [
          'Atomic FIFO stock depletion with transactional rollbacks on concurrent orders',
          'Automated multi-tier GST calculation engine (CGST, SGST, IGST) with audit logs',
          'High-fidelity server-side vector PDF generation for quotes and tax invoices',
        ],
        ctaText: 'Discuss custom ERP builds',
      },
    ],
  },

  faqs: {
    eyebrow: 'Frequently Asked Questions',
    title: 'Everything Agencies Ask Before Their First Build',
    description: 'Direct answers to standard questions about white-label operations, scoping, and code handover.',
    items: [
      {
        question: 'How does Next Web Works operate behind our marketing agency brand?',
        answer:
          'We operate as an invisible white-label engineering partner. All deliverables carry zero external vendor branding, public credits, or runtime tracking. Your agency owns client communication, account management, and pricing negotiation, while our engineering desk delivers the staging previews and production code.',
      },
      {
        question: 'How quickly can your engineering desk review a brief and deliver a quote?',
        answer:
          'Once you submit a client brief or schedule an initial discovery session, we review the specifications, confirm stack feasibility, and return an itemized fixed-scope proposal within 24 business hours. Qualified projects can kick off as early as the same business day.',
      },
      {
        question: 'What platforms and tech stacks do you build on for agency clients?',
        answer:
          'Our engineering bench specializes in Next.js 16 App Router, TypeScript, React 19, and Tailwind CSS for custom web applications. For CMS ecosystems, we deliver custom Gutenberg WordPress themes and Webflow CMS implementations. For cross-platform mobile apps, we deploy shared React Native and Expo architectures.',
      },
      {
        question: 'What post-deployment warranty is included with full development builds?',
        answer:
          'Every full build includes a 14-day warranty period with proactive telemetry check-ins on Day 7 and Day 14. We fix any defects or responsive regressions deviating from the approved specification at zero additional cost before offering ongoing maintenance support.',
      },
      {
        question: 'How are code repositories and intellectual property handed over?',
        answer:
          'Upon milestone completion, full source code ownership, commit history, deployment scripts, and database configurations transfer entirely to your agency. Private GitHub repositories are transferred directly to your organization with comprehensive documentation and zero proprietary runtime lock-in.',
      },
      {
        question: 'How are scope changes and unexpected feature additions managed during a sprint?',
        answer:
          'If your client requests additional features mid-sprint that deviate from the signed brief, we isolate the new items and prepare an itemized change request quotation. Out-of-scope work proceeds only upon your written approval, protecting agency profit margins from unbudgeted creep.',
      },
    ],
  },

  techStack: {
    eyebrow: 'Full-Stack Execution Capability',
    title: 'Production Engineering Across Four Core Stacks',
    description:
      'We never force clients into a one-size-fits-all framework. Our engineering bench builds in the exact stacks your agency accounts mandate.',
    stacks: [
      {
        id: 'nextjs',
        name: 'Custom Next.js & React',
        badge: 'Web Applications',
        description:
          'Next.js 16 App Router architectures with Turbopack, React 19 Server Components, and sub-second edge routing for demanding client web platforms.',
        features: ['Server-Driven React 19 Architecture', 'Pure Tailwind CSS styling', 'Sub-second TTFB on Vercel or AWS'],
      },
      {
        id: 'wordpress',
        name: 'Enterprise WordPress',
        badge: 'Marketing Portals',
        description:
          'Clean Bedrock architectures, custom ACF Pro block configurations, and decoupled headless WPGraphQL setups with zero bloated third-party page builders.',
        features: ['Gutenberg block architectures', 'Strict PHP 8.3 & Bedrock roots', 'Blazing fast Redis caching layers'],
      },
      {
        id: 'webflow',
        name: 'Advanced Webflow & CMS',
        badge: 'Visual Frontends',
        description:
          'Design-system Webflow builds augmented with custom JavaScript attributes, complex GSAP ticker animations, and automated CMS reverse-proxies.',
        features: ['Client-First naming taxonomy', 'Custom GSAP scroll synchronizations', 'Third-party API and webhook routing'],
      },
      {
        id: 'mobile',
        name: 'Cross-Platform Mobile',
        badge: 'iOS & Android',
        description:
          'Unified React Native and Expo application builds sharing up to 85% business logic with web clients for cost-effective multi-screen rollouts.',
        features: ['Expo Application Services (EAS)', 'Native biometric and push services', 'App Store and Play Store compliance'],
      },
    ],
  },

  ctaBanner: {
    badge: 'Confidential Engineering Partner',
    title: 'Ready to Expand Your Agency’s Dev Capacity?',
    description:
      'Book a 30-minute discovery call with our founder. We’ll review your active client briefs, match stacks, and provide a fixed-scope pilot quote within 24 hours.',
    primaryButton: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    footnote: 'Fixed quote within 24 business hours · Zero client contact · Strict NDA',
  },

  contactForm: {
    eyebrow: 'Inbound Project Brief',
    leadIn: 'Prefer to write? Send us your brief.',
    description:
      'Tell us about your client’s project, timeline, and preferred stack. We review briefs and reply within 24 hours.',
  },
};
