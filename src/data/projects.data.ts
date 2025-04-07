// data/projects.data.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string; // Path to your image (e.g., '/images/projects/project1.jpg')
    technologies: string[];
    liveUrl?: string; // Optional link to live demo
    repoUrl?: string; // Optional link to code repository
    category: string; // e.g., 'Web App', 'Mobile App', 'AI', 'Personal'
  }
  
