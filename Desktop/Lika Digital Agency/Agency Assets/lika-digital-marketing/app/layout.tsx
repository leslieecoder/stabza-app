import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { clientConfig, getThemeStyleVariables } from "@/config/client";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(clientConfig.domain),
  title: clientConfig.meta.title,
  description: clientConfig.meta.description,
  openGraph: {
    title: clientConfig.meta.title,
    description: clientConfig.meta.description,
    url: clientConfig.domain,
    siteName: clientConfig.businessName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: clientConfig.meta.title,
    description: clientConfig.meta.description,
  },
};

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const gtagLoaderId = googleAnalyticsId ?? googleAdsId;
const themeVariables = getThemeStyleVariables(clientConfig.styles) as CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" style={themeVariables}>
        {gtagLoaderId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtagLoaderId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.gtag = function gtag(){window.dataLayer.push(arguments);};
                gtag('js', new Date());
                ${googleAnalyticsId ? `gtag('config', '${googleAnalyticsId}');` : ""}
                ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
