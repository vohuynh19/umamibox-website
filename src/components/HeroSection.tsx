"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CampaignMeta {
  badge?: string;
  location?: string;
  category?: string;
  lastUpdatedLabel?: string;
  lastUpdatedValue?: string;
  fundingPeriod?: {
    title: string;
    start: string;
    end: string;
    duration: string;
  };
}

interface HeroSectionProps {
  messages: {
    title: string;
    subtitle: string;
    cta: string;
  };
  campaign: {
    pledged: string;
    goal: string;
    backers: string;
    daysLeft?: string;
    percentFunded: number;
    status?: string;
    labels: {
      pledged: string;
      goal: string;
      backers: string;
      daysLeft: string;
    };
    meta?: CampaignMeta;
  };
  scrollToRewards: () => void;
}

export default function HeroSection({
  messages,
  campaign,
  scrollToRewards,
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const progress = Math.min(campaign.percentFunded, 100);
  const meta = campaign.meta || {};

  const FundingPeriod = () => {
    if (!meta.fundingPeriod) {
      return null;
    }

    const { title, start, end, duration } = meta.fundingPeriod;

    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">
          <span className="font-medium text-gray-900">{start}</span> –{" "}
          <span className="font-medium text-gray-900">{end}</span>
        </p>
        <p className="mt-1 text-sm text-gray-500">{duration}</p>
      </div>
    );
  };

  if (!mounted) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="animate-pulse rounded-lg bg-gray-200 lg:col-span-8">
              <div className="aspect-video" />
            </div>
            <div className="space-y-5 lg:col-span-4">
              <div className="h-10 rounded bg-gray-200" />
              <div className="h-3 rounded bg-gray-200" />
              <div className="h-3 rounded bg-gray-200" />
              <div className="h-3 rounded bg-gray-200" />
              <div className="h-12 rounded bg-gray-200" />
              <div className="h-24 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left column – project video */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-black shadow-lg">
              <Image
                src="/images/kvs-xet-11.jpg"
                alt="UmamiBox project teaser"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] transition-colors duration-200 hover:bg-black/45">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg backdrop-blur-sm transition-colors duration-200 hover:bg-white"
                  aria-label="Play campaign video"
                  type="button"
                >
                  <svg
                    className="ml-1 h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.34-5.89a1.5 1.5 0 000-2.54L6.3 2.84z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right column – funding stats */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm lg:col-span-4 lg:p-8"
          >
            <div>
              <p className="text-4xl font-semibold tracking-tight text-gray-900">
                {campaign.pledged}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                {campaign.labels.pledged}{" "}
                <span className="font-medium text-gray-900">
                  {campaign.goal}
                </span>{" "}
                {campaign.labels.goal}
              </p>
            </div>

            <div>
              <div className="h-2.5 w-full rounded-full bg-gray-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="h-2.5 rounded-full bg-green-500"
                  style={{
                    boxShadow: "0 0 12px rgba(34,197,94,0.35)",
                  }}
                />
              </div>
              {campaign.status && (
                <p className="mt-3 text-sm font-medium text-green-600">
                  {campaign.percentFunded}% {campaign.status}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6 text-left text-sm">
              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  {campaign.backers}
                </p>
                <p className="mt-1 uppercase tracking-wide text-gray-500">
                  {campaign.labels.backers}
                </p>
              </div>
              {campaign.daysLeft ? (
                <div>
                  <p className="text-2xl font-semibold text-gray-900">
                    {campaign.daysLeft}
                  </p>
                  <p className="mt-1 uppercase tracking-wide text-gray-500">
                    {campaign.labels.daysLeft}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToRewards}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-green-700"
                type="button"
              >
                {messages.cta}
              </motion.button>
              <button
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900"
                type="button"
              >
                Remind me
              </button>
            </div>

            {(meta.lastUpdatedLabel || meta.lastUpdatedValue) && (
              <p className="text-xs text-gray-500">
                <span className="font-medium text-gray-700">
                  {meta.lastUpdatedLabel}
                </span>{" "}
                {meta.lastUpdatedValue}
              </p>
            )}
          </motion.aside>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              {meta.badge && (
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  {meta.badge}
                </span>
              )}
              {meta.location && (
                <span className="inline-flex items-center gap-2 text-gray-600">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a.75.75 0 01-.53-.22c-2.69-2.68-6.22-7.27-6.22-10.78a6.75 6.75 0 0113.5 0c0 3.51-3.54 8.1-6.22 10.78-.15.15-.34.22-.53.22zm0-14a5.25 5.25 0 00-5.25 5.25c0 2.63 2.63 6.42 5.25 9.07 2.62-2.65 5.25-6.44 5.25-9.07A5.25 5.25 0 0010 4zm0 7.25a2 2 0 110-4 2 2 0 010 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {meta.location}
                </span>
              )}
              {meta.category && (
                <span className="inline-flex items-center gap-2 text-gray-600">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 00-2 2v2.5A2.5 2.5 0 004.5 10H7v6a1 1 0 001 1h1a1 1 0 001-1v-6h2.5A2.5 2.5 0 0015 7.5V5a2 2 0 00-2-2H4z" />
                  </svg>
                  {meta.category}
                </span>
              )}
            </div>

            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                {messages.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {messages.subtitle}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <FundingPeriod />
          </div>
        </div>
      </div>
    </section>
  );
}
