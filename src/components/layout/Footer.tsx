"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Logo />
          </Link>
          <p>{t.footer.tagline}</p>
        </div>

        <div className={styles.col}>
          <h4>{t.footer.explore}</h4>
          <ul>
            <li>
              <Link href="/">{t.nav.home}</Link>
            </li>
            <li>
              <Link href="/blog">{t.footer.allPosts}</Link>
            </li>
            <li>
              <Link href="/category/podcast">{t.footer.listenPodcast}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>{t.footer.topics}</h4>
          <ul>
            <li>
              <Link href="/category/cuoc-song">{t.footer.lifestyle}</Link>
            </li>
            <li>
              <Link href="/category/podcast">{t.footer.podcast}</Link>
            </li>
            <li>
              <Link href="/category/ai">{t.footer.ai}</Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>{t.footer.connect}</h4>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
            </li>
            <li>
              <Link href="/#gioi-thieu">{t.footer.aboutBlog}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} TWENTY-PI <span>✦</span> {t.footer.rights}
        </p>
        <p>
          {t.footer.built}
        </p>
      </div>
    </footer>
  );
}
