"use client";

import TopicCell from "../ui/TopicCell";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Topics.module.css";

export default function Topics() {
  const { t } = useLanguage();

  const TOPICS = [
    { icon: "✧", name: t.topicNames.lifestyle, count: 42, slug: "cuoc-song" },
    { icon: "🎧", name: t.topicNames.podcast, count: 12, slug: "podcast" },
    { icon: "◈", name: t.topicNames.ai, count: 28, slug: "ai" },
    { icon: "◎", name: t.topicNames.design, count: 24, slug: "thiet-ke" },
  ];

  return (
    <section className={styles.section} id="chu-de">
      <div className={styles.header}>
        <h2>
          {t.topics.heading1} <span>{t.topics.headingSpan}</span>
        </h2>
      </div>
      <div className={styles.grid}>
        {TOPICS.map((topic) => (
          <TopicCell key={topic.slug} {...topic} />
        ))}
      </div>
    </section>
  );
}
