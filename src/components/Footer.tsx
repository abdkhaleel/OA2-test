'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: 'facebook',
      href: 'https://www.facebook.com/profile.php?id=61574660747386&mibextid=ZbWKwL',
      svg:
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
          <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
        </svg>
    },
    {
      icon: 'Instagram',
      href: 'https://www.linkedin.com/in/oa2-team/',
      svg:
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
        </svg>
    },
    {
      icon: 'linkedIn',
      href: 'https://www.instagram.com/oa2in?igsh=MW45Ynh5bmducmI0dw==',
      svg:
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
        </svg>
    },
  ]
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
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.icon}</span>

                  {social.svg}
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
              <li><Link href="/our-works" className="text-gray-600 hover:text-blue-600 transition-colors">Our Works</Link></li>
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
