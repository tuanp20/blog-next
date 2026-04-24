import Link from "next/link";
import styles from "./PostListItem.module.css";

interface PostListItemProps {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export default function PostListItem({
  tag,
  title,
  excerpt,
  date,
  readTime,
  slug,
}: PostListItemProps) {
  return (
    <Link href={`/blog/${slug}`} className={styles.item}>
      <div className={styles.content}>
        <div className={styles.tag}>{tag}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
      <div className={styles.meta}>
        <span className={styles.date}>{date}</span>
        <span className={styles.readTime}>{readTime}</span>
      </div>
    </Link>
  );
}
