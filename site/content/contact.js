// site/content/contact.js - Contact page scoping form copy and per-page CTA banner

export const contactContent = {
  briefChecklist: {
    eyebrow: 'Preparation Guide',
    title: 'What to Include in Your Agency Dev Brief',
    description:
      'The clearer your technical requirements, the faster we return an itemized, milestone-locked fixed quotation.',
    items: [
      {
        id: 'b1',
        title: 'Figma or Wireframe Link',
        desc: 'Design files, responsive breakpoint guidelines, design system tokens, or interactive prototype links.',
      },
      {
        id: 'b2',
        title: 'Platform & Tech Stack Goals',
        desc: 'Preferred framework constraints: Next.js 16, Headless WordPress, Webflow CMS, or React Native mobile.',
      },
      {
        id: 'b3',
        title: 'Target Production Milestones',
        desc: 'Client launch deadlines, internal staging review dates, and any hard dependencies or third-party API keys.',
      },
      {
        id: 'b4',
        title: 'Integrations & Third-Party APIs',
        desc: 'CRMs, payment gateways, webhook consumers, database migrations, or enterprise authentication requirements.',
      },
    ],
  },

  security: {
    eyebrow: 'Confidentiality & Compliance',
    title: 'Enterprise-Grade Brief Confidentiality',
    description:
      'We treat incoming specifications with strict confidentiality from the second you submit them.',
    points: [
      {
        id: 's1',
        title: 'Same-Day Mutual NDA Execution',
        desc: 'If required prior to brief review, we execute your agency standard NDA or provide our bilateral template immediately.',
      },
      {
        id: 's2',
        title: 'Direct Engineering Review Only',
        desc: 'Briefs are reviewed exclusively by Devansh, our principal engineer. Zero junior coordinators or external third parties.',
      },
      {
        id: 's3',
        title: 'Encrypted Repository Staging',
        desc: 'All project data, architectural diagrams, and credentials remain inside encrypted storage throughout the project.',
      },
    ],
  },

  sla: {
    eyebrow: 'Response Commitments',
    title: 'Our Turnaround Time Service Level Agreement',
    description:
      'We know agency proposals have hard submission deadlines. We hold ourselves to strict turnaround benchmarks.',
    tiers: [
      {
        id: 'sla1',
        label: 'Acknowledge',
        time: '< 4 Hours',
        desc: 'Initial brief confirmation and preliminary technical questions delivered during business hours.',
      },
      {
        id: 'sla2',
        label: 'Fixed Quote',
        time: '24 Hours',
        desc: 'Complete milestone breakdown, technical architecture proposal, and binding quote delivered.',
      },
      {
        id: 'sla3',
        label: 'Kickoff',
        time: '< 48 Hours',
        desc: 'Staging setup, Git repository provisioning, and sprint execution upon milestone authorization.',
      },
    ],
  },

  contactForm: {
    eyebrow: 'Direct Scoping Submission',
    leadIn: 'Send Us Your Project Brief',
    description:
      'Have an active client RFP, Figma design, or technical specification? Submit your details below for a fixed quote within 24 business hours.',
  },
  ctaBanner: {
    badge: 'Direct Founder Connection',
    title: 'Prefer a Face-to-Face Technical Scoping Discussion?',
    description:
      'Skip the written form and schedule a 30-minute discovery video call with our founder. We will review your architecture specifications in real time.',
    primaryButton: { text: 'Schedule a Scoping Call', href: '/book-a-call' },
    footnote: 'Direct engineering desk · Same-day NDA turnaround · Zero agency fees',
  },
};

