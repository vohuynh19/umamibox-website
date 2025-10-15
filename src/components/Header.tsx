"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeaderProps {
  messages: {
    logo: string;
    nav: {
      story: string;
      rewards: string;
      faq: string;
    };
    cta: string;
    language: string;
  };
  currentLocale: string;
  onLanguageChange: (locale: string) => void;
}

export default function Header({
  messages,
  currentLocale,
  onLanguageChange,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: messages.nav.story, href: "story" },
    { label: messages.nav.rewards, href: "rewards" },
    { label: messages.nav.faq, href: "faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Image
              src="/logo.png"
              alt={messages.logo}
              width={40}
              height={40}
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
            <span
              className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {messages.logo}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-orange-500 ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <select
                value={currentLocale}
                onChange={(e) => onLanguageChange(e.target.value)}
                className={`text-sm font-medium bg-transparent border border-gray-300 rounded-md px-3 py-1 transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-700 border-gray-300"
                    : "text-white border-white/30"
                }`}
              >
                <option value="en">EN</option>
                <option value="vi">VI</option>
              </select>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("community")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 shadow-lg"
            >
              {messages.cta}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}

            <div className="border-t border-gray-200 pt-4 space-y-4">
              {/* Mobile Language Switcher */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {messages.language}
                </label>
                <select
                  value={currentLocale}
                  onChange={(e) => onLanguageChange(e.target.value)}
                  className="w-full text-sm border border-gray-300 rounded-md px-3 py-2 text-gray-700"
                >
                  <option value="en">English</option>
                  <option value="vi">Tiếng Việt</option>
                </select>
              </div>

              {/* Mobile CTA Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("community")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg"
              >
                {messages.cta}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}