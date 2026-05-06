"use client";

import Link from "next/link";
import FeaturedCard from "../ui/FeaturedCard";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>
          {t.hero.line1}
          <br />
          <em>{t.hero.line2}</em>
          <br />
          {t.hero.line3}
        </h1>
        <p>{t.hero.body}</p>
        <div className={styles.cta}>
          <Link href="/blog" className={styles.btnPrimary}>
            {t.hero.readLatest}
          </Link>
          <Link href="/#about" className={styles.btnGhost}>
            {t.hero.about}
          </Link>
        </div>
      </div>

      <div className={styles.featured}>
        <FeaturedCard
          label={t.hero.featuredLabel}
          title="Things Worth Learning: 5 Levels of a Fulfilling Relationship"
          excerpt="It starts with appearance, deepens through admiration for talent, and bonds over shared character... Reflections on the journey of truly connecting with another person."
          author="Tuân 20P"
          date="April 24"
          readTime="5 min read"
          slug="nhung-dieu-dang-hoc"
        />
      </div>
    </section>
  );
}
