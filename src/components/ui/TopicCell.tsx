import Link from "next/link";
import styles from "./TopicCell.module.css";

interface TopicCellProps {
  icon: React.ReactNode;
  name: string;
  count: number;
  slug: string;
}

export default function TopicCell({ icon, name, count, slug }: TopicCellProps) {
  return (
    <Link href={`/#${slug}`} className={styles.cell}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.name}>{name}</div>
      <div className={styles.count}>{count} bài viết</div>
    </Link>
  );
}
