export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'platform' | 'ecommerce' | 'directory' | 'dashboard' | 'fullstack';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  highlights: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    iconName: string;
    experience: string;
  }[];
}

export interface EducationDetail {
  degree: string;
  institution: string;
  affiliation: string;
  location: string;
  cgpa: string;
  semesters: { sem: string; sgpa: string }[];
  highlights: { subject: string; grade: string; marks: string }[];
}

export interface Influencer {
  id: string;
  name: string;
  handle: string;
  category: 'lifestyle' | 'fashion' | 'tech' | 'gaming' | 'comedy' | 'business' | 'entertainment';
  followers: string;
  followersCount: number;
  engagement: string;
  image: string;
  platforms: ('instagram' | 'tiktok' | 'youtube' | 'twitch')[];
  featured: boolean;
  brands: string[];
}

export interface Service {
  id: string;
  title: string;
  type: 'webdev' | 'brand' | 'creator';
  icon: string;
  description: string;
  listItems: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  type: 'client' | 'brand' | 'creator';
  content: string;
  rating: number;
  metric?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface InstagramPost {
  id: string;
  influencerName: string;
  influencerHandle: string;
  influencerAvatar: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  likes: string;
  comments: string;
  caption: string;
  category: string;
}
