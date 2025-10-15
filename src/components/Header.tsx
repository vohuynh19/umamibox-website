"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 transition-all duration-200 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2"
          type="button"
        >
          <Image
            src="/logo.png"
            alt={messages.logo}
            width={40}
            height={40}
            className="h-9 w-9 rounded-full border border-gray-200 object-cover"
          />
          <span className="text-xl font-semibold text-gray-900 lg:text-2xl">
            {messages.logo}
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-10 lg:flex">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.04 }}
              onClick={() => scrollToSection(item.href)}
              className="text-xs font-semibold uppercase tracking-wide text-gray-600 transition-colors duration-200 hover:text-gray-900"
              type="button"
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <select
            value={currentLocale}
            onChange={(event) => onLanguageChange(event.target.value)}
            className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400"
          >
            <option value="en">EN</option>
            <option value="vi">VI</option>
          </select>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection("rewards")}
            className="rounded-full bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-green-700"
            type="button"
          >
            {messages.cta}
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-md p-2 text-gray-700 transition-colors duration-200 hover:text-gray-900 lg:hidden"
          type="button"
        >
          <svg
            className="h-6 w-6"
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
        className="mx-4 mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg lg:hidden"
      >
        <div className="space-y-4 px-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="block w-full py-2 text-left text-gray-700 transition-colors duration-200 hover:text-gray-900"
              type="button"
            >
              {item.label}
            </button>
          ))}

          <div className="space-y-4 border-t border-gray-200 pt-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                {messages.language}
              </label>
              <select
                value={currentLocale}
                onChange={(event) => onLanguageChange(event.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
              >
                <option value="en">English</option>
                <option value="vi">Tiếng Việt</option>
              </select>
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("rewards")}
              className="w-full rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-green-700"
              type="button"
            >
              {messages.cta}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
