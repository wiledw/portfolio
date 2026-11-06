// Everything a visitor can read in the village. The classic page (index.html)
// stays the full, canonical write-up; these are the short in-game versions, and
// every card links back to the matching section there for the details.

export const EMAIL = 'william.edwardo@gmail.com'

export const LINKS = {
  email: `mailto:${EMAIL}`,
  linkedin: 'https://www.linkedin.com/in/william-edwardo-gunawan/',
  github: 'https://github.com/wiledw/',
  instagram: 'https://www.instagram.com/wil_edw/',
}

export const ABOUT = {
  title: "William's House",
  kicker: 'About',
  image: { src: '/img/profile.jpg', alt: 'Portrait of William Edwardo Gunawan by a mountain lake' },
  pages: [
    "Hi, I'm William Edwardo Gunawan, a Forward Deployed Engineer in Toronto.",
    'I graduated from Toronto Metropolitan University with a Bachelor of Computer Science with Distinction, shipped at startups like Fiscal AI and Postilize, and build and run production software for clients.',
    'I work directly with the teams who use what I build. Engineering is an act of trust.',
  ],
  list: {
    heading: 'Three rules I work by',
    items: [
      ['Start with the user, not the stack.', 'Their workflow decides the architecture, and the tools come after.'],
      ['Ship, then sharpen.', 'A working version in front of people beats a perfect plan nobody has seen.'],
      ['Own it after launch.', "The job doesn't end at deploy. That's where people start depending on it."],
    ],
  },
  more: { label: 'Read the full About', href: '/#about' },
}

export const CONTACT = {
  title: 'Post box',
  kicker: 'Contact',
  pages: ["Let's build something real. Pick a way to say hi."],
  actions: [
    { label: 'Email me', href: LINKS.email, primary: true },
    { label: 'LinkedIn', href: LINKS.linkedin },
    { label: 'GitHub', href: LINKS.github },
    { label: 'Instagram', href: LINKS.instagram },
  ],
}

export const CAT = {
  title: 'Mochi the cat',
  kicker: 'Off-screen',
  pages: [
    'Mochi opens one eye. This stone has been warm since noon and she is not moving.',
    'When William is not coding, he is into music, games, travel and food. Mochi is mostly into the food part.',
  ],
}

export const KAYA = {
  title: 'Kaya the cat',
  kicker: 'Village patrol',
  pages: [
    'Kaya, the white cat, walks the street between the house and the workshop all day, mostly to supervise.',
    'Kaya decides you are worth following. Pet Kaya again if you would like some space.',
  ],
}

export const ANU = {
  title: 'Anu the cat',
  kicker: 'Village patrol',
  pages: [
    'Anu, the brown cat, is never far from Kaya. Together they keep the street in order.',
    'Anu trots along beside you now. Pet Anu again if you would like some space.',
  ],
}

export const KURO = {
  title: 'Kuro, station master',
  kicker: 'Platform duty',
  pages: [
    'Kuro has checked every stop on this line since 2020. Light the lanterns along the platform to read them, oldest first.',
  ],
}

export const FEATURED = {
  title: 'Central Auto Sales',
  kicker: 'Client · 2026 — Present',
  image: { src: '/img/centralautosales.png', alt: 'Central Auto Sales logo', dark: true },
  pages: [
    "Production platform for a multi-location used car dealership. Searchable inventory, side-by-side comparison, an admin dashboard and a daily new-arrivals newsletter.",
    "I'm the only engineer: I built it, ship its features, and stay on call.",
  ],
  tags: ['Next.js', 'Supabase', 'Vercel'],
  actions: [{ label: 'Visit the live site', href: 'https://www.central-autosales.com/', primary: true }],
}

export const HACKATHONS = [
  {
    title: 'Magic Quill',
    kicker: 'Hackathon winner',
    image: { src: '/img/magicquil.PNG', alt: 'Magic Quill wordmark', dark: true },
    pages: ['Real-time lecture transcription that turns speech, slides, diagrams and equations into clean, organized notes, exported as Markdown and PDF.'],
    tags: ['Next.js', 'Gemini', 'OCR', 'LaTeX'],
    actions: [{ label: 'See it on Devpost', href: 'https://devpost.com/software/magic-quill', primary: true }],
  },
  {
    title: 'ALI',
    kicker: 'Hack49 · Winner',
    image: { src: '/img/ali.png', alt: 'ALI logo' },
    pages: ["An AI companion app that screens for early signs of Alzheimer's through natural speech, while keeping elderly users company and less isolated."],
    tags: ['React Native', 'FastAPI', 'PyTorch', 'Wav2Vec'],
    actions: [{ label: 'See it on DoraHacks', href: 'https://dorahacks.io/buidl/17822', primary: true }],
  },
  {
    title: 'TrashCam',
    kicker: 'HackTheValley 9 · Winner',
    image: { src: '/img/trashcam.png', alt: 'TrashCam logo' },
    pages: ['Real-time waste sorting through your camera. Object recognition with Google Cloud Vision and COCO-SSD tells you which bin each item belongs in.'],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini'],
    actions: [{ label: 'See it on Devpost', href: 'https://devpost.com/software/trashcam-rwtjqn', primary: true }],
  },
  {
    title: 'SageAI',
    kicker: 'GenAI Genesis (Google) · Winner',
    image: { src: '/img/sageai.jpeg', alt: 'SageAI symptom analysis screen', cover: true },
    pages: ['An AI diagnostic tool that reads written symptoms with BERT and turns uploaded images into descriptions with Google Imagen, reaching over 90% accuracy across 41 diseases.'],
    tags: ['React', 'Node.js', 'PyTorch', 'Vertex AI', 'MongoDB'],
    actions: [{ label: 'See it on Devpost', href: 'https://devpost.com/software/sageai', primary: true }],
  },
]

// Oldest first: the Career Trail is walked from 2020 to today.
export const CAREER = [
  {
    title: 'PT. Rapier Technology International',
    marker: 'Rapier',
    kicker: 'Software Engineer Intern · Jan 2020 — Apr 2022',
    pages: ['Built and maintained RESTful APIs with Flask and front-end components with React, kept uploads secure with pre-signed S3 URLs, and set up a GitHub Actions pipeline that cut deployment friction by 40%.'],
    tags: ['Flask', 'React', 'AWS S3', 'GitHub Actions'],
    actions: [{ label: 'rapiertechnology.co.id', href: 'https://rapiertechnology.co.id/' }],
  },
  {
    title: 'Cove',
    marker: 'Cove',
    kicker: 'Full Stack Developer Intern · May 2023 — Aug 2023',
    pages: ['Built a full-stack React and Node.js application, and added testing to the CI/CD pipeline with cross-functional teams, cutting deployment time by 50% and production issues by 20%.'],
    tags: ['React', 'Node.js', 'MongoDB', 'CI/CD'],
    actions: [{ label: 'cove.dev', href: 'https://www.cove.dev/' }],
  },
  {
    title: 'Esportium',
    marker: 'Esportium',
    kicker: 'Software Engineer Intern · May 2024 — Aug 2024',
    pages: ['Helped build a full-stack platform on C#, ASP.NET, React and AWS RDS. Designed its REST API and ran weekly beta testing that halved average response time.'],
    tags: ['C#', 'ASP.NET', 'React', 'AWS RDS', 'xUnit'],
  },
  {
    title: 'MedPass',
    marker: 'MedPass',
    kicker: 'Front-end Developer · Feb 2025 — May 2025',
    pages: ['Turned Figma designs into scalable web applications, and set front-end testing standards that reached over 90% coverage on critical components.'],
    tags: ['React', 'Jest', 'React Testing Library', 'Figma'],
  },
  {
    title: 'Fiscal AI',
    marker: 'Fiscal AI',
    kicker: 'Software Engineer · Apr 2025 — Jul 2025',
    pages: ['Built a Python ETL pipeline over SEC EDGAR filings for 4,000+ U.S. companies and up to 40 years of history, with a chained Gemini pipeline reaching 98% extraction accuracy.'],
    tags: ['Python', 'Gemini', 'AWS Lambda', 'S3', 'Parquet'],
    actions: [{ label: 'fiscal.ai', href: 'https://fiscal.ai/' }],
  },
  {
    title: 'Postilize',
    marker: 'Postilize',
    kicker: 'Software Engineer II · Aug 2025 — Nov 2026 · Promoted Aug 2026',
    pages: [
      'Raised the precision of AI-detected sales signals, reaching 95.7% on litigation filtering. Turned SEC filing extractions that ran for hours into 1.4 s or less, and cut timing-out feed searches for the largest customers from 43 s to about 14 s.',
      'Built Strategy Shift, which compares consecutive quarterly SEC filings across 8,126 public issuers to catch strategy changes before they turn into legal work. It is well received by several of the top 100 U.S. law firms.',
    ],
    tags: ['Node.js', 'MongoDB', 'BullMQ', 'Redis', 'OpenAI', 'Atlas Search'],
    actions: [{ label: 'postilize.com', href: 'https://www.postilize.com/' }],
  },
  {
    title: 'Central Auto Sales',
    marker: 'Central Auto',
    kicker: 'Full-Stack Engineer (Client) · Jan 2026 — Present',
    pages: ["Sole engineer on the dealership's production website: searchable multi-location inventory, vehicle comparison, an admin dashboard, a daily newsletter, and on call for whatever comes up."],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Vercel', 'Resend'],
    actions: [{ label: 'central-autosales.com', href: 'https://www.central-autosales.com/' }],
  },
  {
    title: 'Optimus SBR',
    marker: 'Optimus SBR',
    kicker: 'Forward Deployed Engineer · Nov 2026 — Present',
    pages: ['Embedded with client teams to scope real problems on the ground, then build and ship the software that solves them.'],
    actions: [{ label: 'optimussbr.com', href: 'https://www.optimussbr.com/' }],
  },
]

export const SKILLS = [
  { title: 'Languages', crop: 'carrot', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'C#'] },
  { title: 'Frameworks', crop: 'cabbage', items: ['Next.js', 'React', 'Node.js', 'FastAPI', 'Django', 'TensorFlow'] },
  { title: 'Platforms', crop: 'sunflower', items: ['AWS', 'Azure', 'GCP', 'Supabase', 'Docker', 'Redis', 'Claude'] },
]

export const BOARD = {
  title: 'Notice board',
  kicker: 'GitHub activity',
  pages: ['Fresh from the village notice board: what William has been shipping on GitHub over the last 12 months.'],
  actions: [{ label: '@wiledw on GitHub', href: LINKS.github, primary: true }],
}

export const EXIT = {
  title: 'Bus stop',
  kicker: 'Classic site',
  pages: ['The bus back to the classic site comes whenever you want it. Everything in the village is written out in full there.'],
  actions: [{ label: 'Take the bus back', href: '/', primary: true, sameTab: true }],
}

export const WELCOME = {
  title: 'Welcome to the village',
  kicker: 'William Edwardo Gunawan',
  pages: [
    "Hi, I'm William! This little village is my portfolio. Cross the bridge to the plaza: everything is along one street from there.",
    'West: my home and the rice paddies. East: the workshop and the station, one stop per job. Up the steps: my hackathon wins at the shrine. Or tap a place on the map to walk there.',
  ],
}

// The plaza signpost
export const SIGNPOST = ['← Home · Rice paddies', '↑ Shrine', 'Workshop · Station →']
