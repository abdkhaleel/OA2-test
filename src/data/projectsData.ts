import { Project } from "./projects.data";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Image Quality Enhancer",
    description: "A web application that can increase image quality upto 2X, 4X and 8X.",
    imageUrl: "/images/projects/esrgan.jpg",
    technologies: ["Django", "Python", "Tensorflow", "Pytorch", "Keras"],
    liveUrl: "#",
    repoUrl: "https://github.com/abdkhaleel/esrgan-app",
    category: "Web App",
  },
  {
    id: 2,
    title: "Image Denoising Model",
    description: "An AI model that removes noise from images using deep learning techniques.",
    imageUrl: "/images/projects/denoise.png",
    technologies: ["Tensorflow", "Python", "Matplotlib"],
    liveUrl: "#",
    repoUrl: "https://github.com/abdkhaleel/Projects/blob/main/NoteBooks/image-denoising-using-nn.ipynb",
    category: "AI",
  },
  {
    id: 3,
    title: "AI-Generated Text Detection",
    description: "A Jupyter Notebook that detects AI-generated text using machine learning techniques and datasets.",
    imageUrl: "#",
    technologies: ["Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    liveUrl: "#",
    repoUrl: "https://github.com/abdkhaleel/Projects/blob/main/NoteBooks/ai-generated-text-detection.ipynb",
    category: "Machine Learning"
  },
  {
    id: 4,
    title: "Tumor Classification",
    description: "A project for classifying tumors using machine learning techniques.",
    imageUrl: "#",
    technologies: ["Python", "HTML", "Django"],
    liveUrl: "#",
    repoUrl: "https://github.com/abdkhaleel/3-tumor-classification",
    category: "Machine Learning"
  },
];