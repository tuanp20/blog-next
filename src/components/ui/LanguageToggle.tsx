"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./LanguageToggle.module.css";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      className={styles.toggle}
      onClick={toggle}
      aria-label={lang === "en" ? "Switch to Vietnamese" : "Switch to English"}
    >
      <span className={lang === "en" ? styles.active : ""}>EN</span>
      <span className={styles.divider}>|</span>
      <span className={lang === "vi" ? styles.active : ""}>VI</span>
    </button>
  );
}
