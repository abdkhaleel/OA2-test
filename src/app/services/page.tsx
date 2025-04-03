'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  // Change the type from null to string | null
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 'software',
      title: 'Custom Software Development',
      icon: '💻',
      description: 'We design and develop scalable, secure, and high-performance software solutions customized for your business.',
      features: [
        'Tailored solutions for specific business needs',
        'Scalable architecture for future growth',
        'Secure and reliable applications',
        'Cross-platform compatibility'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'AWS', 'Azure'],
      caseStudy: {
        title: 'Enterprise Resource Planning System',
        description: 'Developed a custom ERP solution for a manufacturing company that increased operational efficiency by 35%.'
      }
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      icon: '🔍',
      description: 'Get expert guidance on software architecture, digital transformation, and technology strategy to stay ahead of the competition.',
      features: [
        'Technology stack assessment and recommendations',
        'Digital transformation roadmap',
        'Legacy system modernization',
        'Cloud migration strategies'
      ],
      technologies: ['Cloud Architecture', 'System Integration', 'DevOps', 'Agile Methodology'],
      caseStudy: {
        title: 'Digital Transformation for Retail Chain',
        description: 'Helped a retail chain modernize their IT infrastructure, resulting in 40% cost reduction and improved customer experience.'
      }
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning Solutions',
      icon: '🤖',
      description: 'Harness the power of AI to automate tasks, enhance decision-making, and gain valuable insights from data.',
      features: [
        'Predictive analytics models',
        'Natural language processing',
        'Computer vision solutions',
        'Recommendation systems'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Computer Vision'],
      caseStudy: {
        title: 'Predictive Maintenance System',
        description: 'Built an AI-powered predictive maintenance system for a manufacturing plant that reduced downtime by 28%.'
      }
    },
    {
      id: 'ux',
      title: 'UI/UX Design & Development',
      icon: '🎨',
      description: 'We create user-friendly, visually stunning, and intuitive interfaces to enhance customer engagement and satisfaction.',
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Responsive design implementation',
        'Usability testing'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'HTML/CSS', 'React', 'Vue.js'],
      caseStudy: {
        title: 'E-commerce Platform Redesign',
        description: 'Redesigned the user interface for an e-commerce platform, resulting in a 45% increase in conversion rate.'
      }
    },
    {
      id: 'support',
      title: 'Maintenance & Support',
      icon: '🛠️',
      description: 'We offer continuous monitoring, updates, and support to ensure your applications remain secure, functional, and up to date.',
      features: [
        '24/7 monitoring and support',
        'Regular security updates',
        'Performance optimization',
        'Bug fixes and enhancements'
      ],
      technologies: ['DevOps', 'CI/CD', 'Monitoring Tools', 'Security Testing'],
      caseStudy: {
        title: 'Healthcare Application Support',
        description: 'Provided ongoing maintenance for a healthcare application, ensuring 99.9% uptime and HIPAA compliance.'
      }
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8"><br/>
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-blue-600 rounded-2xl shadow-xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-yellow-300"></div>
            <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-indigo-300"></div>
            <div className="absolute bottom-10 left-1/3 w-30 h-30 rounded-full bg-blue-300"></div>
          </div>
          
          <div className="relative py-16 px-8 text-center z-10">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our <span className="text-yellow-300">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              At <span className="font-semibold">OA2</span>, we provide cutting-edge software solutions 
              tailored to meet your business needs and drive digital transformation.
            </motion.p>
          </div>
        </div>

        {/* Service Categories Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className={`px-4 py-3 rounded-full font-medium transition-all ${
                  activeService === service.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -3 }}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Services Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          ref={ref}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                activeService === service.id ? 'ring-2 ring-blue-500 transform scale-105' : 'hover:shadow-lg'
              }`}
              variants={fadeIn}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-blue-600">{service.title}</h2>
                </div>
                <p className="text-gray-700 mb-4">{service.description}</p>
                
                {/* Expandable content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeService === service.id ? 'auto' : 0,
                    opacity: activeService === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-2">Key Features</h3>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="font-semibold text-gray-800 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg mt-4">
                      <h3 className="font-semibold text-gray-800 mb-1">Case Study: {service.caseStudy.title}</h3>
                      <p className="text-sm text-gray-600">{service.caseStudy.description}</p>
                    </div>
                  </div>
                </motion.div>
                
                <button
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  {activeService === service.id ? 'Show Less' : 'Learn More'}
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform ${activeService === service.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Development Process</h2>
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform -translate-x-1/2"></div>
            
            {[
              { 
                title: 'Discovery & Planning', 
                description: 'We start by understanding your business needs, goals, and requirements to create a detailed project plan.',
                icon: '🔍'
              },
              { 
                title: 'Design & Prototyping', 
                description: 'Our designers create wireframes and interactive prototypes to visualize the solution before development begins.',
                icon: '✏️'
              },
              { 
                title: 'Development', 
                description: 'Our experienced developers build your solution using the latest technologies and best practices.',
                icon: '👨‍💻'
              },
              { 
                title: 'Testing & QA', 
                description: 'Rigorous testing ensures your solution is bug-free, secure, and performs optimally.',
                icon: '🧪'
              },
              { 
                title: 'Deployment', 
                description: 'We handle the deployment process to ensure a smooth transition to production.',
                icon: '🚀'
              },
              { 
                title: 'Support & Maintenance', 
                description: 'Our team provides ongoing support and maintenance to keep your solution running smoothly.',
                icon: '🛠️'
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className={`relative md:flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (index % 2 === 0 ? -50 : 50) }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3 justify-start md:justify-end">
                      <span className="text-3xl mr-2 md:order-2">{step.icon}</span>
                      <h3 className={`text-xl font-bold text-blue-600 md:order-1 ${index % 2 === 0 ? 'md:mr-2' : 'md:ml-0'}`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty div for layout on mobile */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Technologies Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Technologies We Work With</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Frontend', icon: '🖥️', techs: ['React', 'Angular', 'Vue.js', 'Next.js', 'HTML5/CSS3', 'JavaScript/TypeScript'] },
              { name: 'Backend', icon: '⚙️', techs: ['Node.js', 'Python', 'Java', '.NET', 'PHP', 'Ruby on Rails'] },
              { name: 'Mobile', icon: '📱', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'] },
              { name: 'Database', icon: '🗄️', techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Oracle'] },
              { name: 'Cloud', icon: '☁️', techs: ['AWS', 'Azure', 'Google Cloud', 'Heroku', 'DigitalOcean'] },
              { name: 'DevOps', icon: '🔄', techs: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CircleCI'] },
              { name: 'AI/ML', icon: '🧠', techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Computer Vision'] },
              { name: 'Tools', icon: '🔧', techs: ['Git', 'Jira', 'Figma', 'Adobe XD', 'Postman', 'VS Code'] }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                </div>
                <ul className="space-y-1">
                  {category.techs.map((tech, i) => (
                    <li key={i} className="text-gray-600 text-sm">
                      • {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonials Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "OA2 delivered our project on time and exceeded our expectations. Their team was professional, responsive, and truly understood our business needs.",
                author: "Sarah Johnson",
                position: "CTO, TechCorp",
                image: "/placeholder-avatar.jpg"
              },
              {
                quote: "Working with OA2 was a game-changer for our startup. Their AI solution helped us automate processes and scale our operations efficiently.",
                author: "Michael Chen",
                position: "Founder, InnovateTech",
                image: "/placeholder-avatar.jpg"
              },
              {
                quote: "The UI/UX redesign by OA2 transformed our application. User engagement increased by 40% within the first month after launch.",
                author: "Emily Rodriguez",
                position: "Product Manager, DesignHub",
                image: "/placeholder-avatar.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                transition={{ duration: 0.3, delay: 0.2 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -top-4 -left-4 text-5xl text-blue-500 opacity-20">"</div>
                <div className="relative z-10">
                  <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                      {/* Replace with actual images */}
                      <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-500">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-20 bg-blue-600 rounded-2xl shadow-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition-all">
              Contact Us
            </Link>
            <Link href="/about" className="px-8 py-3 bg-transparent text-white border border-white font-semibold rounded-lg hover:bg-white/10 transition-all">
              Learn More About Us
            </Link>
          </div>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does it typically take to complete a project?",
                answer: "Project timelines vary based on complexity and requirements. A simple web application might take 4-8 weeks, while more complex enterprise solutions can take 3-6 months or more. We'll provide a detailed timeline during the planning phase."
              },
              {
                question: "Do you offer ongoing maintenance after project completion?",
                answer: "Yes, we offer flexible maintenance packages to ensure your software remains secure, up-to-date, and functioning optimally. Our support team is available to address any issues and implement enhancements as needed."
              },
              {
                question: "How do you handle project pricing?",
                answer: "We offer both fixed-price and time-and-materials pricing models depending on project requirements. After an initial consultation, we'll recommend the most suitable approach and provide transparent cost estimates."
              },
              {
                question: "Can you work with our existing technology stack?",
                answer: "Absolutely. Our team is experienced with a wide range of technologies and can adapt to your existing stack. We can also recommend improvements or alternatives if beneficial for your project's success."
              },
              {
                question: "How do you ensure the security of our data and applications?",
                answer: "Security is a top priority in all our projects. We implement industry best practices, conduct regular security audits, use encryption for sensitive data, and follow secure coding standards to protect your applications and data."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          className="mt-20 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p>© {new Date().getFullYear()} OA2 Technologies. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
