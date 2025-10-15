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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} id="story" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {messages.title}
          </h2>
        </motion.div>

        {/* Linear Story Flow */}
        <div className="space-y-16">
          {/* Founder Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            <div className="lg:w-1/3">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/images/kvs-xet-7.jpg"
                  alt={messages.founder.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {messages.founder.name}
              </h3>
              <p className="text-lg text-green-600 font-semibold mb-4">
                {messages.founder.role}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {messages.founder.description}
              </p>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              {messages.problem.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {messages.problem.description}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              {messages.solution.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              {messages.solution.description}
            </p>
          </motion.div>

          {/* Visual Evidence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { src: "/images/kvs-xet-13.jpg", alt: "Premium Vietnamese Farm" },
              { src: "/images/kvs-xet-14.jpg", alt: "Quality Beef Cuts" },
              { src: "/images/space-1.JPG", alt: "Processing Facility" },
              { src: "/images/space-2.JPG", alt: "Quality Control" },
            ].map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <p className="text-lg text-gray-600 mb-6">
              Join us in bringing premium Vietnamese beef with Japanese standards directly to your table.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const rewardsSection = document.getElementById("rewards");
                if (rewardsSection) {
                  rewardsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Choose Your Package
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
