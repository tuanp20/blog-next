"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.active}>
            {t.nav.home}
          </Link>
          <Link href="/category/cuoc-song">{t.nav.lifestyle}</Link>
          <Link href="/category/podcast">{t.nav.podcast}</Link>
          <Link href="/category/ai">{t.nav.ai}</Link>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <LanguageToggle />
          <Link href="/#newsletter" className={styles.btnSubscribe}>
            {t.nav.subscribe}
          </Link>
        </div>
      </div>
    </header>
  );
}
