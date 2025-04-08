'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 md:pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600">
                We collect information you provide directly to us when using our contact form, including:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Respond to your inquiries</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600">
                We do not sell or trade your personal information to outside parties. 
                Your information is only used to respond to your inquiries and improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our Privacy Policy, please contact us through our contact form.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
