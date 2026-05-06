"use client";

import Link from "next/link";
import PostCard from "../ui/PostCard";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Sections.module.css";

const MOCK_POSTS = [
  {
    number: "01",
    tag: "Design",
    title: "Color and Emotion in User Interfaces",
    excerpt:
      "How the brain processes color — and why yellow evokes something entirely different from blue.",
    date: "April 18, 2025",
    readTime: "5 min read",
    slug: "mau-sac-va-cam-xuc",
  },
  {
    number: "02",
    tag: "Typography",
    title: "Serif or Sans-serif: The Wrong Question",
    excerpt:
      "The issue isn't which typeface you pick — it's whether you understand why you're picking it.",
    date: "April 10, 2025",
    readTime: "7 min read",
    slug: "serif-hay-sans-serif",
  },
  {
    number: "03",
    tag: "Thinking",
    title: "The 80/20 Rule in Product Design",
    excerpt:
      "Most of the value comes from a small fraction of features. How do you find that fraction?",
    date: "April 3, 2025",
    readTime: "4 min read",
    slug: "quy-tac-80-20",
  },
];

export default function LatestPosts() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="bai-viet">
      <div className={styles.header}>
        <h2>
          {t.latestPosts.heading} <span>{t.latestPosts.headingSpan}</span>
        </h2>
        <Link href="/blog" className={styles.seeAll}>
          {t.latestPosts.seeAll}
        </Link>
      </div>

      <div className={styles.grid}>
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
