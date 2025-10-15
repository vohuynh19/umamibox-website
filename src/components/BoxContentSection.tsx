"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface BoxContentSectionProps {
  messages: {
    title: string;
    description: string;
    features: string[];
  };
}

export default function BoxContentSection({
  messages,
}: BoxContentSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
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
            className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
          >
            {messages.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            {messages.description}
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Box Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/space-5.JPG"
                  alt="UmamiBox Contents"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
              >
                2-3kg
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
              >
                8-12 bữa ăn
              </motion.div>
            </motion.div>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-6">
              {messages.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Surprise Element */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Bất ngờ mỗi tháng
              </h3>
              <p className="text-lg text-gray-600">
                Mỗi hộp UmamiBox đều chứa một món quà bất ngờ - có thể là gia vị
                đặc biệt, công thức nấu ăn độc quyền, hoặc phụ kiện nấu nướng
                hữu ích!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
