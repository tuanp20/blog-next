import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import styles from "../admin.module.css";
import { getAllPosts } from "@/lib/posts";

export default function CRMPostsList() {
  const posts = getAllPosts();

  return (
    <>
      <AdminHeader title="Quản lý bài viết" />

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
              🔍 Tìm kiếm bài viết...
            </div>
          </div>
          <Link
            href="/crm/posts/new"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            + Thêm bài viết
          </Link>
        </div>

        <div className={styles.card}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tiêu đề</th>
                <th>Chuyên mục</th>
                <th>Ngày xuất bản</th>
                <th>Trạng thái</th>
                <th style={{ textAlign: "right" }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.slug}>
                  <td
                    style={{
                      fontWeight: 500,
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {post.title}
                  </td>
                  <td>
                    <span
                      className={`${styles.badge} ${post.tag === "Podcast" ? styles.brand : ""}`}
                    >
                      {post.tag}
                    </span>
                  </td>
                  <td>{post.dateISO}</td>
                  <td>
                    <span
                      className={styles.badge}
                      style={{ background: "#e6f4ea", color: "#137333" }}
                    >
                      Đã xuất bản
                    </span>
                  </td>
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
