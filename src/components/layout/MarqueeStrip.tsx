import styles from "./MarqueeStrip.module.css";

const items = [
  "Cuộc sống",
  "Podcast",
  "Trí tuệ nhân tạo",
  "Phát triển bản thân",
  "Công nghệ",
  "UX / UI",
  "Stories",
  "Suy ngẫm",
];

export default function MarqueeStrip({ className }: { className?: string }) {
  // Duplicate array 2 times to ensure seamless scrolling
  const duplicateItems = [...items, ...items, ...items];

  return (
    <div className={`${styles.strip} ${className || ""}`} aria-hidden="true">
      <div className={styles.inner}>
        {duplicateItems.map((item, index) => (
          <span key={index}>
            {item} <strong>✦</strong>
          </span>
        ))}
      </div>
    </div>
  );
}
