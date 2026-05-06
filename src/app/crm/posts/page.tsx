import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import styles from "../admin.module.css";
import { getAllPosts } from "@/lib/posts";
import { deletePostAction } from "@/lib/actions";

export default function CRMPostsList() {
  const posts = getAllPosts();

  return (
    <>
      <AdminHeader title="Post Management" />

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
              🔍 Search posts...
            </div>
          </div>
          <Link
            href="/crm/posts/new"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            + Add Post
          </Link>
        </div>

        <div className={styles.card}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Published Date</th>
                <th>Status</th>
                <th style={{ textAlign: "right" }}>Actions</th>
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
                      Published
                    </span>
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      href={`/crm/posts/${post.slug}`}
                      className={styles.badge}
                      style={{
                        cursor: "pointer",
                        border: "1px solid var(--gray-light)",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      Edit
                    </Link>
                    <form action={deletePostAction.bind(null, post.slug)}>
                      <button
                        type="submit"
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
                    </form>
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
