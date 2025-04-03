'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">OA2</h3>
            <p className="text-gray-600 mb-4">Empowering businesses with cutting-edge software solutions.</p>
            <div className="flex space-x-4">
              {[
                { icon: 'facebook', href: '#' },
                { icon: 'twitter', href: '#' },
                { icon: 'linkedin', href: '#' },
                { icon: 'github', href: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.icon}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">AI Solutions</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Cloud Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">📧 oa2systems@gmail.com</li>
              <li className="text-gray-600">📍 Chennai, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} OA2 Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
