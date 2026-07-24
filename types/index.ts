export interface Skill {
  name: string;
  category: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologyStack: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  github: string;
  liveDemo: string;
  caseStudy: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}
