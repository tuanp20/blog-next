import TopicCell from "../ui/TopicCell";
import styles from "./Topics.module.css";

const TOPICS = [
  { icon: "✧", name: "Cuộc sống", count: 42, slug: "cuoc-song" },
  { icon: "🎧", name: "Podcast", count: 12, slug: "podcast" },
  { icon: "◈", name: "Trí tuệ nhân tạo", count: 28, slug: "ai" },
  { icon: "◎", name: "Thiết kế", count: 24, slug: "thiet-ke" },
];

export default function Topics() {
  return (
    <section className={styles.section} id="chu-de">
      <div className={styles.header}>
        <h2>
          Chủ đề <span>khám phá</span>
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
