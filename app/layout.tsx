import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F3F0E8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "PAWCROP | Decentralized On-Site Nitrogen & Root-Zone Sanitization",
  description:
    "PAWCROP is an IoT-enabled fertilizer appliance converting ambient air, water, and electricity into bioavailable nitrate and root-zone sanitizer at a plant-safe pH 6.0.",
  keywords: [
    "PAWCROP",
    "Plasma-Activated Water",
    "Cold Atmospheric Plasma",
    "Agritech Hardware",
    "Hydroponics Fertilizer",
    "On-Site Nitrogen",
    "Pythium Sanitization",
    "ESP32 Agri-Safe",
    "IARE Startup",
    "MSME Idea Hackathon",
  ],
  authors: [{ name: "Pujari Rahul" }, { name: "Nikhita Rangineni" }, { name: "Preetham Joel" }],
  creator: "PAWCROP",
  publisher: "PAWCROP",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pawcrop.in",
    siteName: "PAWCROP Agritech",
    title: "PAWCROP | Grow your own nitrogen. Keep the chemistry out of your food.",
    description:
      "Decentralized Cold Atmospheric Plasma fertilizer appliance. Zero chemical supply chains. Plant-safe pH 6.0 lock.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAWCROP | Decentralized On-Site Nitrogen & Root-Zone Sanitization",
    description:
      "Decentralized Cold Atmospheric Plasma fertilizer appliance. Zero chemical supply chains. Plant-safe pH 6.0 lock.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="paper-grain font-body text-ink antialiased selection:bg-arc/30">
        {children}
      </body>
    </html>
  );
}
