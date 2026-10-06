import { Service, Influencer, Testimonial, ProcessStep, InstagramPost, Project, SkillCategory, EducationDetail } from '../types';
import ruxovaImg from '../assets/ruxova.jpg';
import dashboardImg from '../assets/influencer_dashboard.jpg';
import rahulImg from '../assets/rsagency.jpeg';

export const FOUNDER_PROFILE = {
  name: 'RAHUL KUMAR',
  role: 'Full Stack Developer & Founder, RS AGENCY',
  tagline: 'Crafting High-Performance Web Applications, E-Commerce Stores & Influencer Platforms',
  bio: 'Leading full-stack web development projects, digital solutions, and influencer marketing systems. Founder of RS AGENCY with proven expertise in building modern, scalable React/Node.js web apps, luxury e-commerce (Ruxova Perfume), and custom admin dashboards.',
  email: 'rahulankitbalthetr6200@gmail.com',
  phone: '+91-7091830749',
  website: 'www.rsagency.vercel.app',
  location: 'Aurangabad, Bihar, India',
  github: 'https://github.com/7091rahulA20',
  photo: rahulImg,
  educationSummary: 'Bachelor of Computer Application (BCA) - CGPA 7.79 (Aryabhatta Knowledge University, Patna)',
  stats: [
    { label: 'Featured Projects', value: '5+' },
    { label: 'Creators Managed', value: '100+' },
    { label: 'Overall CGPA', value: '7.79' },
    { label: 'Client Satisfaction', value: '100%' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'proj-influencer-platform',
    title: 'RS Agency - Influencer Marketing Platform',
    subtitle: 'Full-Stack Creator Matchmaking & Campaign Management System',
    category: 'platform',
    description: 'A modern, high-impact influencer marketing platform built to connect digital-first brands with over 100+ verified content creators for synchronized viral campaigns, UGC video creation, and performance tracking.',
    longDescription: 'RS Agency Influencer Platform was designed and engineered from the ground up to solve creator discovery and campaign execution hurdles. It features real-time engagement analytics, custom campaign briefs, UGC request workflows, and automated payout management.',
    image: dashboardImg,
    tags: ['Full Stack', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://rsagency.vercel.app',
    githubUrl: 'https://github.com/7091rahulA20/RSAGENCY',
    featured: true,
    metrics: [
      { label: 'Verified Creators', value: '100+' },
      { label: 'Monthly Reach', value: '5M+' },
      { label: 'Campaign ER Rate', value: '8.5%' }
    ],
    highlights: [
      'AI-enhanced creator curation based on audience demographics & niche',
      'Real-time campaign analytics dashboard tracking Reels views and CTR',
      'Turnkey UGC video request and script approval workflow pipeline',
      'Integrated creator contract escrow and fast payout tracking system'
    ],
    techStack: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Vite', 'Motion']
  },
  {
    id: 'proj-ruxova-perfume',
    title: 'Ruxova Perfume - Luxury E-Commerce Website',
    subtitle: 'High-End Fragrance Storefront & Scent Profiler Engine',
    category: 'ecommerce',
    description: 'An ultra-luxurious e-commerce showcase built for Ruxova Perfumes. Features an interactive scent pyramid (Top, Heart, Base notes), custom fragrance recommendation quiz, dark gold aesthetic, and seamless cart checkout.',
    longDescription: 'Ruxova Perfumes required a state-of-the-art web presence that felt as premium as high-end European fragrance houses. Engineered with micro-animations, fast asset rendering, and a custom fragrance notes selector to boost customer conversion.',
    image: ruxovaImg,
    tags: ['E-Commerce', 'React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'REST API'],
    liveUrl: 'https://rsagency.vercel.app',
    githubUrl: 'https://github.com/7091rahulA20/RSAGENCY',
    featured: true,
    metrics: [
      { label: 'Conversion Rate', value: '4.8%' },
      { label: 'AOV Increase', value: '+32%' },
      { label: 'Performance', value: '98/100' }
    ],
    highlights: [
      'Interactive Scent Pyramid Selector (Top Notes, Heart Notes, Base Notes)',
      'Luxury glassmorphic UI design with dark gold ambient lighting',
      'Custom scent quiz recommending personalized fragrances',
      'Mobile-optimized cart, promo code engine, & instant checkout flow'
    ],
    techStack: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Motion/Framer', 'REST API', 'Cloudinary']
  },
  {
    id: 'proj-creator-directory',
    title: 'Creator Listing & Profile Directory',
    subtitle: 'Searchable Roster & Media Kit Rate Card Hub',
    category: 'directory',
    description: 'Dynamic profile directory showcasing top content creators across Tech, Gaming, Fashion, Lifestyle, and Business with live follower metrics, platform links, and instant sponsorship query forms.',
    longDescription: 'Engineered to streamline brand outreach by giving advertisers transparent access to creator rate cards, platform distribution metrics, and past campaign case studies.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&fit=crop',
    tags: ['Directory', 'React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    liveUrl: 'https://rsagency.vercel.app',
    githubUrl: 'https://github.com/7091rahulA20/RSAGENCY',
    featured: true,
    metrics: [
      { label: 'Creator Profiles', value: '100+' },
      { label: 'Platforms', value: 'Instagram, TikTok, YouTube' }
    ],
    highlights: [
      'Multi-filter search by follower tier, platform, engagement rate & category',
      'Interactive creator detail modal with past brand collaboration proof',
      'Direct one-click booking request form with budget selector'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Express backend']
  },
  {
    id: 'proj-admin-dashboard',
    title: 'RS Agency Admin & Financial Analytics Portal',
    subtitle: 'Back-Office Campaign & Revenue Operations Suite',
    category: 'dashboard',
    description: 'Central management dashboard used by RS Agency operators to monitor active brand orders, creator commission payouts, campaign reach milestones, and REST API microservices.',
    longDescription: 'Provides real-time visualization of business performance metrics, automated invoice generation, creator contract status, and client communication logs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&fit=crop',
    tags: ['Dashboard', 'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'REST API'],
    githubUrl: 'https://github.com/7091rahulA20/RSAGENCY',
    featured: false,
    metrics: [
      { label: 'Daily Data Syncs', value: '50K+' },
      { label: 'Uptime Score', value: '99.9%' }
    ],
    highlights: [
      'Financial payout tracking with escrow transaction logs',
      'Chart.js interactive metric visualizations for daily view counts',
      'Role-based access security for Admin, Client, and Creator accounts'
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Bootstrap', 'REST API']
  },
  {
    id: 'proj-founder-portfolio',
    title: 'Rahul Kumar Developer Portfolio',
    subtitle: 'Ultra-Modern Cyber Portfolio & Client Acquisition Hub',
    category: 'fullstack',
    description: 'The website you are viewing right now! Built to present Rahul Kumar’s engineering resume, BCA academic record, featured client projects, and agency services to employers and clients.',
    longDescription: 'Designed following strict modern aesthetic guidelines: dark obsidian obsidian backgrounds, neon cyan/purple accents, custom micro-interactions, responsive grid layouts, and seamless accessibility.',
    image: rahulImg,
    tags: ['Portfolio', 'React 19', 'Tailwind CSS v4', 'Vite', 'TypeScript'],
    liveUrl: 'https://rsagency.vercel.app',
    githubUrl: 'https://github.com/7091rahulA20/RSAGENCY',
    featured: false,
    metrics: [
      { label: 'Lighthouse Score', value: '100' },
      { label: 'Design System', value: 'Dark Obsidian Cyber' }
    ],
    highlights: [
      'Interactive BCA semester performance breakdown & subject grades',
      'Dedicated Ruxova Perfume interactive fragrance simulator section',
      'Segmented 3-way contact form for client hires, brands, & creators'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'Vite', 'TypeScript', 'Motion']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5 / CSS3', level: 'Advanced', iconName: 'Code', experience: 'Semantic HTML, Flexbox, Grid, Animations' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', iconName: 'FileCode', experience: 'Async/Await, DOM, Closure, ES Modules' },
      { name: 'React.js', level: 'Advanced', iconName: 'Atom', experience: 'Hooks, State, Context API, Reusable UI' },
      { name: 'Next.js', level: 'Intermediate', iconName: 'Layers', experience: 'SSR, SSG, App Router, Performance' },
      { name: 'Tailwind CSS', level: 'Advanced', iconName: 'Palette', experience: 'Custom themes, Glassmorphic UI, Utility-first' },
      { name: 'Bootstrap', level: 'Intermediate', iconName: 'Layout', experience: 'Responsive grids, classic UI kits' }
    ]
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', level: 'Advanced', iconName: 'Server', experience: 'Async runtime, Event loops, Microservices' },
      { name: 'Express.js', level: 'Advanced', iconName: 'Cpu', experience: 'REST APIs, Middleware, Auth, Routing' },
      { name: 'Java', level: 'Intermediate', iconName: 'Coffee', experience: 'OOP concepts, Data structures, Core Java' },
      { name: 'Spring Framework', level: 'Intermediate', iconName: 'Feather', experience: 'Spring Boot, Dependency Injection' },
      { name: 'REST API Design', level: 'Advanced', iconName: 'Globe', experience: 'JSON schemas, Status codes, Postman testing' }
    ]
  },
  {
    title: 'Databases & Cloud Storage',
    skills: [
      { name: 'MongoDB', level: 'Advanced', iconName: 'Database', experience: 'Mongoose schemas, Aggregation, NoSQL' },
      { name: 'MySQL', level: 'Intermediate', iconName: 'HardDrive', experience: 'Relational tables, Joins, Indexing, SQL' },
      { name: 'Python', level: 'Basic/Scripting', iconName: 'Terminal', experience: 'Data manipulation, Scripting utilities' },
      { name: 'Cloudinary', level: 'Intermediate', iconName: 'Cloud', experience: 'Media upload API, image optimization' }
    ]
  },
  {
    title: 'Tools, Workflows & Web Standards',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', iconName: 'GitBranch', experience: 'Version control, Branching, PRs' },
      { name: 'Vercel & Render', level: 'Advanced', iconName: 'UploadCloud', experience: 'Continuous deployment, Environment setup' },
      { name: 'VS Code & Postman', level: 'Advanced', iconName: 'Wrench', experience: 'API debugging, Extensions, Environment variables' },
      { name: 'UI/UX & Color Theory', level: 'Advanced', iconName: 'Figma', experience: 'Modern design systems, Typography, Glassmorphism' },
      { name: 'Web Accessibility & SEO', level: 'Advanced', iconName: 'Search', experience: 'WCAG standards, Meta tags, Dynamic sitemaps' }
    ]
  }
];

export const EDUCATION_DATA: EducationDetail = {
  degree: 'Bachelor of Computer Application (BCA)',
  institution: 'Rajan Mamata Degree College, Aurangabad',
  affiliation: 'Affiliated to Aryabhatta Knowledge University, Patna',
  location: 'Aurangabad, Bihar, India',
  cgpa: '7.79',
  semesters: [
    { sem: 'Semester 1', sgpa: '8.42' },
    { sem: 'Semester 2', sgpa: '6.81' },
    { sem: 'Semester 3', sgpa: '7.71' },
    { sem: 'Semester 4', sgpa: '8.00' },
    { sem: 'Semester 5', sgpa: '7.22' },
    { sem: 'Semester 6', sgpa: '8.58' }
  ],
  highlights: [
    { subject: 'Web Technology (Elective 1)', grade: 'Grade B (76/100)', marks: 'IA: 34 | ESE: 42' },
    { subject: 'Web Technology Practical', grade: 'Grade A (86/100)', marks: 'IA: 34 | ESE: 52' },
    { subject: 'E-Commerce', grade: 'Grade B (75/100)', marks: 'IA: 34 | ESE: 41' },
    { subject: 'Project & Viva (12 Credits)', grade: 'Grade A (245/300)', marks: 'IA: 162 | ESE: 83' }
  ]
};

export const SERVICES: Service[] = [
  // Full Stack Web Dev Services (for clients looking to hire Rahul / RS Agency for web dev)
  {
    id: 'webdev-fullstack',
    title: 'Full Stack Web Applications',
    type: 'webdev',
    icon: 'Code',
    description: 'Custom web application development from scratch using React, Next.js, Node.js, Express, and MongoDB/MySQL. Scalable architectures tailored to your business goals.',
    listItems: [
      'Single Page Apps (SPA) & SSR frameworks',
      'Secure RESTful API microservices',
      'Database architecture & schema design',
      'High performance & responsive UI/UX'
    ]
  },
  {
    id: 'webdev-ecommerce',
    title: 'Luxury E-Commerce Sites (Like Ruxova)',
    type: 'webdev',
    icon: 'PackageOpen',
    description: 'Bespoke online stores built with high-end aesthetic appeal, interactive product showcases, scent/product profiling engine, custom cart, and checkout flow.',
    listItems: [
      'Custom luxury product catalog & 3D view',
      'Interactive filter & recommendation engine',
      'Fast, mobile-optimized checkout flow',
      'Cloudinary media management & CDN'
    ]
  },
  {
    id: 'webdev-dashboards',
    title: 'Admin Dashboards & Portals',
    type: 'webdev',
    icon: 'Cpu',
    description: 'Internal back-office management dashboards featuring interactive charts, user permissions, order management, revenue analytics, and transaction logs.',
    listItems: [
      'Real-time data visualization charts',
      'Role-based access control (RBAC)',
      'Exportable financial & analytical reports',
      'Custom REST API integration'
    ]
  },

  // Brand Influencer Services
  {
    id: 'reels-promotion',
    title: 'Instagram Reels Promotion',
    type: 'brand',
    icon: 'Clapperboard',
    description: 'Launch viral Reels campaigns that slide directly into your target audience’s feeds through curated creators who specialize in organic integrations.',
    listItems: [
      'Custom viral hooks and audios',
      'Creator brief & script development',
      'Guaranteed organic views milestones',
      'Call To Action (CTA) link mapping'
    ]
  },
  {
    id: 'ugc-videos',
    title: 'UGC Video Creation',
    type: 'brand',
    icon: 'Video',
    description: 'Acquire high-performing, raw, authentic User-Generated Content (UGC) scripts and video assets designed to maximize ad spend efficiency.',
    listItems: [
      'A/B test hook variations',
      'Relatable unboxing & problem-solving styles',
      'Full usage rights of premium video elements',
      'Professional color & pacing grade'
    ]
  },
  {
    id: 'meme-marketing',
    title: 'Meme Marketing & Culture',
    type: 'brand',
    icon: 'Smile',
    description: 'Infect internet culture with contextually relevant meme formats across high-traffic community hubs and popular meme handles.',
    listItems: [
      'Trend-jacking & rapid response content',
      'Natural, non-corporate humor styling',
      'Simultaneous multi-page blast schedules',
      'Exceptional shares-to-views ratio metrics'
    ]
  },

  // Creator Services
  {
    id: 'sponsorship-deals',
    title: 'Premium Sponsorship Deals',
    type: 'creator',
    icon: 'Coins',
    description: 'Unlock stable, recurring, high-paying sponsorships from top-tier brands matching your specific niche and aesthetic guidelines.',
    listItems: [
      'Exclusive brand matchmaking access',
      'Negotiation for premium pay benchmarks',
      'Professional rate card crafting',
      'Secure escrow contract compliance'
    ]
  },
  {
    id: 'creator-growth',
    title: 'Creator Brand Growth',
    type: 'creator',
    icon: 'TrendingUp',
    description: 'Optimize your media accounts for monetization. Build media kits, polish bio architectures, and sharpen content funnels for maximum appeal.',
    listItems: [
      'Media Kit design & regular syncs',
      'Analytical review of reach opportunities',
      'SEO and bio structure optimizations',
      'Engagement recovery and build guides'
    ]
  }
];

export const INFLUENCERS: Influencer[] = [
  {
    id: 'inf-1',
    name: 'Aria Sterling',
    handle: '@aria.sterling',
    category: 'lifestyle',
    followers: '850K',
    followersCount: 850000,
    engagement: '7.8%',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&fit=crop',
    platforms: ['instagram', 'tiktok'],
    featured: true,
    brands: ['Nike', 'Sephora', 'Loreal']
  },
  {
    id: 'inf-2',
    name: 'Leo Thorne',
    handle: '@leo.tech',
    category: 'tech',
    followers: '1.2M',
    followersCount: 1200000,
    engagement: '8.4%',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop',
    platforms: ['youtube', 'instagram'],
    featured: true,
    brands: ['Asus', 'Skillshare', 'Logitech']
  },
  {
    id: 'inf-3',
    name: 'Elena Rostova',
    handle: '@elena.rostyle',
    category: 'fashion',
    followers: '620K',
    followersCount: 620000,
    engagement: '9.1%',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop',
    platforms: ['instagram', 'tiktok', 'youtube'],
    featured: true,
    brands: ['Zara', 'Vogue', 'Prada']
  },
  {
    id: 'inf-4',
    name: 'Xavier "Apex" Jenkins',
    handle: '@apex_gaming',
    category: 'gaming',
    followers: '2.5M',
    followersCount: 2500000,
    engagement: '11.2%',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&h=400&fit=crop',
    platforms: ['twitch', 'youtube', 'tiktok'],
    featured: true,
    brands: ['Razer', 'Epic Games', 'NordVPN']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikram Mehta',
    role: 'Co-Founder, Ruxova Fragrances',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop',
    type: 'client',
    content: 'Rahul Kumar engineered our Ruxova Perfume website with phenomenal precision. The interactive scent pyramid and dark luxury design helped boost our customer conversion rate by over 32%! Highly recommended full stack developer.',
    rating: 5,
    metric: '+32% Conversion Boost'
  },
  {
    id: 'test-2',
    name: 'Michael K.',
    role: 'VP Marketing, RiseTech Corp',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop',
    type: 'brand',
    content: 'RS Agency transformed our SaaS launch campaign. Rahul matched us with 8 hyper-targeted tech influencers, driving 4.5M organic Reels views. Cost Per Acquisition plummeted by 38% in 3 weeks!',
    rating: 5,
    metric: '38% Lower CAC'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Fashion & Lifestyle Creator',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop',
    type: 'creator',
    content: 'Working with RS Agency under Rahul Kumar has been an absolute game changer. Payments are lightning-fast, brand matching is super accurate, and campaign briefs are crystal clear.',
    rating: 5,
    metric: '$12K+ Revenue / Month'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    influencerName: 'Aria Sterling',
    influencerHandle: 'aria.sterling',
    influencerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&fit=crop',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&h=800&fit=crop',
    likes: '48.2K',
    comments: '1,240',
    caption: 'Embracing summer lines with @zara, keeping it minimal and comfortable. ✨ #SummerLook #OOTD #ad',
    category: 'Fashion & Lifestyle'
  },
  {
    id: 'post-2',
    influencerName: 'Leo Thorne',
    influencerHandle: 'leo.tech',
    influencerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop',
    mediaType: 'video',
    mediaUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&h=800&fit=crop',
    likes: '115K',
    comments: '4,510',
    caption: 'Unboxing the ultimate gaming desk upgrade from @razer! Is this the cleanest setup of 2026? Tech and aesthetics combined. 🎮 #Desksetup #GamingLife #RazerPartner',
    category: 'Tech & Gaming'
  },
  {
    id: 'post-3',
    influencerName: 'Elena Rostova',
    influencerHandle: 'elena.rostyle',
    influencerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&h=800&fit=crop',
    likes: '35.4K',
    comments: '890',
    caption: 'Golden hour moments powered by @aloyoga, keeping the alignment inside and out. 🧘‍♀️☀ #Activewear #Sponsorship #AloYoga',
    category: 'Lifestyle & Wellness'
  }
];
