"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./MarqueeStrip.module.css";

export default function MarqueeStrip({ className }: { className?: string }) {
  const { t } = useLanguage();
  // Duplicate array 3 times to ensure seamless scrolling
  const duplicateItems = [...t.marquee, ...t.marquee, ...t.marquee];

  return (
    <div className={`${styles.strip} ${className || ""}`} aria-hidden="true">
      <div className={styles.inner}>
        {duplicateItems.map((item, index) => (
          <span key={index}>
            {item} <strong>✦</strong>
          </span>
        ))}
      </div>
    </div>
  );
}
