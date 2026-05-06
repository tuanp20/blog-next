import AdminHeader from "@/components/admin/AdminHeader";
import styles from "../admin.module.css";

const MOCK_CATEGORIES = [
  { id: 1, name: "Life", slug: "life", count: 42 },
  { id: 2, name: "Podcast", slug: "podcast", count: 12 },
  { id: 3, name: "Artificial Intelligence (AI)", slug: "ai", count: 28 },
];

export default function CRMCategoriesList() {
  return (
    <>
      <AdminHeader title="Manage Categories" />

      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <div
              className={styles.input}
              style={{ width: "300px", display: "inline-block" }}
            >
              🔍 Search categories...
            </div>
          </div>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            + Add Category
          </button>
        </div>

        <div className={styles.card}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category Name</th>
                <th>URL Slug</th>
                <th>Post Count</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_CATEGORIES.map((cat) => (
                <tr key={cat.id}>
                  <td style={{ fontWeight: 600 }}>{cat.name}</td>
                  <td style={{ color: "var(--text-secondary)" }}>
                    /{cat.slug}
                  </td>
                  <td>{cat.count} posts</td>
                  <td
                    style={{
                      textAlign: "right",
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      className={styles.badge}
                      style={{
                        cursor: "pointer",
                        border: "1px solid var(--gray-light)",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.badge}
                      style={{
                        cursor: "pointer",
                        border: "1px solid #fce8e6",
                        color: "#c5221f",
                        background: "#fce8e6",
                      }}
                    >
                      Delete
                    </button>
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
