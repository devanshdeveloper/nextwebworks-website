// site/content/forAgencies.js - Agency partnership models, NDA guarantees, and per-page CTA banner

export const forAgenciesContent = {
  hero: {
    eyebrow: 'Agency Partnership Model',
    title: 'Built for Agency Margins & Client Peace of Mind',
    description:
      'Say yes to complex client dev pitches without taking on permanent payroll or freelancer risk. We engineer web and mobile platforms strictly under your agency brand.',
  },

  margins: {
    eyebrow: 'Profitability & Margin Security',
    title: 'Protect Your Agency Retainers From Scope Creep',
    description:
      'Agency margins vanish when development projects drag past deadlines or developers bill open-ended hourly fees. We build predictability into every project.',
    pillars: [
      {
        id: 'p1',
        title: 'Locked Fixed-Scope Quotations',
        desc: 'Every sprint begins with an itemized specification and locked milestone quotation. You know exact deliverables and timing before kickoff.',
      },
      {
        id: 'p2',
        title: 'Zero Hourly Billing Surprises',
        desc: 'We never charge open-ended hourly tabs. If a client brief expands, we isolate new requests in itemized change requests for written approval.',
      },
      {
        id: 'p3',
        title: 'Zero Payroll Bench Drag',
        desc: 'Engage engineering capacity when client demand spikes, and scale back when pitch pipelines quiet down. Zero idle developer payroll expense.',
      },
    ],
  },

  confidentiality: {
    eyebrow: 'Non-Solicitation & Brand Protection',
    title: 'Absolute Discretion and Invisible Delivery',
    description:
      'We treat your agency relationships as sacred. Our entire operational architecture is built around confidentiality, non-solicitation, and ghost delivery.',
    points: [
      {
        id: 'c1',
        title: 'Enforceable Non-Solicitation',
        desc: 'Strict non-solicitation is codified directly in our bilateral mutual NDA. We never approach, solicit, or contact your clients independently.',
      },
      {
        id: 'c2',
        title: 'Agency Handle Git Commits',
        desc: 'We author commits under your company email addresses or anonymous developer handles, keeping version control histories completely native.',
      },
      {
        id: 'c3',
        title: 'Zero Portfolio Logo Bragging',
        desc: 'We never publish your client logos, case studies, or confidential brand names on public marketing sites without explicit permission.',
      },
    ],
  },

  onboarding: {
    eyebrow: 'Rapid Kickoff Lifecycle',
    title: 'From First Brief to Active Sprint in Under 48 Hours',
    description:
      'We know agencies move at the speed of client pitches. Our lightweight onboarding protocol gets your first sprint scoped and moving immediately.',
    steps: [
      {
        step: '01',
        title: 'Discovery & Mutual NDA',
        desc: 'Sign our mutual NDA and share active Figma designs, client briefs, or RFP specifications in a 30-minute scoping session.',
      },
      {
        step: '02',
        title: 'Itemized Milestone Quotation',
        desc: 'Receive a comprehensive fixed-price milestone roadmap and confirmed delivery dates within 24 business hours.',
      },
      {
        step: '03',
        title: 'Sprint Kickoff & Private Staging',
        desc: 'We spin up private staging, establish async Loom check-in routines, and begin production coding immediately.',
      },
    ],
  },

  workflow: {
    eyebrow: 'Agency Engagement Pipeline',
    title: 'How We Ship Behind Your Brand in 4 Sprints',
    description:
      'A predictable, transparent engineering process designed to keep your account executives informed and your client deadlines secure.',
    steps: [
      {
        number: '01',
        title: 'NDA & Pilot Brief Intake',
        tag: 'Same-Day Clearance',
        desc:
          'We execute a bilateral mutual non-disclosure agreement protecting all agency client relationships, then review your wireframes, Figma specs, and platform goals.',
      },
      {
        number: '02',
        title: 'Fixed-Price Proposal & Architecture Spec',
        tag: '24-Hour Delivery',
        desc:
          'Our principal engineer provides an itemized proposal with clear milestone definitions, confirmed platform fit, and transparent delivery dates before code commences.',
      },
      {
        number: '03',
        title: 'Private Staging & Continuous Agency QA',
        tag: 'Active Sprints',
        desc:
          'We build in private Git repositories, providing live preview deployments on your agency domains or neutral staging URLs for ongoing progress reviews.',
      },
      {
        number: '04',
        title: 'Complete IP Handover & 14-Day Warranty',
        tag: 'Full Ownership',
        desc:
          'Repository ownership transfers directly to your organization upon launch, backed by a 14-day defect resolution window and proactive check-ins.',
      },
    ],
    cta: {
      prompt: 'Want to test our delivery speed with a low-risk trial sprint?',
      text: 'Initiate a scoped agency pilot',
      href: '/book-a-call',
    },
  },

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
          'Yes. We regularly author and commit under your agency’s GitHub, GitLab, or Bitbucket organization. We can configure dedicated agency email aliases or developer handles so the entire version control history looks completely native to your in-house team.',
      },
      {
        question: 'Can Next Web Works engineers join our client discovery calls?',
        answer:
          'Yes. When introduced under your agency identity, our engineers can join client technical discovery, requirements scoping, and architecture review calls as your technical lead. You manage the commercial relationship; we support your pitch with rigorous engineering depth.',
      },
      {
        question: 'How quickly do you deliver scoped quotes on new client briefs?',
        answer:
          'Following our initial 30-minute scoping discussion or brief intake, we review technical feasibility, architectural dependencies, and milestone deliverables, returning an itemized, fixed-price quotation within 24 business hours to keep your client proposals moving swiftly.',
      },
      {
        question: 'What happens if our agency’s project requirements expand mid-sprint?',
        answer:
          'Any scope expansion is handled via a transparent, written change request with an itemized quote before any out-of-scope code is written, protecting agency profit margins from unexpected scope creep or unbudgeted developer hours.',
      },
    ],
  },

  ctaBanner: {
    badge: 'Agency Capacity Expansion',
    title: 'Ready to Scale Dev Capacity Without Full-Time Overhead?',
    description:
      'Partner with an engineering consultancy built specifically for agency margins. Book a 30-minute introductory call to discuss your current project pipeline.',
    primaryButton: { text: 'Discuss Agency Partnership', href: '/book-a-call' },
    footnote: 'Flexible sprint allocations · Dedicated monthly bench · Zero payroll liability',
  },

  contactForm: {
    eyebrow: 'Agency Partnership Inquiry',
    leadIn: 'Inquire About Agency Dev Bench Capacity',
    description:
      'Looking for dedicated monthly sprint hours, scoped pilot builds, or a white-label technical lead for pitches? Outline your agency dev requirements below.',
  },
};

