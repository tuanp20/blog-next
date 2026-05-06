import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Providers from "@/app/providers";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TWENTY-PI | Life in All Its Colors",
    template: "%s | TWENTY-PI",
  },
  description:
    "My perspectives on life and technology. Writing to think more clearly.",
  keywords: [
    "design",
    "technology",
    "minimalism",
    "typography",
    "ux ui",
    "blog",
  ],
  authors: [{ name: "Tuân 20P" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trang.blog",
    title: "TWENTY-PI | Life in All Its Colors",
    description:
      "My perspectives on life and technology. Writing to think more clearly.",
    siteName: "TWENTY-PI",
  },
  twitter: {
    card: "summary_large_image",
    title: "TWENTY-PI | Life in All Its Colors",
    description:
      "My perspectives on life and technology. Writing to think more clearly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        <Providers>
          <div id="reading-progress"></div>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
