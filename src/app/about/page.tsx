'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const founderProfiles = [
    {
      name: "Abdul Khaleel",
      role: "Co-Founder & AI Engineer",
      bio: "Passionate about AI and machine learning with expertise in developing intelligent solutions.",
      image: "/images/khaleel.jpg", // Add founder images to your public folder
      linkedin: "https://www.linkedin.com/in/abdul-khaleel/"
    },
    {
      name: "Aathi Eswar",
      role: "Co-Founder & Software Engineer",
      bio: "Full-stack developer with a knack for creating scalable and efficient software solutions.",
      image: "/images/aathi.jpg", // Add founder images to your public folder
      linkedin: "https://www.linkedin.com/in/aathi-eswar-5ab416229/"
    }
  ];

  return (
    
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8"><br/>
      <motion.section 
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <div className="relative h-64 bg-blue-600 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
          <motion.div 
            className="relative h-full flex items-center justify-center px-8 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">
              About <span className="text-yellow-300">OA2</span>
            </h1>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-yellow-300"></div>
            <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-indigo-300"></div>
            <div className="absolute bottom-10 left-1/3 w-30 h-30 rounded-full bg-blue-300"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-12">
          <motion.p 
            className="text-xl text-gray-700 leading-relaxed"
            variants={fadeIn}
            transition={{ delay: 0.5 }}
          >
            OA2 is a cutting-edge software development company founded by passionate tech enthusiasts.
            We specialize in creating innovative digital solutions that drive business growth and efficiency.
          </motion.p>

          {/* Interactive Tabs */}
          <div className="mt-12">
            <div className="flex flex-wrap border-b border-gray-200">
              {['mission', 'why', 'founders'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium text-sm sm:text-base transition-all duration-200 ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-blue-500'
                  }`}
                >
                  {tab === 'mission' && 'Our Mission'}
                  {tab === 'why' && 'Why Choose Us'}
                  {tab === 'founders' && 'Our Founders'}
                  {/* {tab === 'journey' && 'Our Journey'} */}
                </button>
              ))}
            </div>

            <div className="py-8">
              {activeTab === 'mission' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  <div className="mt-6 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We aim to empower businesses by providing scalable, secure, and user-friendly software solutions.
                      Whether it's web development, mobile applications, or enterprise solutions, we ensure top-notch
                      performance and reliability.
                    </p>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Innovation', 'Quality', 'Partnership'].map((value, index) => (
                      <motion.div 
                        key={value}
                        className="bg-white p-5 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * index }}
                      >
                        <h3 className="text-xl font-semibold text-blue-600">{value}</h3>
                        <p className="mt-2 text-gray-600">
                          {value === 'Innovation' && 'Pushing boundaries with cutting-edge solutions'}
                          {value === 'Quality' && 'Delivering excellence in every line of code'}
                          {value === 'Partnership' && 'Building lasting relationships with clients'}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'why' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900">Why Choose OA2?</h2>
                  <motion.ul 
                    className="mt-6 space-y-4"
                    variants={staggerChildren}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      'Expertise in modern web and mobile technologies',
                      'Tailored solutions to fit your business needs',
                      'Dedicated support and continuous innovation',
                      'Secure and scalable applications'
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        variants={fadeIn}
                        whileHover={{ x: 5 }}
                      >
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-4">
                          ✓
                        </span>
                        <span className="text-lg text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <motion.div 
                    className="mt-8 p-6 bg-indigo-50 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-xl font-semibold text-indigo-700">Our Technology Stack</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'TensorFlow', 'MongoDB', 'PostgreSQL'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-indigo-600 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'founders' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900">Meet Our Founders</h2>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {founderProfiles.map((founder, index) => (
                      <motion.div 
                        key={founder.name}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * index }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="p-6">
                          <div className="flex items-center">
                            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mr-4">
                              {/* Uncomment when you have actual images */}
                              {/* <Image 
                                src={founder.image} 
                                alt={founder.name} 
                                width={80} 
                                height={80} 
                                className="object-cover"
                              /> */}
                              <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-blue-600">
                                {founder.name.charAt(0)}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{founder.name}</h3>
                              <p className="text-blue-600">{founder.role}</p>
                            </div>
                          </div>
                          <p className="mt-4 text-gray-600">{founder.bio}</p>
                          <div className="mt-4">
                            <Link href={founder.linkedin} className="text-blue-600 hover:text-blue-800 flex items-center" target="_blank">
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                              Connect on LinkedIn
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 
              } */}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <motion.div 
          className="bg-gray-50 px-8 py-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-gray-600">
            © {new Date().getFullYear()} OA2. All rights reserved.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}