import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    default: "TWENTY-PI | Blog Tối Giản",
    template: "%s | TWENTY-PI",
  },
  description:
    "Blog tối giản về thiết kế, công nghệ và cuộc sống. Viết để suy nghĩ rõ hơn.",
  keywords: [
    "thiết kế",
    "công nghệ",
    "tối giản",
    "typography",
    "ux ui",
    "blog",
  ],
  authors: [{ name: "Tuân 20P" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://trang.blog",
    title: "TWENTY-PI | Blog Tối Giản",
    description:
      "Những ghi chép về thiết kế, công nghệ và cách con người tạo ra ý nghĩa từ thế giới số.",
    siteName: "TWENTY-PI",
  },
  twitter: {
    card: "summary_large_image",
    title: "TWENTY-PI | Blog Tối Giản",
    description:
      "Những ghi chép về thiết kế, công nghệ và cách con người tạo ra ý nghĩa từ thế giới số.",
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
    <html lang="vi" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        <div id="reading-progress"></div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
