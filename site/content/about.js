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

  mission: {
    eyebrow: 'Agency Back-Office Mission',
    title: 'Why We Built a Dedicated White-Label Engineering Partner',
    description:
      'Digital agencies win high-value accounts on strategy, brand, and design. But delivering modern web applications and headless portals without a bloated payroll bench is an expensive operational trap.',
    cards: [
      {
        id: 'm1',
        title: 'Freelancers Cannot Scale With Agency Demand',
        description:
          'Solo freelancers juggle multiple conflicting gigs, drop offline during critical client sprint demos, and lack systematic defect resolution workflows.',
      },
      {
        id: 'm2',
        title: 'Permanent In-House Engineering Carries Dead Weight',
        description:
          'Hiring senior fullstack developers on permanent payroll burns agency cash reserves when client retainers fluctuate or pitch pipelines experience delays.',
      },
      {
        id: 'm3',
        title: 'The Dedicated Invisible Partner Model Wins',
        description:
          'We bridge the gap: on-demand senior engineering horsepower with fixed-scope quotes, predictable sprint milestones, and zero payroll liability.',
      },
    ],
  },

  philosophy: {
    eyebrow: 'Architectural Standards',
    title: 'Engineering Quality Over Premature Framework Complexity',
    description:
      'We write production code designed to be maintained for years. Every repository adheres to strict line ceilings, pure Tailwind utility styling, and zero third-party bloat.',
    pillars: [
      {
        id: 'ph1',
        title: 'Thin Server Components',
        description:
          'We isolate client interactivity strictly to interactive leaves, ensuring maximum streaming efficiency, sub-second TTFB, and zero client bundle dead weight.',
      },
      {
        id: 'ph2',
        title: 'Zero Stock Photography Policy',
        description:
          'Every graphic element is an in-house programmatic SVG or authentic photograph, ensuring zero generic corporate stock aesthetic on your client builds.',
      },
      {
        id: 'ph3',
        title: 'Automated Compliance Gates',
        description:
          'Every commit passes rigorous automated lint, line ceiling, zero-stock asset verification, and technical SEO audits before code ever touches production.',
      },
    ],
  },

  confidentiality: {
    eyebrow: 'White-Label Protocol',
    title: 'Uncompromised Anonymity & Code Sovereignty',
    description:
      'Your clients never know we exist. We work strictly behind your agency veil, protecting your brand equity and agency-client relationships.',
    items: [
      {
        id: 'c1',
        badge: 'Ghost Authoring',
        title: 'Developer Handles or Agency Commits',
        description:
          'We push git commits under developer pseudonyms or directly through your agency GitHub organization accounts with zero external attribution.',
      },
      {
        id: 'c2',
        badge: 'Mutual NDA',
        title: 'Ironclad Legal Protection',
        description:
          'Every collaboration is governed by a bilateral mutual non-disclosure agreement with strict non-solicitation and confidential brief protections.',
      },
      {
        id: 'c3',
        badge: 'Direct IP Transfer',
        title: 'Unconditional Code Ownership',
        description:
          'Full intellectual property, commit histories, infrastructure access, and environment keys transfer directly and unconditionally to your agency.',
      },
    ],
  },

  warranty: {
    eyebrow: 'Post-Deployment Warranty Protocol',
    title: 'Production Ownership That Extends Past Launch Day',
    description:
      'We stand behind every line of code we ship. Full development builds include a 14-day warranty period to ensure client satisfaction and zero launch panic.',
    milestones: [
      {
        step: 'Day 01',
        title: 'Production Cutover & Verification',
        description:
          'We assist with DNS propagation, SSL verification, edge caching warmup, and automated Lighthouse telemetry validation on the live domain.',
      },
      {
        step: 'Day 07',
        title: 'Mid-Point Telemetry Review',
        description:
          'Scheduled check-in to analyze error logs, responsive fidelity on real client devices, and resolve any discovered edge cases at zero cost.',
      },
      {
        step: 'Day 14',
        title: 'Final Acceptance & Maintenance Option',
        description:
          'Final sign-off milestone ensuring your account team and client are delighted, followed by transition to optional monthly retainer support.',
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

