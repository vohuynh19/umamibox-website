"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StorySectionProps {
  messages: {
    title: string;
    founder: {
      name: string;
      role: string;
      description: string;
    };
    problem: {
      title: string;
      description: string;
    };
    solution: {
      title: string;
      description: string;
    };
  };
}

export default function StorySection({ messages }: StorySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  console.log("messages", messages);

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
          >
            {messages.title}
          </motion.h2>

          {/* Founder Section */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/kvs-xet-7.jpg"
                  alt={messages.founder.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {messages.founder.name}
                </h3>
                <p className="text-lg text-orange-600 font-semibold mb-4">
                  {messages.founder.role}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {messages.founder.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Problem & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Problem */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-red-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {messages.problem.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {messages.problem.description}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-green-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {messages.solution.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {messages.solution.description}
              </p>
            </motion.div>
          </div>

          {/* Image Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { src: "/images/kvs-xet-13.jpg", alt: "Farm 1" },
              { src: "/images/kvs-xet-14.jpg", alt: "Farm 2" },
              { src: "/images/space-1.JPG", alt: "Processing" },
              { src: "/images/space-2.JPG", alt: "Quality Control" },
            ].map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-48 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
