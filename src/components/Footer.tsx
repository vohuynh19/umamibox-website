"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface FooterProps {
  messages: {
    description: string;
    newsletter: {
      title: string;
      placeholder: string;
      subscribe: string;
    };
    quickLinks: {
      title: string;
      links: Array<{ text: string; href: string }>;
    };
    contact: {
      title: string;
      email: string;
      address: string;
    };
    language: string;
    copyright: string;
    legal: {
      privacy: string;
      terms: string;
      cookies: string;
    };
  };
  currentLocale: string;
  onLanguageChange: (locale: string) => void;
}

export default function Footer({
  messages,
  currentLocale,
  onLanguageChange,
}: FooterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  console.log("Footer", messages);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer ref={ref} className="bg-gray-900 text-white py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="UmamiBox Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <h3 className="text-2xl font-bold">UmamiBox</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {messages.description}
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">
                {messages.newsletter.title}
              </h4>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={messages.newsletter.placeholder}
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold transition-colors duration-300"
                >
                  {messages.newsletter.subscribe}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">
              {messages.quickLinks.title}
            </h4>
            <ul className="space-y-2">
              {messages.quickLinks.links.map((link, index: number) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">
              {messages.contact.title}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300">{messages.contact.email}</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">
                  {messages.contact.address}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Language Switcher */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-6 mb-4 sm:mb-0">
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.897 1.387 2.048 1.387 3.345s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.897-1.387-2.048-1.387-3.345s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.897 1.387 2.048 1.387 3.345s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">
                {messages.language}:
              </span>
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-3 py-1 rounded text-sm transition-colors duration-300 ${
                  currentLocale === "en"
                    ? "bg-orange-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange("vi")}
                className={`px-3 py-1 rounded text-sm transition-colors duration-300 ${
                  currentLocale === "vi"
                    ? "bg-orange-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                VI
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center sm:text-right">
            <p>{messages.copyright}</p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 mt-2">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                {messages.legal.privacy}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                {messages.legal.terms}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                {messages.legal.cookies}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
