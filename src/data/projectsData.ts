import { Project } from "./projects.data";


export const projectsData: Project[] = [
  {
  
    id: 1,
    title: "Image Quality Enhancer",
    description: "A web application that can increase image quality upto 2X, 4X and 8X.",
    imageUrl: "/images/projects/esrgan.jpg", // Replace with your actual image path
    technologies: ["Django", "Python", "Tensorflow", "Pytorch", "Keras"],
    liveUrl: "#", // Replace with actual URL or remove if none
    repoUrl: "https://github.com/abdkhaleel/esrgan-app", // Replace with actual URL or remove if none
    category: "Web App",
  },
  {
    id: 2,
    title: "Image Denoising Model",
    description: "An AI model that removes noise from images using deep learning techniques.",
    imageUrl: "/images/projects/denoise.png", // Replace with your actual image path
    technologies: ["Tensorflow", "Python", "Matplotlib"],
    liveUrl: "#", // Replace with actual URL or remove if none
    repoUrl: "https://github.com/abdkhaleel/Projects/blob/main/NoteBooks/image-denoising-using-nn.ipynb", // Replace with actual URL or remove if none
    category: "AI",
  },  
  {
    id: 3,
    title: "AI-Generated Text Detection",
    description: "A Jupyter Notebook that detects AI-generated text using machine learning techniques and datasets.",
    imageUrl: "#", // Replace with your actual image path
    technologies: ["Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    liveUrl: "#", // Replace with actual URL or remove if none
    repoUrl: "https://github.com/abdkhaleel/Projects/blob/main/NoteBooks/ai-generated-text-detection.ipynb",
    category: "Machine Learning"
  },
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
