// app/our-works/page.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; 
import { Project } from '@/data/projects.data';
import { projectsData } from "@/data/projectsData";

export default function OurWorksPage() {
  const pageTitleRef = useRef(null);
  const projectsGridRef = useRef(null);

  const isTitleInView = useInView(pageTitleRef, { once: true, amount: 0.5 });
  const isGridInView = useInView(projectsGridRef, { once: true, amount: 0.1 }); // Trigger sooner for grid

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ // Custom function for staggered delay
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger delay based on index
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gray-50">
      {/* Page Title Section */}
      <section ref={pageTitleRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate={isTitleInView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Our Sample <span className="text-blue-600">Works</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Explore some of the personal projects and sample applications we've built. These showcase our skills in various technologies and our passion for creating effective solutions.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid Section */}
      <section ref={projectsGridRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {projectsData.length === 0 ? (
            <motion.div
              className="text-center text-gray-500 text-xl"
              initial="hidden"
              animate={isGridInView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              More projects coming soon!
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-2xl"
                  custom={index} // Pass index to variants for staggered delay
                  initial="hidden"
                  animate={isGridInView ? 'visible' : 'hidden'}
                  variants={cardVariants}
                  whileHover={{ y: -8 }} // Lift effect on hover
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover" // Adjust as needed: cover, contain
                      className="transition-transform duration-300 group-hover:scale-105" // Optional zoom effect
                    />
                    {/* Optional: Overlay or Category Badge */}
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="mt-auto flex justify-start gap-4 pt-4 border-t border-gray-100">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition transform hover:-translate-y-0.5"
                        >
                          View Live
                          <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                      )}
                      {project.repoUrl && project.repoUrl !== '#' && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition transform hover:-translate-y-0.5"
                        >
                          View Code
                          {/* Optional: Add a GitHub icon here */}
                        </a>
                      )}
                       {/* Placeholder if no links */}
                       {(!project.liveUrl || project.liveUrl === '#') && (!project.repoUrl || project.repoUrl === '#') && (
                         <span className="text-sm text-gray-400 italic">No public links available</span>
                       )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

        {/* Optional: Add a CTA section like in the HomePage if desired */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white"> ... </section> */}

    </div>
  );
}