// site/content/forAgencies.js - Agency partnership models, NDA guarantees, and per-page CTA banner

export const forAgenciesContent = {
  faqs: {
    eyebrow: 'Agency Partnership FAQ',
    title: 'How White-Label Agency Partnerships Work',
    description: 'Clear answers on non-solicitation, repository authorship, client communication, and capacity.',
    items: [
      {
        question: 'How do you guarantee you will never solicit our agency’s clients?',
        answer:
          'Strict non-solicitation and confidentiality are written directly into our mutual NDA and master services agreement before kickoff. We have zero direct contact with your clients unless you specifically introduce us as your internal engineering team.',
      },
      {
        question: 'Can code commits appear under our agency’s developer handle?',
        answer:
          'Yes. We can commit under your agency’s GitHub, GitLab, or Bitbucket organization using dedicated developer handles or agency email addresses, ensuring 100% white-label transparency.',
      },
      {
        question: 'Can Next Web Works engineers join our client discovery calls?',
        answer:
          'Yes. We regularly join client technical discovery and architecture scoping calls introduced as your agency’s technical lead or senior developer.',
      },
      {
        question: 'How quickly do you deliver scoped quotes on new client briefs?',
        answer:
          'After our initial 30-minute scoping call, we deliver an itemized, fixed-price quotation within 24 business hours.',
      },
      {
        question: 'What happens if our agency’s project requirements expand mid-sprint?',
        answer:
          'Any scope expansion is handled via a transparent, written change request with an itemized quote before any out-of-scope code is written, protecting agency margin from unexpected scope creep.',
      },
    ],
  },

  ctaBanner: {
    title: 'Ready to Scale Dev Capacity Without Full-Time Overhead?',
    description:
      'Partner with an engineering consultancy built specifically for agency margins. Book a 30-minute introductory call to discuss your current project pipeline.',
    primaryButton: { text: 'Discuss Agency Partnership', href: '/book-a-call' },
  },
};

