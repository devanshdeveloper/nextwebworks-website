// site/content/about.js - Engineering philosophy, 4 principles, 4 boundaries, and per-page FAQ/CTA

export const aboutContent = {
  founder: {
    name: 'Devansh',
    title: 'Founder & Principal Engineer',
    location: 'Indore, India',
    positioning:
      'Operating an engineering consultancy based in Indore, India, dedicated to helping digital agencies scale dev capacity safely and sustainably.',
  },

  principles: [
    {
      number: '01',
      title: 'Code Sovereignty',
      description:
        'Full source code, clean commit history, and deployment configurations belong entirely to your agency. Zero proprietary runtime traps or vendor lock-in.',
    },
    {
      number: '02',
      title: 'Strict Confidentiality',
      description:
        'We operate strictly under mutual NDA. Your client names, project scopes, and agency brand identity are protected with legally enforceable non-solicitation guarantees.',
    },
    {
      number: '03',
      title: 'Predictable Delivery',
      description:
        'Fixed-scope quotations within 24 hours, transparent milestone delivery schedules, and regular async Loom check-ins so your account team stays ahead of deadlines.',
    },
    {
      number: '04',
      title: 'Post-Launch Ownership',
      description:
        'We never vanish after deployment. Every full build includes a 14-day defect fix window with scheduled check-ins on Day 7 and Day 14 until your team is delighted.',
    },
  ],

  boundaries: [
    {
      title: 'No Cut-Corner Outsourcing',
      description:
        'We never hand off your client work to untested third parties or offshore gig pools. All code is authored directly in our engineering consultancy.',
    },
    {
      title: 'No Speculative Unpaid Pitching',
      description:
        'We provide rigorous technical reviews and fixed-price quotes on qualified briefs, but we do not write uncompensated speculative code for agency pitches.',
    },
    {
      title: 'No Hostage Code or Hidden Keys',
      description:
        'Your agency retains complete repository access and ownership from sprint kickoff to production launch. We never withhold code or infrastructure access.',
    },
    {
      title: 'No Direct Client Solicitation',
      description:
        'We never contact or solicit your clients behind your back. Our strict non-solicitation commitment is written permanently into our mutual NDA.',
    },
  ],

  faqs: {
    eyebrow: 'Engineering Team FAQ',
    title: 'How Our Consultancy Operates',
    description: 'Direct answers about our operations, location in Indore, time zone coverage, and engineering standards.',
    items: [
      {
        question: 'Where is Next Web Works based and what are your operating hours?',
        answer:
          'Next Web Works is based in Indore, India. We operate Monday through Friday from 10:00 AM to 7:00 PM IST, providing steady daily overlap with European mornings and US Eastern mornings for synchronous alignment and seamless async milestone handovers.',
      },
      {
        question: 'Do I communicate directly with the engineer building our project?',
        answer:
          'Yes. You communicate directly with Devansh, our founder and principal engineer. There are zero layers of junior account coordinators or miscommunicated game-of-telephone briefs, ensuring technical specifications translate directly into production code.',
      },
      {
        question: 'Why do you uphold a strict zero rates policy on your public website?',
        answer:
          'Because we operate strictly as a white-label partner to digital marketing agencies. Public rate cards compromise agency client trust and margin negotiation. Every project receives a private, itemized fixed-price quotation tailored to its exact technical specification within 24 hours.',
      },
      {
        question: 'How do you structure post-launch warranty reviews and defect resolution?',
        answer:
          'Once a website or application goes live on your client domain, we schedule proactive review checkpoints on Day 7 and Day 14. We monitor error telemetry, verify responsive fidelity across physical devices, and resolve any functional defects at zero additional charge.',
      },
      {
        question: 'What happens if our agency needs ongoing maintenance after the warranty window?',
        answer:
          'Following the 14-day warranty period, agencies have the option to engage ongoing maintenance support covering regular dependency updates, security patches, minor editorial revisions, and monthly uptime monitoring with dedicated developer priority.',
      },
    ],
  },

  ctaBanner: {
    badge: 'Direct Engineering Access',
    title: 'Work Directly With the Principal Engineer',
    description:
      'Cut out account manager layers and speak directly with engineering leadership. Book a 30-minute discovery call to review your upcoming client roadmap.',
    primaryButton: { text: 'Book Discovery Call With Devansh', href: '/book-a-call' },
    footnote: 'Direct 1-on-1 engineering dialogue · No sales pitch · Strict mutual NDA',
  },

  contactForm: {
    eyebrow: 'Direct Technical Inquiry',
    leadIn: 'Connect Directly With Engineering Leadership',
    description:
      'Have a question about our code standards, warranty terms, or developer background? Send Devansh a note directly for a thoughtful technical reply.',
  },
};

