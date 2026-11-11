// site/content/work.js - Portfolio, deliverable standards, staging environments, and per-page CTA banner

export const workContent = {
  hero: {
    eyebrow: 'PORTFOLIO & DELIVERABLES',
    title: 'Production Case Studies & In-House Platforms',
    description:
      'Technical breakdowns of our proprietary software products and confidential white-label agency builds. Built with modern architectures and sovereign repository ownership.',
    ctaPrimary: { text: 'Book a 30-Min Architecture Call', href: '/book-a-call' },
    ctaSecondary: { text: 'View Deliverables ↓', href: '#work-showcase' },
    pillars: [
      { id: 'wp1', label: 'PROPRIETARY', title: 'In-House Platforms' },
      { id: 'wp2', label: 'DELIVERABLE', title: 'Direct Client Builds' },
      { id: 'wp3', label: 'PROTECTED', title: 'White-Label NDA' },
      { id: 'wp4', label: 'WARRANTY', title: '14-Day Post-Launch' },
    ],
  },

  process: {
    eyebrow: 'STAGING & TRANSFER PROTOCOL',
    title: 'From Staging Preview to Sovereign Code Handover',
    description:
      'We eliminate deployment surprises through strict repository hygiene, automated branch verifications, and unbranded staging domains.',
    steps: [
      {
        step: '01',
        tag: 'PRIVATE PREVIEW DOMAIN',
        title: 'Staging Environment Setup',
        desc: 'Milestones deploy to password-protected staging domains or your cloud infrastructure for internal agency review.',
      },
      {
        step: '02',
        tag: 'AUTOMATED QA AUDIT',
        title: 'Multi-Device & Performance Verification',
        desc: 'Every branch passes automated linting, Core Web Vitals checks, and responsive stress testing across screen sizes.',
      },
      {
        step: '03',
        tag: 'REPOSITORY TRANSFER',
        title: 'Direct Git Push to Agency Org',
        desc: 'Clean commits transfer to your GitHub or GitLab organization with complete setup documentation and environment guides.',
      },
      {
        step: '04',
        tag: 'DEFECT WARRANTY',
        title: '14-Day Post-Launch Coverage',
        desc: 'Scheduled check-ins on Day 7 and Day 14 resolve any unforeseen responsive edge cases or DNS deployment bugs.',
      },
    ],
  },

  stackDiversity: {
    eyebrow: 'Architectural Versatility',
    title: 'Cross-Framework Delivery Competence',
    description:
      'We bring deep, specialized mastery to each platform rather than shallow generalism. Explore how we engineer across four modern paradigms.',
    stacks: [
      {
        id: 's1',
        name: 'Modern Full-Stack Next.js',
        desc: 'App Router, React 19 Server Components, Turbopack, and edge routing designed for ultra-high conversion web apps.',
      },
      {
        id: 's2',
        name: 'Headless & Gutenberg WordPress',
        desc: 'Custom ACF Pro block architectures, Bedrock directory structures, and high-performance WPGraphQL API gateways.',
      },
      {
        id: 's3',
        name: 'Advanced Webflow & CMS',
        desc: 'Visual design systems augmented with custom GSAP scroll interactions, attribute routing, and external webhook integrations.',
      },
      {
        id: 's4',
        name: 'Shared Mobile Core (React Native)',
        desc: 'Production iOS and Android application builds sharing business logic and state management with web platforms.',
      },
    ],
  },

  confidentialityNotice: {
    eyebrow: 'Client Protection Protocol',
    title: 'Why Our Case Studies Respect White-Label Confidentiality',
    description:
      'Many agency partners ask why we showcase in-house products and sanitized builds instead of flaunting big-brand logos. Here is our ethical commitment.',
    reasons: [
      {
        id: 'r1',
        title: 'Your Agency Brand Takes the Credit',
        desc: 'When an agency delivers an award-winning portal, their client should celebrate them. We never claim public glory or publish portfolio brag pieces.',
      },
      {
        id: 'r2',
        title: 'Non-Disclosure Is Absolute',
        desc: 'Our bilateral mutual NDA prohibits leaking client identities, proprietary feature sets, or commercial terms under any circumstances.',
      },
      {
        id: 'r3',
        title: 'Zero Stock or Synthetic Metrics',
        desc: 'Every technical specification and architecture blueprint we share represents verified engineering work, adhering to our strict Zero Stock policy.',
      },
    ],
  },

  faqs: {
    eyebrow: 'Deliverable Verification FAQ',
    title: 'How We Ship, Stage, and Hand Over Code',
    description: 'Straightforward answers on repository transfers, staging previews, QA audits, and warranties.',
    items: [
      {
        question: 'How do you host and stage preview environments during development?',
        answer:
          'We deploy staging builds either to your agency’s Vercel/cloud infrastructure or to a neutral, unbranded preview domain with HTTP password protection, allowing your internal team to review milestones before your client ever sees them.',
      },
      {
        question: 'When is full source code ownership transferred to our agency?',
        answer:
          'Full code ownership is transferred directly to your organization repository upon final milestone signoff and handover. We retain zero proprietary locks or hidden licenses on custom builds.',
      },
      {
        question: 'What quality assurance and device testing checks are performed before handover?',
        answer:
          'Every deliverable passes automated linting, structural line and bundle audits, responsive breakpoint testing across mobile, tablet, and desktop viewports, and accessibility contrast checks across both light and dark display modes.',
      },
      {
        question: 'What does the 14-day post-launch warranty cover?',
        answer:
          'Every full build includes a 14-day defect fix window with scheduled check-ins on Day 7 and Day 14 to resolve any unexpected bugs or responsive edge-cases that emerge after production DNS propagation.',
      },
      {
        question: 'How do you maintain clean Git commit histories and branch hygiene during agency sprints?',
        answer:
          'We enforce structured feature branch workflows with descriptive, atomic commit messages following conventional standards. Pull requests include lint, build, and automated structural check verifications before merging into production branches.',
      },
    ],
  },

  ctaBanner: {
    badge: 'Production Delivery Bench',
    title: 'Have a Complex Technical Build or Client Portal in Mind?',
    description:
      'Send us your Figma designs or client brief. We review architecture specifications and provide a comprehensive fixed-scope quotation within 24 business hours.',
    primaryButton: { text: 'Review Your Project Brief', href: '/contact' },
    footnote: 'Clean Git histories · 100% white-label repos · 14-day warranty included',
  },

  contactForm: {
    eyebrow: 'Production Build Scoping',
    leadIn: 'Request Architecture & Delivery Review for Your Project',
    description:
      'Have an upcoming client portal, web application, or custom platform launch? Share your functional requirements and delivery timeline with our engineering team.',
  },

  showcase: {
    eyebrow: 'Production Architecture',
    title: 'Verified Deliverable Case Studies & Products',
    description:
      'Detailed technical breakdowns of our proprietary software products and custom client platforms. Explore architecture decisions, performance benchmarks, and delivery highlights.',
    highlightsLabel: 'Verified Deliverable Highlights:',
    deliveryLabel: 'Direct Engineering Desk',
    deliveryDesc: 'Comprehensive repository ownership, staging domain verification, and 14-day warranty.',
    samples: [
      {
        id: 'nww-cms-kit',
        title: 'NWW Headless CMS Kit',
        stack: 'Class-Based ISR Engine · Next.js App Router · Edge Revalidation',
        badge: 'In-House Proprietary Engine',
        overview:
          'Class-based ISR client kit providing automated edge tag revalidation, typed model query helpers, and deterministic JSON-LD schema blocks.',
        highlights: [
          'Granular cache purging via cryptographic HMAC webhook listeners',
          'Encapsulated model classes isolating frontend components from schema shifts',
          'Automated Schema.org metadata and dynamic sitemap integration',
        ],
        ctaText: 'Explore CMS engineering',
      },
      {
        id: 'classymenu',
        title: 'ClassyMenu Digital Dining Platform',
        stack: 'Multi-Tenant SaaS · Next.js · Node.js · WhatsApp API Bridge',
        badge: 'In-House Proprietary Platform',
        overview:
          'High-concurrency digital menu and ordering platform with live multi-device table synchronization and seamless WhatsApp kitchen routing.',
        highlights: [
          'Optimistic UI state management ensuring instant order manipulation',
          'Zero mandatory customer authentication reducing ordering abandonments',
          'Aggressive responsive image compression preserving 60fps scrolling',
        ],
        ctaText: 'Explore dining SaaS',
      },
      {
        id: 'ceramicsales',
        title: 'CeramicSales B2B Wholesale Portal',
        stack: 'Custom ERP Engine · React Server Components · PostgreSQL · Vector PDF',
        badge: 'Direct Client Deliverable',
        overview:
          'Production B2B wholesale platform delivering transactional FIFO inventory allocation, regional tax computation, and instant vector PDF invoicing.',
        highlights: [
          'Row-level database transactions preventing concurrent stock over-allocation',
          'Automated intra-state and inter-state tax engine with immutable logs',
          'High-speed server-rendered vector PDFs streamed directly to client devices',
        ],
        ctaText: 'Explore wholesale ERP',
      },
    ],
  },
};

export const workDetailContent = {
  'nww-cms-kit': {
    ctaBanner: {
      badge: 'Headless CMS Architecture',
      title: 'Build Your Next High-Performance Client Site on NWW CMS Kit',
      description:
        'Harness sub-second ISR rendering, tag-based on-demand cache revalidation, and class-based API access. Consult with our technical lead on headless CMS deployments.',
      primaryButton: { text: 'Discuss Headless CMS Kit', href: '/book-a-call' },
      footnote: 'Sub-second ISR streaming · Tag-based revalidation · Type-safe schema models',
    },
    contactForm: {
      eyebrow: 'CMS Kit Consultation',
      leadIn: 'Scope a Headless Next.js & CMS Architecture',
      description:
        'Need advice on headless content architecture, edge caching strategies, or migrating an existing WordPress/Webflow install to Next.js? Let’s connect.',
    },
    faqs: {
      eyebrow: 'CMS Engine FAQ',
      title: 'NWW Headless CMS Kit Technical Specifications',
      description: 'Frequently asked questions regarding incremental static regeneration, caching webhooks, and SEO.',
      items: [
        {
          question: 'How does the NWW CMS Kit achieve sub-second incremental static regeneration?',
          answer:
            'The kit leverages Next.js fetch cache tagging with custom HTTP revalidation webhooks. Content renders from edge cache in single-digit milliseconds while background webhook handlers purge specific model tags only when editorial changes occur in the CMS.',
        },
        {
          question: 'What advantages does class-based SDK encapsulation offer over raw REST fetch calls?',
          answer:
            'Our class-based models encapsulate API endpoints, query normalization, error boundaries, and response typing into reusable methods. Frontend Server Components remain strictly decoupled from CMS endpoint mutations and data structure variances.',
        },
        {
          question: 'How does the kit handle structured data and Schema.org generation automatically?',
          answer:
            'The CMS kit features an integrated SEO helper that parses article metadata, canonical URLs, and entity schemas at build time, generating validated Article and BreadcrumbList JSON-LD blocks without manual template scripting.',
        },
        {
          question: 'Can the NWW Headless CMS Kit integrate with third-party webhooks or preview links?',
          answer:
            'Yes. The architecture includes cryptographic secret validation on webhook endpoints and dedicated draft mode endpoints, enabling content editors to view unpublished draft articles on live Next.js preview environments securely.',
        },
        {
          question: 'What server infrastructure or hosting stack does the kit require?',
          answer:
            'The client kit is zero-dependency and fully compatible with Node.js runtime environments, Vercel Edge networks, Docker containers, and standard Linux VPS hosting platforms without requiring custom native compilation steps.',
        },
      ],
    },
  },

  classymenu: {
    ctaBanner: {
      badge: 'Hospitality SaaS Engineering',
      title: 'Launch a High-Concurrency Hospitality or Ordering Application',
      description:
        'From multi-tenant restaurant ecosystems to zero-login WhatsApp bridges, we engineer resilient web applications designed for chaotic, real-world peak operations.',
      primaryButton: { text: 'Discuss SaaS Architecture', href: '/book-a-call' },
      footnote: 'Zero customer login · Real-time table sync · WhatsApp business API bridge',
    },
    contactForm: {
      eyebrow: 'Hospitality Tech Inquiry',
      leadIn: 'Inquire About Multi-Tenant SaaS & Dining Tech',
      description:
        'Looking to engineer real-time ordering engines, digital menu platforms, or specialized transactional SaaS products? Share your functional specifications below.',
    },
    faqs: {
      eyebrow: 'Dining Platform FAQ',
      title: 'ClassyMenu SaaS Architecture & Performance',
      description: 'Frequently asked questions on live table synchronization, WhatsApp integration, and peak surges.',
      items: [
        {
          question: 'How does ClassyMenu synchronize orders across multiple diner phones at the same table?',
          answer:
            'The application maintains lightweight session channels keyed to specific table QR codes. When any diner adds items or modifies quantities, state updates broadcast to all connected table devices with zero interface freezing.',
        },
        {
          question: 'Why was a direct WhatsApp Business API bridge chosen over an in-app payment gate?',
          answer:
            'Eliminating mandatory user account creation and payment gateway friction increased order conversion rates dramatically in high-density dining environments, allowing customers to send verified orders directly to kitchen staff in seconds.',
        },
        {
          question: 'How does the platform optimize image rendering for menus with thousands of dishes?',
          answer:
            'We implement aggressive next-gen image formats with responsive srcset dimensions, lazy loading below the viewport, and CDN edge caching to ensure comprehensive menus with thousands of items scroll smoothly at 60fps.',
        },
        {
          question: 'What multi-tenant isolation guarantees exist for restaurant brand owners?',
          answer:
            'Each dining establishment operates within logically partitioned data namespaces with individual branding themes, custom domain support, private staff dashboard access, and isolated transactional records to prevent cross-tenant data leakage.',
        },
        {
          question: 'How does the architecture maintain zero downtime during peak lunch and dinner surges?',
          answer:
            'Stateless Next.js server components scale horizontally behind load balancers, while database queries are heavily indexed and protected by connection pooling to absorb concurrent dinner-hour request spikes effortlessly.',
        },
      ],
    },
  },

  ceramicsales: {
    ctaBanner: {
      badge: 'B2B ERP & Operations',
      title: 'Modernize Complex B2B Wholesale & Distribution Workflows',
      description:
        'Eliminate manual ledger errors with custom ERP software engineered for multi-tier taxation, FIFO warehouse accounting, and instant vector document generation.',
      primaryButton: { text: 'Discuss B2B Wholesale Systems', href: '/book-a-call' },
      footnote: 'Row-level transactional locks · Automated GST breakdown · Instant vector PDF exports',
    },
    contactForm: {
      eyebrow: 'Wholesale ERP Consultation',
      leadIn: 'Scope Your Custom B2B Portal & Inventory Platform',
      description:
        'Facing challenges with inventory reconciliation, complex distributor tax tiers, or automated invoice generation? Detail your operational requirements for engineering review.',
    },
    faqs: {
      eyebrow: 'Wholesale Portal FAQ',
      title: 'CeramicSales Wholesale & ERP Technical Overview',
      description: 'Frequently asked questions on atomic inventory locks, regional tax splits, and accounting exports.',
      items: [
        {
          question: 'How does CeramicSales handle concurrent wholesale orders without inventory over-allocation?',
          answer:
            'The checkout pipeline wraps stock reservation in atomic database transactions with row-level locks. If concurrent orders target the same batch, each order is evaluated sequentially, guaranteeing zero duplicate allocations or negative physical warehouse stock.',
        },
        {
          question: 'How are regional GST rules and inter-state tax splits calculated dynamically?',
          answer:
            'The system identifies delivery and billing state coordinates against company registrations to apply CGST and SGST splits for intra-state orders or IGST for inter-state shipments, generating legally compliant tax invoices automatically.',
        },
        {
          question: 'What engine generates the downloadable server-side vector PDF invoices?',
          answer:
            'Invoices and dispatch delivery slips are generated on the server using headless vector rendering engines that stream PDF binaries directly to client browsers in milliseconds, ensuring crisp typography and scannable barcode verification.',
        },
        {
          question: 'How do wholesale trade buyers access personalized pricing tiers and credit limits?',
          answer:
            'Buyer accounts are mapped to custom distributor tiers with negotiated discount schedules and dynamic credit limit verification, preventing order confirmation if pending invoices exceed agreed commercial credit thresholds.',
        },
        {
          question: 'Can CeramicSales export financial transactions into third-party accounting platforms?',
          answer:
            'Yes. The platform provides automated daily ledger export pipelines and REST webhooks formatted for standard accounting software like Tally, Zoho Books, and SAP, eliminating manual double-entry bookkeeping for finance teams.',
        },
      ],
    },
  },
};

export const workSeoMeta = {
  'nww-cms-kit': {
    title: 'NWW Headless CMS Kit Build',
    description:
      'Architecture case study of our zero-dependency headless CMS client delivering instantaneous edge caching, ISR revalidation, and typed schema models.',
  },
  classymenu: {
    title: 'ClassyMenu SaaS Platform',
    description:
      'Architecture case study of a multi-tenant digital dining platform connecting table session state with automated WhatsApp Business order routing.',
  },
  ceramicsales: {
    title: 'CeramicSales Wholesale ERP',
    description:
      'Technical case study of a B2B wholesale platform featuring atomic FIFO inventory tracking, multi-tier GST compliance, and server-side PDF exports.',
  },
};


