import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getLogoImage } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description:
    "A collection of distinctive physical artworks combining experimentation, modern techniques, natural materials and unconventional processes.",
  other: {
    "color-scheme": "light only",
  },
  themeColor: "#e4eef9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logo = getLogoImage();

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} style={{ colorScheme: "light only" }}>
      <body className="min-h-dvh flex flex-col bg-cream text-ink">
        <Header logo={logo} />
        <main className="flex-1">{children}</main>
        <Footer logo={logo} />
      </body>
    </html>
  );
}
