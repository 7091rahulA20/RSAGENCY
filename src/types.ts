export interface Influencer {
  id: string;
  name: string;
  handle: string;
  category: 'lifestyle' | 'fashion' | 'tech' | 'gaming' | 'comedy' | 'business' | 'entertainment';
  followers: string;
  followersCount: number; // For internal ordering if needed
  engagement: string;
  image: string;
  platforms: ('instagram' | 'tiktok' | 'youtube' | 'twitch')[];
  featured: boolean;
  brands: string[];
}

export interface Service {
  id: string;
  title: string;
  type: 'brand' | 'creator';
  icon: string;
  description: string;
  listItems: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  type: 'brand' | 'creator';
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
