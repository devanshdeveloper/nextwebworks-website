// site/content/services.js - Technical capabilities, stack FAQs, and per-page CTA banner

export const servicesContent = {
  faqs: {
    eyebrow: 'Technical Specifications FAQ',
    title: 'Answers to Architecture & Platform Questions',
    description: 'Detailed answers on stack fit, performance guarantees, and platform implementations.',
    items: [
      {
        question: 'How do you decide between Next.js, WordPress, and Webflow for a build?',
        answer:
          'Stack selection depends entirely on your client’s editorial workflow and data requirements. We recommend Next.js App Router for dynamic web applications, high-density portals, and sub-second TTFB targets. For marketing sites requiring client content autonomy, we recommend headless CMS setups, clean custom WordPress themes with custom Gutenberg blocks, or Webflow CMS with tailored custom code embeds.',
      },
      {
        question: 'Do you guarantee Core Web Vitals performance benchmarks?',
        answer:
          'Yes. All custom Next.js builds are architected with React Server Components, image dimension enforcement, dynamic sitemaps, and strict layout stability rules to achieve green Core Web Vitals across mobile and desktop viewports.',
      },
      {
        question: 'Can you integrate third-party APIs, payment gateways, and CRMs?',
        answer:
          'Yes. We regularly build custom webhook pipelines, REST and GraphQL integrations, OAuth authentications, and CRM integrations (HubSpot, Salesforce, Zoho, Stripe, and proprietary enterprise endpoints).',
      },
      {
        question: 'How are cross-platform mobile apps architected?',
        answer:
          'We engineer mobile applications using React Native and Expo with TypeScript, sharing business logic, API clients, and state management across iOS and Android while maintaining native look, feel, and performance.',
      },
      {
        question: 'How do you handle client handover and CMS training?',
        answer:
          'Every CMS delivery includes structured documentation and async video walkthroughs showing your account team exactly how to manage content, menus, and media.',
      },
    ],
  },

  ctaBanner: {
    title: 'Need a Specific Platform or Architecture Built?',
    description:
      'Book a 30-minute technical review with our principal engineer. We will review your stack requirements, verify technical feasibility, and deliver a fixed-scope quotation within 24 hours.',
    primaryButton: { text: 'Discuss Your Stack With Engineering', href: '/book-a-call' },
  },
};

