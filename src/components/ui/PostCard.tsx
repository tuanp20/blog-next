import Link from "next/link";
import styles from "./PostCard.module.css";

interface PostCardProps {
  number: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export default function PostCard({
  number,
  tag,
  title,
  excerpt,
  date,
  readTime,
  slug,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.number}>{number}</div>
      <div className={styles.tag}>{tag}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <div className={styles.footer}>
        <span className={styles.date}>{date}</span>
        <span className={styles.readTime}>{readTime}</span>
      </div>
    </Link>
  );
}
