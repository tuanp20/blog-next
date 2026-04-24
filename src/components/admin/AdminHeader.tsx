import styles from "@/app/crm/admin.module.css";

export default function AdminHeader({ title }: { title: string }) {
  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className={styles.topHeader}>
      <div className={styles.headerTitle}>{title}</div>
      <div className={styles.headerActions}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
          {today}
        </span>
        <div className={styles.avatar}>T</div>
      </div>
    </header>
  );
}
