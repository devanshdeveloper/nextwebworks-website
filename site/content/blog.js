// site/content/blog.js - Blog index and article per-page CTA banner copy

export const blogContent = {
  indexCtaBanner: {
    badge: 'White-Label Playbooks',
    title: 'Have a Development Challenge Not Covered in Our Guides?',
    description:
      'Our engineering lead is available for 30-minute scoping sessions to audit your architecture, code repos, or client technical roadmaps.',
    primaryButton: { text: 'Discuss With Engineering', href: '/book-a-call' },
    footnote: 'Direct technical consultation · Zero commercial jargon · 24h follow-up',
  },

  articleCtaBanner: {
    badge: 'Agency Technical Partnership',
    title: 'Need an Experienced Dev Partner to Implement These Patterns?',
    description:
      'We help agencies execute high-performance web platforms, custom ERPs, and headless CMS builds under strict white-label agreements.',
    primaryButton: { text: 'Explore White-Label Services', href: '/services' },
    footnote: 'Complete source ownership · Dedicated dev bench · 14-day warranty',
  },

  articleCtaBannerBySlug: {
    'the-white-label-playbook-for-marketing-agencies': {
      badge: 'Agency Scale Bench',
      title: 'Need an Engineering Partner to Execute Your White-Label Roadmaps?',
      description:
        'We partner with marketing and design agencies to deliver pixel-perfect frontends, custom portals, and mobile codebases behind your brand.',
      primaryButton: { text: 'Schedule a White-Label Scoping Call', href: '/book-a-call' },
      footnote: '100% white-label repos · Mutual NDA signed · 24h quote turnaround',
    },
    'how-to-scope-fixed-price-web-projects-without-scope-creep': {
      badge: 'Predictable Scoping Desk',
      title: 'Have a Client Scope Brief That Needs Immediate Technical Feasibility?',
      description:
        'Send us your Figma files, functional specifications, or RFPs. We deliver milestone-gated quotations within 24 business hours.',
      primaryButton: { text: 'Request a Fixed-Price Project Quote', href: '/contact' },
      footnote: 'Milestone-gated sprints · Change request firewalls · 14-day warranty',
    },
    'headless-nextjs-vs-wordpress-vs-webflow': {
      badge: 'Modern Stack Consultation',
      title: 'Evaluating Next.js, Headless CMS, or Webflow for an Upcoming Build?',
      description:
        'Our principal engineer will review your client’s editorial workflow, performance targets, and data requirements to recommend the ideal stack.',
      primaryButton: { text: 'Discuss Platform Architecture', href: '/book-a-call' },
      footnote: 'Green Core Web Vitals · Zero plugin bloat · Direct engineering access',
    },
  },

  articleCalloutBySlug: {
    'the-white-label-playbook-for-marketing-agencies': {
      title: 'Need a white-label engineering partner for your agency?',
      desc: 'We deliver custom frontends and web apps directly under your brand with fixed quotes within 24 hours.',
      cta: 'Book a 30-Min Technical Scoping Call →',
      href: '/book-a-call',
    },
    'how-to-scope-fixed-price-web-projects-without-scope-creep': {
      title: 'Have a complex client RFP or scoping brief to review?',
      desc: 'Send us your functional requirements and Figma files for an immediate technical feasibility check.',
      cta: 'Request a Fixed-Price Scope Audit →',
      href: '/contact',
    },
    'headless-nextjs-vs-wordpress-vs-webflow': {
      title: 'Evaluating frontend frameworks for an upcoming client build?',
      desc: 'Our principal engineer helps your team compare performance tradeoffs, CMS workflows, and hosting requirements.',
      cta: 'Consult With an Architecture Lead →',
      href: '/book-a-call',
    },
  },

  relatedArticlesBySlug: {
    'the-white-label-playbook-for-marketing-agencies': [
      {
        title: 'How to Scope Fixed-Price Web Projects Without Scope Creep',
        desc: 'Frameworks for fixed-price quoting, functional boundaries, and avoiding unpaid sprint drift.',
        href: '/blog/how-to-scope-fixed-price-web-projects-without-scope-creep',
      },
      {
        title: 'Headless Next.js vs WordPress vs Webflow',
        desc: 'Evaluating frontend frameworks and editorial workflows for growing digital agencies.',
        href: '/blog/headless-nextjs-vs-wordpress-vs-webflow',
      },
    ],
    'how-to-scope-fixed-price-web-projects-without-scope-creep': [
      {
        title: 'The White-Label Playbook for Marketing Agencies',
        desc: 'Strategic playbook on expanding agency revenue through dependable engineering partnerships.',
        href: '/blog/the-white-label-playbook-for-marketing-agencies',
      },
      {
        title: 'Modern Headless Architecture & Jamstack Workflows',
        desc: 'How Next.js App Router and edge caching guarantee sub-second performance on complex builds.',
        href: '/blog/headless-nextjs-vs-wordpress-vs-webflow',
      },
    ],
    'headless-nextjs-vs-wordpress-vs-webflow': [
      {
        title: 'The White-Label Playbook for Marketing Agencies',
        desc: 'Shipping custom applications and marketing websites without maintaining in-house developers.',
        href: '/blog/the-white-label-playbook-for-marketing-agencies',
      },
      {
        title: 'How to Scope Fixed-Price Web Projects Without Scope Creep',
        desc: 'Seven-point agency scoping checklist for fixed-price contracts and predictable deliveries.',
        href: '/blog/how-to-scope-fixed-price-web-projects-without-scope-creep',
      },
    ],
  },

  newsletter: {
    eyebrow: 'The Agency Digest',
    title: 'Tactical Engineering Breakdowns for Agency Leaders',
    description:
      'Twice a month, we publish deep-dive breakdowns on white-label architectures, fixed-price scoping formulas, and client retention engineering. Zero sponsored filler.',
  },

  editorialStandards: {
    eyebrow: 'Editorial Principles',
    title: 'Our Engineering Writing Guidelines',
    description:
      'We write exclusively from active production consulting experience. Here are the core commitments behind every playbook we publish.',
    pillars: [
      {
        id: 'es1',
        title: 'Zero AI-Generated Fluff',
        desc: 'Every article is authored and reviewed by practicing engineers with verified code snippets and real repository architectural patterns.',
      },
      {
        id: 'es2',
        title: 'Agency Operator Focus',
        desc: 'We address the exact financial and technical friction points digital marketing agencies navigate: scope creep, client retention, and margin protection.',
      },
      {
        id: 'es3',
        title: 'Reproducible Benchmarks',
        desc: 'Every performance statistic and technical recommendation is accompanied by reproducible audit criteria and production evidence.',
      },
    ],
  },
};

export const blogSeoMeta = {
  'the-white-label-playbook-for-marketing-agencies': {
    title: 'White-Label Agency Playbook',
    description:
      'A practical operational blueprint for marketing agencies seeking to deliver custom web and mobile engineering without hiring in-house developers.',
  },
  'how-to-scope-fixed-price-web-projects-without-scope-creep': {
    title: 'Scope Fixed-Price Projects',
    description:
      'Proven scoping techniques to eliminate scope creep, protect agency profit margins, and deliver client web applications within agreed timelines.',
  },
  'headless-nextjs-vs-wordpress-vs-webflow': {
    title: 'Next.js vs WordPress vs Webflow',
    description:
      'An honest architectural comparison of Next.js, WordPress, and Webflow to help marketing agency leaders choose the right stack for client websites.',
  },
};

