"use client";

import { LanguageInit } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LanguageInit />
      <Header />
      {children}
      <Footer />
    </>
  );
}
