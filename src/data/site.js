// ---------------------------------------------------------------------------
// Obaloluwa.dev — Site-wide configuration
// Edit these values to configure contact details, social links, and projects.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Obaloluwa.dev',
  role: 'Independent Frontend Developer & Web Designer',
  location: 'Nigeria',
  availability: 'Available for select projects · Working worldwide',
  canonical: 'https://obaloluwa.dev/',
  // Configure these once you have real contact details.
  contact: {
    email: '', // e.g. 'hello@obaloluwa.dev' — leave empty until configured
    whatsapp: '', // e.g. '2348000000000' — international format, no '+'
    whatsappMessage: "Hi Obaloluwa, I'd like to discuss a project.",
  },
  socials: [
    { label: 'GitHub', url: '', handle: '@obaloluwa' },
    { label: 'LinkedIn', url: '', handle: '/in/obaloluwa' },
    { label: 'Instagram', url: '', handle: '@obaloluwa.dev' },
  ],
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const projects = [
  {
    id: 'sunlight-royale',
    number: '01',
    title: 'Sunlight Royale Events Centre',
    category: 'Business Website',
    description:
      'An event venue website designed to present the space, communicate its offering, and help potential customers explore the venue.',
    url: 'https://sunlightroyaleeventscentre.vercel.app/',
    preview: false,
    // Visual is generated as a CSS composition; palette reflects brand context.
    accent: '#E53935',
    palette: ['#F7F4ED', '#E8E3D9', '#171717'],
    ratio: 'tall', // tall | wide | square
    year: '2024',
  },
  {
    id: 'amala-toh-sure',
    number: '02',
    title: 'Amala Toh Sure',
    category: 'Food & Hospitality',
    description:
      'A digital presence for a food business, designed to make the offering easier to explore and understand.',
    url: 'https://amalatohsure.vercel.app/',
    image: '/project-amala.jpg',
    accent: '#C8651B',
    palette: ['#F4ECDF', '#D9A867', '#2B1E14'],
    ratio: 'wide',
    year: '2024',
  },
  {
    id: 'calcpro',
    number: '03',
    title: 'CalcPro',
    category: 'Web Application',
    description:
      'A calculator-focused web application demonstrating interactive frontend functionality and practical utility.',
    url: 'https://calcpro-alpha.vercel.app/',
    image: '/project-calcpro.jpg',
    accent: '#2563EB',
    palette: ['#0F172A', '#1E293B', '#38BDF8'],
    ratio: 'square',
    year: '2024',
  },
  {
    id: 'cog-testimonies',
    number: '04',
    title: 'Chapel of Grace Testimonies',
    category: 'Community Platform',
    description:
      'A testimony-sharing experience that helps a church community submit and explore personal testimonies online.',
    url: 'https://cogtestimonies.vercel.app/',
    image: '/project-chapel.jpg',
    accent: '#7C5CFF',
    palette: ['#FAF7F2', '#C8B7A0', '#1F1B16'],
    ratio: 'tall',
    year: '2024',
  },
  {
    id: 'octagon-omega',
    number: '05',
    title: 'Octagon Omega',
    category: 'Web Experience',
    description:
      'A digital project exploring the presentation of services and information through a dedicated web experience.',
    url: 'https://octagon-omega.vercel.app/',
    image: '/project-octagon.jpg',
    accent: '#0F766E',
    palette: ['#F0F4F1', '#A7C4BC', '#0B1F1B'],
    ratio: 'wide',
    year: '2024',
  },
  {
    id: '3d-interiors',
    number: '06',
    title: '3D Interiors',
    category: 'Interior Design Concept',
    description:
      'An interior design concept focused on presenting spaces, services, and visualisation capabilities.',
    url: 'https://3dinteriors.vercel.app/',
    image: '/project-interiors.jpg',
    accent: '#9A7B4F',
    palette: ['#F3EFE7', '#C6BBA3', '#1A1815'],
    ratio: 'square',
    year: '2024',
  },
]
