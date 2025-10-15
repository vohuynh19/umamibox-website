import Head from "next/head";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Header,
  HeroSection,
  StorySection,
  RewardsSection,
  FAQSection,
  Footer,
} from "@/components";

export default function Home() {
  const t = useTranslations();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState<"en" | "vi">("en");

  useEffect(() => {
    setCurrentLocale((router.locale || "en") as "en" | "vi");
  }, [router.locale]);

  const handleLanguageChange = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  const scrollToRewards = () => {
    const rewardsSection = document.getElementById("rewards");
    if (rewardsSection) {
      rewardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>{t("hero.title")} | UmamiBox</title>
        <meta name="description" content={t("hero.subtitle")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${t("hero.title")} | UmamiBox`} />
        <meta property="og:description" content={t("hero.subtitle")} />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t("hero.title")} | UmamiBox`} />
        <meta name="twitter:description" content={t("hero.subtitle")} />
        <meta name="twitter:image" content="/preview.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://umamibox.com${router.asPath}`} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="UmamiBox Team" />
        <meta
          name="keywords"
          content="umami, Vietnamese cuisine, food box, culinary experience, authentic flavors"
        />
      </Head>

      <Header
        messages={t.raw("header")}
        currentLocale={currentLocale}
        onLanguageChange={handleLanguageChange}
      />

      <main className="min-h-screen">
        <div id="hero">
          <HeroSection
            messages={{
              title: t.raw("hero.title"),
              subtitle: t.raw("hero.subtitle"),
              cta: t.raw("hero.cta"),
            }}
            campaign={t.raw("campaign")}
            scrollToRewards={scrollToRewards}
          />
        </div>

        <div id="story">
          <StorySection messages={t.raw("story")} />
        </div>

        <div id="rewards">
          <RewardsSection
            title={t.raw("rewards.title")}
            subtitle={t.raw("rewards.subtitle")}
            rewards={t.raw("rewards.tiers")}
          />
        </div>

        <div id="faq">
          <FAQSection messages={t.raw("faq")} />
        </div>

        <Footer
          messages={t.raw("footer")}
          currentLocale={currentLocale}
          onLanguageChange={handleLanguageChange}
        />
      </main>
    </>
  );
}
