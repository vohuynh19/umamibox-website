"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineSectionProps {
  messages: {
    title: string;
    subtitle: string;
    milestones: Array<{
      date: string;
      title: string;
      description: string;
      status: "completed" | "current" | "upcoming";
    }>;
  };
}

export default function TimelineSection({ messages }: TimelineSectionProps) {
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

  const timelineVariants = {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return {
          bg: "bg-green-500",
          border: "border-green-500",
          text: "text-green-600",
          bgLight: "bg-green-50",
        };
      case "current":
        return {
          bg: "bg-orange-500",
          border: "border-orange-500",
          text: "text-orange-600",
          bgLight: "bg-orange-50",
        };
      default:
        return {
          bg: "bg-gray-300",
          border: "border-gray-300",
          text: "text-gray-600",
          bgLight: "bg-gray-50",
        };
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <svg
            className="w-6 h-6 text-white"
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
        );
      case "current":
        return (
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return (
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        );
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Hoàn thành";
      case "current":
        return "Đang diễn ra";
      default:
        return "Sắp tới";
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
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

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>

            {/* Animated Progress Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "60%" } : { height: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 w-1 bg-gradient-to-b from-green-500 via-orange-500 to-gray-300"
            ></motion.div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {messages.milestones.map((milestone, index) => {
                const colors = getStatusColor(milestone.status);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={timelineVariants}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                        className={`w-16 h-16 rounded-full ${colors.bg} flex items-center justify-center shadow-lg border-4 border-white`}
                      >
                        {getStatusIcon(milestone.status)}
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                        isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isEven ? -50 : 50 }
                        }
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                        className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${colors.border} ${colors.bgLight} hover:shadow-xl transition-all duration-300`}
                      >
                        {/* Status Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${colors.text} ${colors.bgLight} border ${colors.border}`}
                          >
                            {getStatusLabel(milestone.status)}
                          </div>
                          <div className="text-sm font-medium text-gray-500">
                            {milestone.date}
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>

                        {/* Progress Indicator for Current Status */}
                        {milestone.status === "current" && (
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                              <span>Tiến độ</span>
                              <span>75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={
                                  isInView ? { width: "75%" } : { width: 0 }
                                }
                                transition={{
                                  duration: 1.5,
                                  delay: 1 + index * 0.2,
                                }}
                                className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Key Dates Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Những ngày quan trọng</h3>
              <p className="text-lg opacity-90">
                Đánh dấu lịch của bạn để không bỏ lỡ những cột mốc quan trọng
                của UmamiBox!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🚀",
                  title: "Khởi động chiến dịch",
                  date: "15/11/2025",
                  description: "Chính thức mở bán các gói hỗ trợ",
                },
                {
                  icon: "⏰",
                  title: "Kết thúc chiến dịch",
                  date: "15/12/2025",
                  description: "Hạn chót để tham gia hỗ trợ dự án",
                },
                {
                  icon: "📦",
                  title: "Giao hàng dự kiến",
                  date: "01/2026",
                  description: "Bắt đầu giao sản phẩm đến khách hàng",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <div className="text-2xl font-bold mb-2">{item.date}</div>
                  <p className="text-sm opacity-90">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
