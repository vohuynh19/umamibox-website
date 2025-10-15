import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { getMessages } from "@/i18n";
import { useEffect, useState } from "react";

type Messages = Record<string, unknown>;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<Messages | null>(null);
  const [locale, setLocale] = useState<"en" | "vi">("en");

  useEffect(() => {
    const currentLocale = (router.locale || "en") as "en" | "vi";
    setLocale(currentLocale);

    getMessages(currentLocale).then((msgs) => {
      setMessages(msgs);
    });
  }, [router.locale]);

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Analytics />
      <SpeedInsights />
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
