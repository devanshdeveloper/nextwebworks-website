// site/content/bookACall.js - Book a call per-page CTA banner copy

export const bookACallContent = {
  guarantee: {
    eyebrow: 'Discovery Call Architecture',
    title: 'Our Discovery Call Commitments',
    description:
      'We respect your time as an agency operator. Every call is conducted with strict engineering standards and zero sales pressure.',
    commitments: [
      {
        id: 'g1',
        title: 'Lead Engineer on Every Call',
        desc: 'You speak directly with Devansh, principal engineer. No sales reps, account coordinators, or non-technical intermediaries.',
      },
      {
        id: 'g2',
        title: 'Zero High-Pressure Sales Tactics',
        desc: 'We evaluate technical architecture, stack compatibility, and timeline feasibility. If we are not the right fit, we tell you immediately.',
      },
      {
        id: 'g3',
        title: 'Itemized Proposal in 24 Hours',
        desc: 'Following our discussion, we deliver an itemized fixed-scope roadmap and milestone breakdown within 24 business hours.',
      },
    ],
  },

  confidentiality: {
    eyebrow: 'Confidentiality Reassurance',
    title: 'Your Client Specs Remain 100% Confidential',
    description:
      'We understand agencies operate in highly competitive markets. Your client identity, Figma links, and proprietary roadmaps are protected before you even share them.',
    points: [
      {
        id: 'c1',
        title: 'Bilateral Mutual NDA',
        desc: 'We execute a mutual non-disclosure agreement prior to or immediately following the call, protecting all shared intellectual property.',
      },
      {
        id: 'c2',
        title: 'Zero Client Contact Policy',
        desc: 'We never reach out to, pitch, or solicit your client contacts. We exist solely as your invisible back-office dev arm.',
      },
      {
        id: 'c3',
        title: 'Encrypted Asset Handling',
        desc: 'All briefs, designs, and credentials shared during discovery are stored in encrypted vaults and accessed solely by engineering leadership.',
      },
    ],
  },

  ctaBanner: {
    badge: 'Async Brief Intake',
    title: 'Need a Quote Faster Than a Calendar Slot Allows?',
    description:
      'If your client deadline is pressing, submit your project wireframes or brief via our contact form. Our engineering team returns scoped quotes within 24 hours.',
    primaryButton: { text: 'Submit Async Dev Brief', href: '/contact' },
    footnote: 'Itemized milestone quotes · Same-day mutual NDA · Strict confidentiality',
  },
};

