import AdminHeader from "@/components/admin/AdminHeader";
import styles from "./admin.module.css";
import { getAllPosts } from "@/lib/posts";

export default function CRMDashboard() {
  const posts = getAllPosts();

  // Mock some stats for views and subscribers
  const totalViews = "12.4K";
  const newSubscribers = 42;

  return (
    <>
      <AdminHeader title="Dashboard" />

      <main className={styles.main}>
        {/* Stat Blocks */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div className={styles.card}>
            <div className={styles.cardTitle}>Total Posts & Podcasts</div>
            <div className={styles.statValue}>{posts.length}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Views (Monthly)</div>
            <div className={styles.statValue}>{totalViews}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>New Subscribers</div>
            <div className={styles.statValue}>+{newSubscribers}</div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Recent Activity</div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Published Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {posts.slice(0, 5).map((post) => (
                <tr key={post.slug}>
                  <td style={{ fontWeight: 500 }}>{post.title}</td>
                  <td>
                    <span
                      className={`${styles.badge} ${post.tag === "Podcast" ? styles.brand : ""}`}
                    >
                      {post.tag}
                    </span>
                  </td>
                  <td>{post.date}</td>
                  <td>
                    <span
                      className={styles.badge}
                      style={{ background: "#e6f4ea", color: "#137333" }}
                    >
                      Published
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
