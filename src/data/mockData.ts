import { Influencer, Service, Testimonial, ProcessStep, InstagramPost } from '../types';

export const SERVICES: Service[] = [
  // Brand Services
  {
    id: 'reels-promotion',
    title: 'Instagram Reels Promotion',
    type: 'brand',
    icon: 'Clapperboard',
    description: 'Launch viral Reels campaigns that slide directly into your target audience’s feeds through curated creators who specialize in organic integrations and algorithmic reach.',
    listItems: [
      'Custom viral hooks and audios',
      'Creator brief & script development',
      'Guaranteed organic views milestones',
      'Call To Action (CTA) link mapping'
    ]
  },
  {
    id: 'story-promotion',
    title: 'Interactive Story Campaigns',
    type: 'brand',
    icon: 'Layers',
    description: 'Drive direct conversions and immediate traffic spikes with highly interactive Instagram story sequences, swipe-ups, links, and custom sticker triggers.',
    listItems: [
      'Interactive polls & QA tickers',
      'Direct redirection link tracking',
      'Multi-day drip stories sequences',
      'Flash sale promotion templates'
    ]
  },
  {
    id: 'ugc-videos',
    title: 'UGC Video Creation',
    type: 'brand',
    icon: 'Video',
    description: 'Acquire high-performing, raw, authentic User-Generated Content (UGC) scripts and video assets designed to maximize ad spend efficiency and unlock Facebook/TikTok Ad performance.',
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
    description: 'Infect internet culture with contextually relevant meme formats across high-traffic community hubs, popular meme handles, and trendy creator pages.',
    listItems: [
      'Trend-jacking & rapid response content',
      'Natural, non-corporate humor styling',
      'Simultaneous multi-page blast schedules',
      'Exceptional shares-to-views ratio metrics'
    ]
  },
  {
    id: 'app-promotion',
    title: 'App & Tech Download Boosts',
    type: 'brand',
    icon: 'Smartphone',
    description: 'Propel your App Store or Play Store rank using interactive tech demonstrations, real-world utility explanations, and high-converting app download codes.',
    listItems: [
      'Tech review and UI walkthrough clips',
      'Affiliate link installation incentives',
      'TikTok and Instagram App Store highlights',
      'Conversion tracking pixel integrations'
    ]
  },
  {
    id: 'product-launch',
    title: 'Product Launch & Unboxing',
    type: 'brand',
    icon: 'PackageOpen',
    description: 'Create multi-tiered launch day hype with synchronized unboxing experiences and early-bird promotional access that build massive waitlists.',
    listItems: [
      'Premium custom PR packing design tips',
      'Simultaneous launch day content blasting',
      'High-end macro close-up product captures',
      'Unique promo code distribution lists'
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
    id: 'paid-collaborations',
    title: 'Paid Brand Collaborations',
    type: 'creator',
    icon: 'Sparkles',
    description: 'Connect directly with leading agencies and brands looking for creative influencer campaigns across multiple platforms.',
    listItems: [
      'Pre-negotiated contract templates',
      'Timely content feedback & reviews',
      'Faster 15-day payouts assurance',
      'Streamlined communication dashboards'
    ]
  },
  {
    id: 'creator-growth',
    title: 'Creator Brand Growth',
    type: 'creator',
    icon: 'TrendingUp',
    description: 'Optimize your media accounts for monetization. Build media kits, polish bio architectures, and sharpen content funnels for maximum appeal to premium advertisers.',
    listItems: [
      'Media Kit design & regular syncs',
      'Analytical review of reach opportunities',
      'SEO and bio structure optimizations',
      'Engagement recovery and build guides'
    ]
  },
  {
    id: 'brand-matching',
    title: 'Precise Brand Matching',
    type: 'creator',
    icon: 'Cpu',
    description: 'No more generic spam. We align your creative style with brands whose missions resonate with your audience, ensuring high campaign engagement.',
    listItems: [
      'Tailored matching algorithm parameters',
      'Aesthetic and values check filtering',
      'Niche-focused product placement',
      'Sustainable creative freedom guarantees'
    ]
  },
  {
    id: 'campaign-management',
    title: 'Turnkey Campaign Management',
    type: 'creator',
    icon: 'Briefcase',
    description: 'Focus entirely on content. Our logistics and accounts team will handle emails, contracts, briefs, payments, and revisions directly with the brand clients.',
    listItems: [
      'Dedicated manager assigned to you',
      'Legal drafting and intellectual property safety',
      'Symptom-free reminder systems',
      'Post-campaign analytical reviews'
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
  },
  {
    id: 'inf-5',
    name: 'Marcus "Giggle" Vance',
    handle: '@marcus.giggles',
    category: 'comedy',
    followers: '1.8M',
    followersCount: 1800000,
    engagement: '10.5%',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=400&fit=crop',
    platforms: ['tiktok', 'instagram'],
    featured: false,
    brands: ['Duolingo', 'Doritos', 'SeatGeek']
  },
  {
    id: 'inf-6',
    name: 'Sarah Chen',
    handle: '@sarah.finance',
    category: 'business',
    followers: '450K',
    followersCount: 450000,
    engagement: '6.9%',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop',
    platforms: ['instagram', 'youtube'],
    featured: true,
    brands: ['Wise', 'Shopify', 'Webull']
  },
  {
    id: 'inf-7',
    name: 'Julian Montgomery',
    handle: '@julian.vibes',
    category: 'entertainment',
    followers: '1.1M',
    followersCount: 1100000,
    engagement: '8.1%',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=400&fit=crop',
    platforms: ['instagram', 'tiktok'],
    featured: false,
    brands: ['Spotify', 'PrimeVideo', 'Disney+']
  },
  {
    id: 'inf-8',
    name: 'Clara Del Sol',
    handle: '@claradelsol',
    category: 'lifestyle',
    followers: '980K',
    followersCount: 980000,
    engagement: '8.8%',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&h=400&fit=crop',
    platforms: ['instagram', 'tiktok'],
    featured: true,
    brands: ['Airbnb', 'EsteeLauder', 'AloYoga']
  }
];

export const TIMELINE_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Brand Contact & Onboarding',
    subtitle: 'Step 01 / Discovery',
    description: 'Brands describe target goals, target budget bounds, platform priorities, and performance indicators via our onboarding portal.',
    icon: 'MessageSquareShare'
  },
  {
    stepNumber: 2,
    title: 'Strategy & Concept Planning',
    subtitle: 'Step 02 / Creative Design',
    description: 'We outline content hooks, viral audio setups, meme-jacking structures, and custom-tailor unique visual frameworks for conversion.',
    icon: 'Compass'
  },
  {
    stepNumber: 3,
    title: 'AI-Enhanced Creator Matching',
    subtitle: 'Step 03 / Creator Curation',
    description: 'We filter and match your brand goals against verified performance tiers from our network based on geographic reach and past engagement statistics.',
    icon: 'Sparkles'
  },
  {
    stepNumber: 4,
    title: 'Optimized Content Creation',
    subtitle: 'Step 04 / Quality Control',
    description: 'Creators receive materials, craft raw drafts, and submit to our media reviewers for structural checking and editing before approval.',
    icon: 'VideoIcon'
  },
  {
    stepNumber: 5,
    title: 'Coordinated Campaign Launch',
    subtitle: 'Step 05 / Activation',
    description: 'We synchronize times, tag distributions, story link structures, and blast the posts across targeted communities to lock immediate viral reach.',
    icon: 'Rocket'
  },
  {
    stepNumber: 6,
    title: 'Results & Analytics Tracking',
    subtitle: 'Step 06 / Optimization Reports',
    description: 'Access complete live analytics views, ROI assessments, feedback logs, absolute views counts, and follower acquisition details.',
    icon: 'LineChart'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Michael K.',
    role: 'VP Marketing, RiseTech Corp',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop',
    type: 'brand',
    content: 'RS Agency transformed our SaaS launch campaign. They matched us with 8 hyper-targeted tech influencers, driving 4.5M organic Reels views. Cost Per Acquisition plummeted by 38% in 3 weeks!',
    rating: 5,
    metric: '38% Lower CAC'
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Fashion & Lifestyle Creator',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop',
    type: 'creator',
    content: 'I joined RSAgency last year, and they instantly aligned me with premium brands like Alo Yoga and Sephora. Payments are lightning-fast, contracts are completely fair, and they truly respect my creative freedom.',
    rating: 5,
    metric: '$12K+ Revenue / Month'
  },
  {
    id: 'test-3',
    name: 'Sarah Jenkins',
    role: 'Head of Growth, NeutraSkin',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop',
    type: 'brand',
    content: 'Meme marketing via RSAgency changed our perception of influencer campaigns. Instant culture integration, massive shares, and solid affiliate sales. Will definitely keep them on retainer.',
    rating: 5,
    metric: '12M+ Reach Hits'
  },
  {
    id: 'test-4',
    name: 'Xavier Jenkins',
    role: 'Gaming Twitch Streamer',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=150&h=150&fit=crop',
    type: 'creator',
    content: 'Being managed by RSAgency lets me focus 100% on streaming. They negotiate top sponsor dollars with massive tech brands and gaming publishers. The account team handles all the exhausting emails for me.',
    rating: 5,
    metric: 'Exclusive Brand Deals'
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
    caption: 'unboxing the ultimate gaming desk upgrade from @razer! Is this the cleanest setup of 2026? Tech and aesthetics combined. 🎮 #Desksetup #GamingLife #RazerPartner',
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
