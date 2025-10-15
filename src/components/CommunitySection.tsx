"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CommunitySectionProps {
  messages: {
    title: string;
    mission: string;
    tiers: Array<{
      name: string;
      duration: string;
      price: string;
      originalPrice?: string;
      features: string[];
      popular?: boolean;
      bonus?: string;
    }>;
  };
}

export default function CommunitySection({ messages }: CommunitySectionProps) {
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

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
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
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              {messages.mission}
            </motion.p>
          </div>

          {/* Community Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { number: "2,500+", label: "Thành viên cộng đồng" },
              { number: "15,000+", label: "Bữa ăn đã phục vụ" },
              { number: "98%", label: "Độ hài lòng khách hàng" },
              { number: "24/7", label: "Hỗ trợ khách hàng" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tier Cards */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 mb-16"
          >
            {messages.tiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  tier.popular
                    ? "border-gradient-to-r from-orange-500 to-red-600 ring-4 ring-orange-200"
                    : "border-gray-200 hover:border-orange-300"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Phổ biến nhất
                    </div>
                  </div>
                )}

                {/* Tier Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">
                    {tier.duration}
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-gray-800">
                      {tier.price}
                    </div>
                    {tier.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {tier.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bonus */}
                {tier.bonus && (
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-3 mb-6">
                    <div className="text-sm font-semibold text-orange-800">
                      🎁 Bonus: {tier.bonus}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white"
                  }`}
                >
                  Chọn gói này
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Community Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Tham gia cộng đồng UmamiBox
                </h3>
                <div className="space-y-4">
                  {[
                    "Truy cập độc quyền vào nhóm Facebook riêng tư",
                    "Chia sẻ công thức và mẹo nấu ăn với cộng đồng",
                    "Tham gia các buổi livestream nấu ăn hàng tuần",
                    "Nhận thông báo sớm về sản phẩm mới và khuyến mãi",
                    "Cơ hội tham gia các sự kiện offline độc quyền",
                  ].map((benefit, index) => (
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
                      <p className="text-gray-300">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/space-6.JPG"
                  alt="Community"
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
