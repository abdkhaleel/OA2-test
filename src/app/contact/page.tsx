'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import path from 'path';

export default function ContactPage() {
  const contactFormRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeMethod, setActiveMethod] = useState('form');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Send us an email and we'll get back to you within 24 hours.",
      action: "oa2systems@gmail.com",
      actionType: "email"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with our team in real-time during business hours.",
      action: "#chat",
      actionType: "chat"
    },
    {
      icon: "📱",
      title: "Social Media",
      description: "Connect with us on our social media platforms.",
      action: "#social",
      actionType: "social"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/oa2-team/" },
    { name: "Twitter", icon: "twitter", url: "https://x.com/oa2_team" },
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/profile.php?id=61574660747386&mibextid=ZbWKwL" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/oa2in?igsh=MW45Ynh5bmducmI0dw==" }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8"><br />
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-blue-600 rounded-2xl shadow-xl mb-12">
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
              Get in Touch with <span className="text-yellow-300">OA2</span>
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We'd love to hear from you! Whether you have a project in mind, need assistance,
              or just want to say hello, feel free to reach out.
            </motion.p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Contact Methods Tabs */}
          <div className="flex border-b border-gray-200" ref={contactFormRef}>
            <button
              onClick={() => setActiveMethod('form')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeMethod === 'form'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-blue-500 hover:bg-gray-50'
                }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveMethod('methods')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeMethod === 'methods'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-blue-500 hover:bg-gray-50'
                }`}
            >
              Other Ways to Connect
            </button>
          </div>

          <div className="p-6 md:p-8">
            {activeMethod === 'form' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                id='contact-form'

              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

                {submitted ? (
                  <motion.div
                    className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-600">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-300"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none placeholder-gray-300"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        I agree to the <Link href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</Link>
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full md:w-auto px-8 py-3 text-white font-medium rounded-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting
                          ? 'bg-blue-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                          }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            )}

            {activeMethod === 'methods' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Ways to Connect</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-4xl mb-4">{method.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{method.title}</h3>
                      <p className="text-gray-600 mb-4">{method.description}</p>

                      {method.actionType === 'email' && (
                        <a
                          href={`mailto:${method.action}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800"
                        >
                          {method.action}
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      )}

                      {method.actionType === 'chat' && (
                        <button
                          className="inline-flex items-center text-blue-600 hover:text-blue-800"
                          onClick={() => alert('Live chat feature coming soon!')}
                        >
                          Start Chat
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                          </svg>
                        </button>
                      )}

                      {method.actionType === 'social' && (
                        <div className="flex space-x-3">
                          {socialLinks.map((social) => (
                            <a
                              key={social.name}
                              href={social.url}
                              className="text-gray-500 hover:text-blue-600 transition-colors"
                              title={social.name}
                            >
                              {social.icon === 'linkedin' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                              )}
                              {social.icon === 'twitter' && (
                                <svg className="w-5 h-5" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M714.658 582.854L1182.46 0H1075.84L663.232 511.812L324.215 0H0.132812L497.557 714.257L0.132812 1227H106.745L545.603 683.579L901.873 1227H1226.95L714.395 582.854H714.658Z" />
                                </svg>
                              )}
                              {social.icon === 'instagram' && (
                                <svg className='w-5 h-5 bi-bi instagram' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                              </svg>
                              )}
                              {social.icon === 'facebook' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                              )}
                              
                            </a>
                          ))}
                          <button
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            onClick={() => alert('More social links coming soon!')}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                            </svg>
                          </button>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Business Hours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Weekdays</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Weekends</h4>
                      <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM IST</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    * Response times may vary during holidays and weekends.
                  </p>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      {
                        question: "What services does OA2 offer?",
                        answer: "OA2 offers a wide range of software development services including web development, mobile app development, AI solutions, and enterprise software."
                      },
                      {
                        question: "How quickly can I expect a response?",
                        answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, please indicate so in your message subject."
                      },
                      {
                        question: "Do you offer support for existing projects?",
                        answer: "Yes, we provide maintenance and support services for both projects we've developed and existing systems that need improvements or fixes."
                      }
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                      >
                        <h4 className="text-lg font-medium text-gray-800 mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Map or Location Section */}
        <motion.div
          className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
            <p className="text-gray-600 mb-6">
              OA2 Technologies is based in Chennai, India. While we primarily work remotely,
              we're always open to in-person meetings by appointment.
            </p>

            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100">
              {/* Replace with actual map or image */}
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">
                  Interactive map will be displayed here.<br />
                  <button
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    Open in Google Maps
                  </button>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's turn your ideas into reality. Contact us today to discuss your project requirements and get a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:oa2systems@gmail.com"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all hover:shadow-xl"
            >
              Email Us Now
            </a>
            <button
              onClick={() => {
                setActiveMethod('form'); setTimeout(() => {
                  contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
                }, 0);
              }}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg border border-blue-200 hover:bg-blue-50 transition-all"
            >
              Use Contact Form
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        {/* <motion.div
          className="mt-16 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>© {new Date().getFullYear()} OA2 Technologies. All rights reserved.</p>
        </motion.div> */}
      </motion.div>
    </div>
  );
}