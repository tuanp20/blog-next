import AdminHeader from "@/components/admin/AdminHeader";
import styles from "../admin.module.css";

const MOCK_CATEGORIES = [
  { id: 1, name: "Cuộc sống", slug: "cuoc-song", count: 42 },
  { id: 2, name: "Podcast", slug: "podcast", count: 12 },
  { id: 3, name: "Trí tuệ nhân tạo (AI)", slug: "ai", count: 28 },
];

export default function CRMCategoriesList() {
  return (
    <>
      <AdminHeader title="Quản lý chuyên mục" />

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
              🔍 Tìm chuyên mục...
            </div>
          </div>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            + Thêm chuyên mục
          </button>
        </div>

        <div className={styles.card}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tên chuyên mục</th>
                <th>Slug đường dẫn</th>
                <th>Số bài viết</th>
                <th style={{ textAlign: "right" }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_CATEGORIES.map((cat) => (
                <tr key={cat.id}>
                  <td style={{ fontWeight: 600 }}>{cat.name}</td>
                  <td style={{ color: "var(--text-secondary)" }}>
                    /{cat.slug}
                  </td>
                  <td>{cat.count} bài</td>
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
                      Sửa
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
                      Xóa
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
