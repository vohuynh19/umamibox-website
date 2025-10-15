"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CookingSectionProps {
  messages: {
    title: string;
    subtitle: string;
    recipes: Array<{
      name: string;
      time: string;
      difficulty: string;
    }>;
  };
}

export default function CookingSection({ messages }: CookingSectionProps) {
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

  const recipeImages = [
    "/images/menu.JPG",
    "/images/space-6.JPG",
    "/images/0.JPG",
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "dễ":
      case "easy":
        return "bg-green-100 text-green-800";
      case "trung bình":
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "khó":
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              {messages.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {messages.subtitle}
            </motion.p>
          </div>

          {/* Recipe Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {messages.recipes.map((recipe, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Recipe Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={recipeImages[index] || "/images/menu.JPG"}
                    alt={recipe.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Difficulty Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(
                      recipe.difficulty
                    )}`}
                  >
                    {recipe.difficulty}
                  </div>
                </div>

                {/* Recipe Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {recipe.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <svg
                        className="w-5 h-5"
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
                      <span className="text-sm font-medium">{recipe.time}</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Xem công thức
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cooking Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Hỗ trợ nấu ăn 24/7
                </h3>
                <div className="space-y-4">
                  {[
                    "Video hướng dẫn chi tiết từng bước",
                    "Tư vấn trực tuyến với đầu bếp chuyên nghiệp",
                    "Cộng đồng chia sẻ công thức độc đáo",
                    "Ứng dụng mobile với timer nấu ăn thông minh",
                  ].map((tip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">{tip}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/1.JPG"
                  alt="Cooking support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
