"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface PreservationSectionProps {
  messages: {
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

export default function PreservationSection({
  messages,
}: PreservationSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-red-50 to-green-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem Side */}
            <motion.div variants={leftVariants} className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-red-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-6">
                    <svg
                      className="w-8 h-8 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {messages.problem.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {messages.problem.description}
                </p>
              </div>

              {/* Problem Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/space-3.JPG"
                  alt="Traditional storage problems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-red-900/20"></div>
              </motion.div>
            </motion.div>

            {/* Solution Side */}
            <motion.div variants={rightVariants} className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-green-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {messages.solution.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {messages.solution.description}
                </p>
              </div>

              {/* Solution Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/space-4.JPG"
                  alt="Japanese standard preservation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-green-900/20"></div>
              </motion.div>
            </motion.div>
          </div>

          {/* Process Flow */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Quy trình bảo quản tiêu chuẩn Nhật Bản
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Giết mổ",
                  desc: "Theo tiêu chuẩn vệ sinh cao",
                },
                {
                  step: "2",
                  title: "Đông lạnh nhanh",
                  desc: "Trong vòng 2 giờ",
                },
                {
                  step: "3",
                  title: "Chuỗi lạnh",
                  desc: "Duy trì -18°C liên tục",
                },
                {
                  step: "4",
                  title: "Giao hàng",
                  desc: "Đóng gói cách nhiệt chuyên dụng",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
