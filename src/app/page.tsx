'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: 'Web Development',
      icon: '🌐',
      description: 'Custom web applications using modern frameworks like React, Next.js, and Node.js.'
    },
    {
      title: 'Mobile App Development',
      icon: '📱',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      description: 'Intelligent solutions using cutting-edge AI and machine learning technologies.'
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      description: 'Scalable cloud infrastructure and streamlined development workflows.'
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full bg-white"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Empowering Businesses with <span className="text-yellow-300">Cutting-Edge</span> Software Solutions
              </h1>
              
              <p className="mt-6 text-xl text-blue-100">
                At <span className="font-semibold">OA2</span>, we build scalable, high-performance software tailored to your needs. From web apps to AI solutions, we help you innovate and grow.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition transform hover:-translate-y-1">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-3 bg-transparent text-white border border-white font-semibold rounded-lg hover:bg-white/10 transition transform hover:-translate-y-1">
                  Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isHeroInView ? 1 : 0, scale: isHeroInView ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-6">💻</div>
                  <h3 className="text-2xl font-bold mb-2">Innovative Software Solutions</h3>
                  <p className="text-blue-100">Transforming ideas into powerful digital experiences</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section ref={featuresRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isFeaturesInView ? 1 : 0, y: isFeaturesInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">Why Choose <span className="text-blue-600">OA2</span>?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💡',
                title: 'Innovative Solutions',
                description: 'We leverage the latest technologies to build future-ready software that keeps you ahead of the competition.'
              },
              {
                icon: '🔧',
                title: 'Custom Development',
                description: 'Every business is unique, and so are our solutions. We tailor our approach to meet your specific requirements.'
              },
              {
                icon: '🛡️',
                title: 'Scalable & Secure',
                description: 'Performance, security, and scalability are at the core of our development process, ensuring robust solutions.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isFeaturesInView ? 1 : 0, y: isFeaturesInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section ref={servicesRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isServicesInView ? 1 : 0, y: isServicesInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">Our Core Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isServicesInView ? 1 : 0, y: isServicesInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/services" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTestimonialsInView ? 1 : 0, y: isTestimonialsInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">Trusted by Businesses Worldwide</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <motion.div
            className="bg-blue-50 rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTestimonialsInView ? 1 : 0, y: isTestimonialsInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-xl italic text-gray-700 mb-6">
                "OA2 helped us scale our operations with a robust software solution. Their team's expertise and dedication exceeded our expectations!"
              </p>
              <div className="font-semibold text-gray-800">Sarah Johnson</div>
              <div className="text-gray-500">CTO, TechCorp</div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our software solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition transform hover:-translate-y-1">
                Contact Us
              </Link>
              <Link href="/services" className="px-8 py-3 bg-transparent text-white border border-white font-semibold rounded-lg hover:bg-white/10 transition transform hover:-translate-y-1">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-blue-50 rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">oa2systems@gmail.com</p>
              <a 
                href="mailto:oa2systems@gmail.com"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
              >
                Send Email
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
            
            <motion.div
              className="bg-blue-50 rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Chennai, India</p>
              <a 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
              >
                View on Map
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
