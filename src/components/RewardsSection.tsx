"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export interface Reward {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  includes: string[];
  delivery: string;
  backers: number;
  limited?: boolean;
  remaining?: number;
  popular?: boolean;
}

interface RewardsSectionProps {
  rewards: Reward[];
  title: string;
  subtitle: string;
}

export default function RewardsSection({
  rewards,
  title,
  subtitle,
}: RewardsSectionProps) {
  const [selectedReward, setSelectedReward] = useState<string | null>(null);

  return (
    <section id="rewards" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid gap-6 lg:gap-8">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
                reward.popular
                  ? "border-green-500 shadow-lg"
                  : "border-gray-200 hover:border-gray-300"
              } ${
                selectedReward === reward.id
                  ? "ring-2 ring-green-500 border-green-500"
                  : ""
              }`}
            >
              {/* Popular Badge */}
              {reward.popular && (
                <div className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-t-lg text-center">
                  Most Popular
                </div>
              )}

              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  {/* Left Column - Reward Info */}
                  <div className="flex-1 lg:pr-8">
                    {/* Price and Title */}
                    <div className="mb-4">
                      <div className="flex items-baseline space-x-2 mb-2">
                        <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {reward.price}
                        </span>
                        {reward.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            {reward.originalPrice}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
                        {reward.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reward.description}
                      </p>
                    </div>

                    {/* Includes */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Includes:
                      </h4>
                      <ul className="space-y-2">
                        {reward.includes.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start space-x-2"
                          >
                            <svg
                              className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Delivery Info */}
                    <div className="text-sm text-gray-600 mb-4">
                      <span className="font-medium">Estimated delivery:</span>{" "}
                      {reward.delivery}
                    </div>
                  </div>

                  {/* Right Column - Action */}
                  <div className="lg:w-64 lg:flex-shrink-0">
                    <div className="space-y-4">
                      {/* Backers Count */}
                      <div className="text-center lg:text-left">
                        <div className="text-lg font-semibold text-gray-900">
                          {reward.backers} backers
                        </div>
                        {reward.limited && reward.remaining && (
                          <div className="text-sm text-orange-600">
                            Only {reward.remaining} left!
                          </div>
                        )}
                      </div>

                      {/* Select Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setSelectedReward(
                            selectedReward === reward.id ? null : reward.id
                          )
                        }
                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                          selectedReward === reward.id
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-900 text-white hover:bg-gray-800"
                        }`}
                      >
                        {selectedReward === reward.id
                          ? "Selected"
                          : "Select this reward"}
                      </motion.button>

                      {reward.limited && reward.remaining && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{
                              width: `${Math.max(
                                10,
                                (reward.remaining / (reward.remaining + reward.backers)) * 100
                              )}%`,
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Can&apos;t decide? You can change your reward selection until the campaign ends.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Continue to Checkout
          </button>
        </motion.div>
      </div>
    </section>
  );
}
