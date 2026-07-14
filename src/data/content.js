// All editable copy lives here. Change content without touching components.

export const PROFILE = {
  name: 'Jay Savaliya',
  initials: 'JS',
  email: 'jaysavaliya017@gmail.com',
  phone: '+91 95107 86683',
  phoneHref: '+919510786683',
  linkedin: 'https://linkedin.com/in/jay-savaliya',
  location: 'Ahmedabad, IN',
  resume: 'Jay_Savaliya.pdf',
}

export const SCHEMATIC = {
  backend: ['.NET Core / C#', 'SQL Server / EF Core', 'React + TypeScript'],
  ai: ['OpenAI API', 'Claude API', 'MCP Server'],
}

export const STATS = [
  { n: '3', suffix: '+', l: 'years shipping production apps' },
  { n: '~40', suffix: '%', l: 'frontend performance gain, Tyler Technologies app' },
  { n: '10k', suffix: '+', l: 'end users on a U.S. gov application' },
  { n: '3', suffix: '×', l: 'LLM stacks in production: OpenAI · Claude · MCP' },
]

// Use {strong:"..."} segments to bold inline text inside paragraphs.
export const PROJECTS = [
  {
    feature: true,
    ai: true,
    tag: 'AI / LLM integration · differentiator',
    title: 'LLM features wired into production workflows',
    body: [
      'Integrated OpenAI and Claude APIs into existing business workflows for content generation, smarter search and AI-assisted data processing — then stood up an ',
      { strong: 'MCP server' },
      ' to connect those models directly to internal systems, so the AI works against real company data instead of a sandbox. Built with the practical stuff that makes LLM features survive contact with production: structured prompts, fallbacks, and clean boundaries between the deterministic app and the model.',
    ],
    stack: ['OpenAI API', 'Claude API', 'MCP Server', 'C# / .NET Core', 'RAG patterns', 'JWT auth'],
  },
  {
    tag: 'U.S. government · client: Tyler Technologies',
    title: 'Frontend lead on a large government web app',
    body: [
      'Led frontend development and optimization for a U.S. government application serving 10,000+ end users. Drove the performance overhaul through code splitting, lazy loading and a responsive redesign.',
    ],
    metrics: [
      { v: '~40%', amber: true, k: 'faster' },
      { v: '+30%', amber: true, k: 'satisfaction' },
      { v: '10k+', k: 'users' },
    ],
    stack: ['React', 'Redux', 'TypeScript', 'Node.js'],
  },
  {
    tag: 'Product engineering',
    title: 'Booking & scheduling system',
    body: ['Built from the ground up: availability, reservations, confirmations and cancellation handling — the full lifecycle, designed to stay consistent under real concurrent load.'],
    stack: ['C#', '.NET Core', 'SQL Server', 'React'],
  },
  {
    tag: 'Payments',
    title: 'Gift card module',
    body: ['Issuance, balance tracking, partial redemption and expiry rules — the kind of money-adjacent logic where edge cases and correctness actually matter.'],
    stack: ['.NET Core', 'EF Core', 'SQL Server'],
  },
  {
    tag: 'Billing',
    title: 'Invoicing & payments',
    body: ['Invoice generation, line-item and tax calculation, payment-status tracking and PDF export — plus the migration of older modules to .NET Core for performance and maintainability.'],
    stack: ['C#', '.NET Core', 'SQL', 'PDF export'],
  },
]

export const STACK = [
  {
    h: 'Backend',
    items: [
      ['C#', 'core language'],
      ['.NET Core / ASP.NET', 'web APIs, MVC'],
      ['.NET Framework', 'legacy + migration'],
      ['Dependency injection', 'DI lifetimes'],
    ],
  },
  {
    h: 'Frontend',
    items: [
      ['React', 'primary framework'],
      ['TypeScript', 'typed at scale'],
      ['Redux', 'state management'],
      ['Next.js / Node.js', 'SSR + tooling'],
    ],
  },
  {
    h: 'Data',
    items: [
      ['SQL Server', 'primary db'],
      ['EF Core / LINQ', 'N+1, AsNoTracking'],
      ['MySQL / PostgreSQL', 'relational'],
      ['Query optimization', 'indexes, SARGable'],
    ],
  },
  {
    h: 'AI / LLM',
    signal: true,
    items: [
      ['OpenAI API', 'production'],
      ['Claude API', 'production'],
      ['MCP Server', 'tool integration'],
      ['RAG & prompt design', 'applied'],
    ],
  },
  {
    h: 'Tooling',
    items: [
      ['Git · GitHub · Bitbucket', 'vcs'],
      ['Jira', 'tracking'],
      ['Azure / AWS / Docker', 'deploy'],
      ['Postman / Swagger', 'API workflow'],
    ],
  },
]

export const EXPERIENCE = [
  {
    role: 'Software Developer · .NET + React',
    company: 'CodeQuantum Technologies Pvt. Ltd. — Ahmedabad',
    date: 'May 2024 — May 2026',
    intro: 'Contract-based client engagements building and maintaining product web apps in C#, .NET Core and React for retail and enterprise clients.',
    bullets: [
      'Built booking, gift card and invoicing systems end to end.',
      'Integrated OpenAI & Claude APIs and set up an MCP server connecting them to internal systems.',
      'Led frontend for a U.S. government app (Tyler Technologies) — ~40% faster, +30% satisfaction, 10k+ users.',
      'Ran code reviews, resolved production issues, migrated legacy modules to .NET Core.',
    ],
  },
  {
    role: '.NET + React Intern',
    company: 'AdiInfi Pvt. Ltd. — Ahmedabad',
    date: 'Apr 2023 — Apr 2024',
    intro: 'Built and maintained web features in C#, .NET / .NET Core, ASP.NET and React; wrote and tuned SQL queries, stored procedures and functions in SQL Server; shipped responsive UI and tracked work in Jira.',
  },
  {
    edu: true,
    role: 'B.E. — Information Technology',
    company: 'Gandhinagar Institute of Technology',
    date: 'Aug 2020 — May 2024',
  },
]

export const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
