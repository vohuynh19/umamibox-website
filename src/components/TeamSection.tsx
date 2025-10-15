"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TeamSectionProps {
  messages: {
    title: string;
    subtitle: string;
    members: Array<{
      name: string;
      position: string;
      description: string;
      image?: string;
    }>;
  };
}

export default function TeamSection({ messages }: TeamSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  // Default team member images
  const defaultImages = [
    "/images/space-1.JPG",
    "/images/space-2.JPG",
    "/images/space-3.JPG",
    "/images/space-4.JPG",
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
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

          {/* Team Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {messages.members.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={
                      member.image ||
                      defaultImages[index % defaultImages.length]
                    }
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-orange-600 font-semibold mb-3">
                    {member.position}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Giá trị cốt lõi của UmamiBox
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Chúng tôi cam kết mang đến những sản phẩm chất lượng cao với
                tiêu chuẩn Nhật Bản, đồng thời xây dựng một cộng đồng yêu thích
                ẩm thực Việt Nam.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Chất lượng hàng đầu",
                  description:
                    "Áp dụng tiêu chuẩn Nhật Bản trong từng khâu sản xuất và bảo quản",
                },
                {
                  icon: "🤝",
                  title: "Minh bạch & Tin cậy",
                  description:
                    "Công khai nguồn gốc, quy trình và cam kết với khách hàng",
                },
                {
                  icon: "🌱",
                  title: "Phát triển bền vững",
                  description:
                    "Hỗ trợ nông dân địa phương và bảo vệ môi trường",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Tham gia đội ngũ UmamiBox
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Chúng tôi luôn tìm kiếm những người đam mê ẩm thực và muốn góp
                phần mang đến những sản phẩm tốt nhất cho khách hàng Việt Nam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Xem vị trí tuyển dụng
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-3 rounded-full font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-300"
                >
                  Liên hệ với chúng tôi
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
