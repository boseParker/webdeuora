import { Service } from './types';

export const services: Service[] = [
  {
    title: "Web Platforms",
    description: "High-performance web applications built for scale. We leverage Next.js and Tailwind to deliver pixel-perfect results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    category: "FRONTEND",
    tags: ["React", "TypeScript", "GSAP"]
  },
  {
    title: "Software Engineering",
    description: "Robust backend architectures and microservices. We build the engine that powers your business logic.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    category: "BACKEND",
    tags: ["Go", "Node.js", "AWS"]
  },
  {
    title: "SaaS Development",
    description: "Complete multi-tenant SaaS ecosystems with subscription management, auth, and analytics integration.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    category: "PRODUCT",
    tags: ["Stripe", "Auth0", "Redis"]
  },
  {
    title: "SEO & Growth",
    description: "Data-driven optimization to ensure your brand reaches the right audience with maximum visibility.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    category: "MARKETING",
    tags: ["Core Web Vitals", "Analytics"]
  }
];
