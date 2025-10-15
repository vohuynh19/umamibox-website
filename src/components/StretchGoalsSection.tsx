"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StretchGoalsSectionProps {
  messages: {
    title: string;
    subtitle: string;
    currentAmount: string;
    goals: Array<{
      amount: string;
      title: string;
      description: string;
      unlocked?: boolean;
    }>;
  };
}

export default function StretchGoalsSection({
  messages,
}: StretchGoalsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedAmount, setAnimatedAmount] = useState(0);

  // Parse current amount for animation
  const currentAmountValue = parseInt(
    messages.currentAmount.replace(/[^0-9]/g, "")
  );
  const maxGoalAmount = 1000000000; // 1 billion

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const increment = currentAmountValue / 100;
        const counter = setInterval(() => {
          start += increment;
          if (start >= currentAmountValue) {
            setAnimatedAmount(currentAmountValue);
            clearInterval(counter);
          } else {
            setAnimatedAmount(Math.floor(start));
          }
        }, 20);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, currentAmountValue]);

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

  const formatAmount = (amount: number) => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)} tỷ`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(0)} triệu`;
    }
    return amount.toLocaleString("vi-VN");
  };

  const getProgressPercentage = (goalAmount: string) => {
    const goalValue = parseInt(goalAmount.replace(/[^0-9]/g, ""));
    return Math.min((currentAmountValue / goalValue) * 100, 100);
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
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              {messages.subtitle}
            </motion.p>

            {/* Current Amount Display */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8 mb-12 shadow-xl"
            >
              <div className="text-lg font-semibold mb-2">Số tiền hiện tại</div>
              <div className="text-5xl md:text-6xl font-bold">
                {formatAmount(animatedAmount)} VNĐ
              </div>
              <div className="text-lg mt-2 opacity-90">
                {((currentAmountValue / maxGoalAmount) * 100).toFixed(1)}% của
                mục tiêu cuối cùng
              </div>
            </motion.div>
          </div>

          {/* Goals Timeline */}
          <motion.div variants={containerVariants} className="space-y-8">
            {messages.goals.map((goal, index) => {
              const goalAmount = parseInt(goal.amount.replace(/[^0-9]/g, ""));
              const isUnlocked = currentAmountValue >= goalAmount;
              const progress = getProgressPercentage(goal.amount);

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-500 ${
                    isUnlocked
                      ? "border-green-400 bg-gradient-to-r from-green-50 to-emerald-50"
                      : progress > 0
                      ? "border-orange-300 bg-gradient-to-r from-orange-50 to-yellow-50"
                      : "border-gray-200"
                  }`}
                >
                  {/* Goal Status Badge */}
                  <div className="absolute -top-4 left-8">
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                        isUnlocked
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                          : progress > 0
                          ? "bg-gradient-to-r from-orange-500 to-yellow-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {isUnlocked
                        ? "✓ Đã mở khóa"
                        : progress > 0
                        ? "Đang tiến triển"
                        : "Chưa đạt được"}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Goal Info */}
                    <div className="md:col-span-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                            isUnlocked
                              ? "bg-green-500 text-white"
                              : progress > 0
                              ? "bg-orange-500 text-white"
                              : "bg-gray-300 text-gray-600"
                          }`}
                        >
                          {isUnlocked ? "🎉" : "🎯"}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">
                            {goal.title}
                          </h3>
                          <div className="text-lg font-semibold text-orange-600">
                            {goal.amount}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {goal.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView ? { width: `${progress}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1.5,
                            delay: 0.5 + index * 0.2,
                          }}
                          className={`h-full rounded-full ${
                            isUnlocked
                              ? "bg-gradient-to-r from-green-500 to-emerald-600"
                              : "bg-gradient-to-r from-orange-500 to-red-600"
                          }`}
                        />
                      </div>
                      <div className="text-sm text-gray-500 mt-2">
                        {progress.toFixed(1)}% hoàn thành
                      </div>
                    </div>

                    {/* Goal Image */}
                    <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={
                          index === 0
                            ? "/images/kvs-xet-11.jpg"
                            : "/images/kvs-xet-13.jpg"
                        }
                        alt={goal.title}
                        fill
                        className={`object-cover transition-all duration-500 ${
                          isUnlocked ? "grayscale-0" : "grayscale"
                        }`}
                      />
                      {isUnlocked && (
                        <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent" />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Hãy giúp chúng tôi đạt được mục tiêu tiếp theo!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Mỗi đóng góp của bạn đều giúp chúng tôi mang đến những sản phẩm
                tốt hơn cho cộng đồng.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Chọn gói hỗ trợ ngay
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
