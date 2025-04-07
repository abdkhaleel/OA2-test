import { Project } from "./projects.data";


export const projectsData: Project[] = [
  {
  
    id: 1,
    title: "Image Quality Enhancer",
    description: "A web application that can increase image quality upto 2X, 4X and 8X.",
    imageUrl: "/images/projects/esrgan.jpg", // Replace with your actual image path
    technologies: ["Django", "Python", "Tensorflow", "Pytorch", "Keras"],
    liveUrl: "#", // Replace with actual URL or remove if none
    repoUrl: "#", // Replace with actual URL or remove if none
    category: "Web App",
  },
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description: "A collaborative task management tool designed for small teams, featuring real-time updates.",
  //   imageUrl: "/images/projects/task-manager.jpg", // Replace with your actual image path
  //   technologies: ["React", "Node.js", "Express", "Socket.IO", "PostgreSQL"],
  //   // liveUrl: "#",
  //   repoUrl: "#",
  //   category: "Web App",
  // },
  // {
  //   id: 3,
  //   title: "AI Chatbot Assistant",
  //   description: "An intelligent chatbot using NLP to assist customer support agents by providing quick answers.",
  //   imageUrl: "/images/projects/chatbot.jpg", // Replace with your actual image path
  //   technologies: ["Python", "Flask", "NLTK", "React", "Docker"],
  //   // liveUrl: "#",
  //   // repoUrl: "#",
  //   category: "AI",
  // },
  // {
  //   id: 4,
  //   title: "Personal Portfolio Website",
  //   description: "A sleek and modern personal portfolio site to showcase skills and projects.",
  //   imageUrl: "/images/projects/portfolio.jpg", // Replace with your actual image path
  //   technologies: ["Gatsby", "GraphQL", "Styled Components"],
  //   liveUrl: "#",
  //   // repoUrl: "#",
  //   category: "Personal",
  // },
  // --- Add more projects here following the same structure ---
  // {
  //   id: 5,
  //   title: "...",
  //   description: "...",
  //   imageUrl: "/images/projects/...",
  //   technologies: ["...", "..."],
  //   liveUrl: "#",
  //   repoUrl: "#",
  //   category: "...",
  // },
];
