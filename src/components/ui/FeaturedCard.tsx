import Link from "next/link";
import styles from "./FeaturedCard.module.css";

interface FeaturedCardProps {
  label: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  avatarChar?: string;
}

export default function FeaturedCard({
  label,
  title,
  excerpt,
  author,
  date,
  readTime,
  slug,
  avatarChar = "T",
}: FeaturedCardProps) {
  return (
    <div className={styles.card}>
      <Link
        href={`/blog/${slug}`}
        className={styles.link}
        aria-label={`Đọc bài nổi bật: ${title}`}
      />
      <div className={styles.label}>✦ {label}</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.excerpt}>{excerpt}</p>
      <div className={styles.meta}>
        <div className={styles.avatar}>{avatarChar}</div>
        <div className={styles.metaText}>
          <strong>{author}</strong>
          {date} · {readTime}
        </div>
      </div>
    </div>
  );
}
