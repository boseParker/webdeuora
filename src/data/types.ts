export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  skills: string[];
  bio: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  popular?: boolean;
  features: string[];
  icon: string; // Store icon name as string for "CMS" compatibility
  color: string;
}
