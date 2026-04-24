import Link from "next/link";
import styles from "./PodcastCard.module.css";

interface PodcastCardProps {
  number: string;
  title: string;
  excerpt: string;
  date: string;
  audioDuration: string;
  slug: string;
}

export default function PodcastCard({
  number,
  title,
  excerpt,
  date,
  audioDuration,
  slug,
}: PodcastCardProps) {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.playBtn}>
          <div className={styles.triangle}></div>
        </div>
        <div className={styles.tag}>Podcast Tập {number}</div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <div className={styles.footer}>
        <span className={styles.date}>{date}</span>
        <span className={styles.duration}>Âm thanh · {audioDuration}</span>
      </div>
    </Link>
  );
}
