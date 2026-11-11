// site/content/work.js - Portfolio, deliverable standards, staging environments, and per-page CTA banner

export const workContent = {
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
          'Every deliverable passes automated linting, structural line and bundle audits, responsive breakpoint testing across mobile, tablet, and desktop viewports, and accessibility contrast checks.',
      },
      {
        question: 'What does the 14-day post-launch warranty cover?',
        answer:
          'Every full build includes a 14-day defect fix window with scheduled check-ins on Day 7 and Day 14 to resolve any unexpected bugs or responsive edge-cases that emerge after production DNS propagation.',
      },
    ],
  },

  ctaBanner: {
    title: 'Have a Complex Technical Build or Client Portal in Mind?',
    description:
      'Send us your Figma designs or client brief. We review architecture specifications and provide a comprehensive fixed-scope quotation within 24 business hours.',
    primaryButton: { text: 'Review Your Project Brief', href: '/contact' },
  },
};

