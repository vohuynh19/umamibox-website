"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  messages: {
    title: string;
    subtitle: string;
    cta: string;
  };
  campaign: {
    pledged: string;
    goal: string;
    backers: string;
    daysLeft: string;
    percentFunded: number;
    status: string;
    labels: {
      pledged: string;
      goal: string;
      backers: string;
      daysLeft: string;
    };
  };
  scrollToRewards: () => void;
}

export default function HeroSection({
  messages,
  campaign,
  scrollToRewards,
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-4"></div>
              <div className="h-16 bg-gray-300 rounded mb-6"></div>
              <div className="h-4 bg-gray-300 rounded mb-8"></div>
              <div className="h-12 bg-gray-300 rounded w-48"></div>
            </div>
            <div className="animate-pulse">
              <div className="aspect-video bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Project Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Project Title */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {messages.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {messages.subtitle}
              </p>
            </div>

            {/* Campaign Stats */}
            <div className="space-y-6">
              {/* Funding Progress */}
              <div>
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-3xl font-bold text-green-600">
                    {campaign.pledged}
                  </span>
                  <span className="text-gray-600">
                    {campaign.labels.pledged} {campaign.goal} {campaign.labels.goal}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(campaign.percentFunded, 100)}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="bg-green-500 h-3 rounded-full"
                  ></motion.div>
                </div>
                {campaign.percentFunded > 100 && (
                  <div className="text-green-600 font-semibold text-sm">
                    {campaign.percentFunded}% {campaign.status}
                  </div>
                )}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {campaign.backers}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {campaign.labels.backers}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {campaign.daysLeft}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {campaign.labels.daysLeft}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToRewards}
              className="w-full lg:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              {messages.cta}
            </motion.button>
          </motion.div>

          {/* Right Column - Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/kvs-xet-11.jpg"
                alt="UmamiBox Product"
                fill
                className="object-cover"
                priority
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 cursor-pointer group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-opacity-100 transition-all duration-200"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
