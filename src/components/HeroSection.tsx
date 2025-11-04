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

  // const FundingPeriod = () => {
  //   if (!meta.fundingPeriod) return null;
  //   const { title, start, end, duration } = meta.fundingPeriod;
  //   return (
  //     <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  //       <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
  //       <p className="mt-2 text-sm text-gray-600">
  //         <span className="font-medium text-gray-900">{start}</span> –{" "}
  //         <span className="font-medium text-gray-900">{end}</span>
  //       </p>
  //       <p className="mt-1 text-sm text-gray-500">{duration}</p>
  //     </div>
  //   );
  // };

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
          <div className="lg:col-span-12 mb-6">
            <h1 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl text-center">
              UmamiBox: Mở cửa nhận thịt bò khỏe mạnh, 100% nội địa Việt Nam với tiêu chuẩn Nhật
            </h1>
          </div>

          <div className="lg:col-span-8">
            {/* Container có aspect ratio rõ ràng để dùng Image fill */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-black shadow-lg">
              <Image
                src="/images/image14.png"
                alt="UmamiBox project teaser"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column – funding stats */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm lg:col-span-4 lg:p-8"
          >
            <p className="text-lg leading-relaxed text-gray-700">
              Nguồn Protein khỏe mạnh hữu cơ 100% đến từ vùng đồng cỏ thổ nhưỡng tại Ba Vì-Tam Đảo, Tây Nguyên, Việt Nam. Minh bạch bạn có thể xem, Vị ngon bạn có thể nếm, Giao tận nhà khi bạn cần.
            </p>

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
                  style={{ boxShadow: "0 0 12px rgba(34,197,94,0.35)" }}
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
      </div>
    </section>
  );
}
