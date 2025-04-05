'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      action: "oa2system@gmail.com",
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
    { name: "LinkedIn", icon: "linkedin", url: "#linkedin" },
    { name: "Twitter", icon: "twitter", url: "#twitter" },
    { name: "Facebook", icon: "facebook", url: "#facebook" },
    { name: "Instagram", icon: "instagram", url: "#instagram" }
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
                          {socialLinks.slice(0, 3).map((social) => (
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
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                              )}
                              {social.icon === 'facebook' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                              )}
                              {social.icon === 'instagram' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
              href="mailto:oa2system@gmail.com"
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