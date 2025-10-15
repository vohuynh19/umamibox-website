"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface FAQSectionProps {
  messages: {
    title: string;
    subtitle: string;
    questions?: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export default function FAQSection({ messages }: FAQSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const accordionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  console.log("messages.questions", messages);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
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

          {/* FAQ Accordion */}
          <motion.div variants={containerVariants} className="space-y-4">
            {(messages.questions || []).map((faq, index) => (
              <motion.div
                key={index}
                variants={accordionVariants}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Question Header */}
                <motion.button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                {/* Answer Content */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          className="pt-4"
                        >
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Vẫn còn thắc mắc?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn sàng giải đáp
                mọi câu hỏi của bạn. Liên hệ với chúng tôi qua email hoặc điện
                thoại.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="mailto:support@umamibox.vn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>support@umamibox.vn</span>
                </motion.a>

                <motion.a
                  href="tel:+84123456789"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 border-2 border-gray-300 px-6 py-3 rounded-full font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-300 flex items-center space-x-2"
                >
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+84 123 456 789</span>
                </motion.a>
              </div>

              {/* Support Hours */}
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-semibold mb-1">Giờ hỗ trợ khách hàng:</p>
                <p>Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                <p>Thứ 7 - Chủ nhật: 9:00 - 17:00</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "📋",
                title: "Chính sách đổi trả",
                description: "Tìm hiểu về quy định đổi trả sản phẩm",
                link: "#",
              },
              {
                icon: "🚚",
                title: "Chính sách giao hàng",
                description: "Thông tin về thời gian và phí giao hàng",
                link: "#",
              },
              {
                icon: "🔒",
                title: "Chính sách bảo mật",
                description: "Cách chúng tôi bảo vệ thông tin của bạn",
                link: "#",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
