"use client";

import { motion } from "framer-motion";
import type { Reward } from "./RewardsSection";

interface RewardsSidebarProps {
  rewards: Reward[];
  onSelectReward?: (rewardId: string) => void;
}

export default function RewardsSidebar({
  rewards,
  onSelectReward,
}: RewardsSidebarProps) {
  if (!rewards || rewards.length === 0) {
    return null;
  }

  const handleSelect = (rewardId: string) => {
    if (onSelectReward) {
      onSelectReward(rewardId);
    } else {
      const rewardsSection = document.getElementById("rewards");
      rewardsSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const previewRewards = rewards.slice(0, Math.min(rewards.length, 3));

  return (
    <aside className="sticky top-32 space-y-6 lg:top-36">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">
          Choose a reward
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Support UmamiBox and unlock curated boxes of premium Vietnamese beef.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleSelect(previewRewards[0].id)}
          className="mt-4 w-full rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-green-700"
          type="button"
        >
          Back this project
        </motion.button>
      </div>

      <div className="space-y-4">
        {previewRewards.map((reward) => (
          <motion.div
            key={reward.id}
            whileHover={{ y: -2 }}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {reward.price}
                </p>
                <h4 className="mt-1 text-base font-semibold text-gray-900">
                  {reward.title}
                </h4>
              </div>
              {reward.popular && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                  Popular
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-gray-600">
              {reward.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <span>{reward.backers} backers</span>
              <span>Ships {reward.delivery}</span>
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(reward.id)}
              className="mt-4 w-full rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900"
              type="button"
            >
              Select reward
            </motion.button>
          </motion.div>
        ))}
      </div>
    </aside>
  );
}
