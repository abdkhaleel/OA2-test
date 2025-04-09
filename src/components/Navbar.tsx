'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenu = (isOpen) => {
    if (isOpen) {
      setIsMobileMenuOpen(true);
      setTimeout(() => setShowContent(true), 150);
    } else {
      setShowContent(false);
      setTimeout(() => setIsMobileMenuOpen(false), 300);
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/our-works', label: 'Our Works' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white text-gray-800 shadow-md py-2'
          : 'bg-black text-white py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              OA2
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? isScrolled ? 'text-blue-600' : 'text-white font-bold'
                    : isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => handleMobileMenu(!isMobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          className={`md:hidden shadow-lg rounded-b-lg mt-2 z-[99] overflow-hidden ${
            isScrolled ? 'bg-white' : 'bg-black'
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: showContent ? 'auto' : 0 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <motion.div 
            className="px-4 pt-2 pb-4 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? isScrolled 
                      ? 'bg-blue-50 text-blue-600'
                      : 'bg-blue-900 text-white'
                    : isScrolled 
                      ? 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                      : 'text-gray-300 hover:bg-blue-900 hover:text-white'
                }`}
                onClick={() => handleMobileMenu(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className={`block px-3 py-2 mt-4 text-center rounded-md text-base font-medium ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => handleMobileMenu(false)}
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}
