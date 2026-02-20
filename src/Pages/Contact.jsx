// components/ContactSection.jsx

import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          I'm currently open to new opportunities and collaborations. Feel free to send me a message!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Form */}
          <form 
            action="https://formspree.io/f/YOUR_UNIQUE_CODE" // IMPORTANT: Replace with your Formspree endpoint
            method="POST"
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-left"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Right Side: Contact Info & Links */}
          <div className="text-left space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Prefer to reach out directly? Here's how you can find me.
            </p>
            <div className="space-y-4">
              <a href="mailto:shijanpias3@gmail.com" className="flex items-center space-x-3 text-lg text-gray-700 dark:text-gray-200 hover:text-teal-500">
                <FaEnvelope />
                <span>shijanpias3@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/shijan-pias-222b39315/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg text-gray-700 dark:text-gray-200 hover:text-teal-500">
                <FaLinkedin />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/Shijan-Pias" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg text-gray-700 dark:text-gray-200 hover:text-teal-500">
                <FaGithub />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;