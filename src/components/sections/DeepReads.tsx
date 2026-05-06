"use client";

import Link from "next/link";
import PostListItem from "../ui/PostListItem";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Sections.module.css";

const MOCK_DEEP_READS = [
  {
    tag: "Design Systems",
    title: "Why Design Systems Fail — and How to Prevent It",
    excerpt:
      "Most design systems don't die from a lack of components — they die from a lack of culture.",
    date: "March 25",
    readTime: "12 min",
    slug: "tai-sao-design-systems-that-bai",
  },
  {
    tag: "UX Research",
    title: "Test 5 Users, Not 50 — The Truth Behind the Magic Number",
    excerpt:
      "Jakob Nielsen once said 5 is enough. Does that still hold true in 2025?",
    date: "March 18",
    readTime: "9 min",
    slug: "test-5-nguoi-dung",
  },
  {
    tag: "Technology",
    title:
      "AI Won't Replace Designers — It Will Replace Designers Who Don't Use AI",
    excerpt:
      "The real shift: from executor to the person asking better questions.",
    date: "March 10",
    readTime: "15 min",
    slug: "ai-khong-thay-the-designer",
  },
  {
    tag: "Minimalism",
    title:
      "Learning from Dieter Rams: 10 Principles of Good Design That Still Hold Up",
    excerpt:
      "Written in the 1970s, yet each principle describes exactly the mistakes we're still making today.",
    date: "March 1",
    readTime: "11 min",
    slug: "hoc-tu-dieter-rams",
  },
];

export default function DeepReads() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>
          {t.deepReads.heading} <span>{t.deepReads.headingSpan}</span>
        </h2>
        <Link href="/blog" className={styles.seeAll}>
          {t.deepReads.seeAll}
        </Link>
      </div>

      <div className={styles.list}>
        {MOCK_DEEP_READS.map((post) => (
          <PostListItem key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
