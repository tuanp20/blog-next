"use client";

import { useState } from "react";
import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import styles from "../../admin.module.css";

export default function NewPostPage() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    tag: "Cuộc sống",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mock Save Post:", formData);
    alert("Bài viết đã được lưu thành công (Mock)!");
  };

  return (
    <>
      <AdminHeader title="Thêm bài viết mới" />

      <main className={styles.main}>
        <div className={styles.card} style={{ maxWidth: "800px" }}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Tiêu đề bài viết</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Nhập tiêu đề..."
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              <div className={styles.formGroup}>
                <label>Đường dẫn (Slug)</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="bai-viet-moi"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Chuyên mục</label>
                <select
                  className={styles.input}
                  value={formData.tag}
                  onChange={(e) =>
                    setFormData({ ...formData, tag: e.target.value })
                  }
                >
                  <option value="Cuộc sống">Cuộc sống</option>
                  <option value="Podcast">Podcast</option>
                  <option value="AI">Trí tuệ nhân tạo (AI)</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Nội dung</label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Viết nội dung bài của bạn ở đây (hỗ trợ Markdown/HTML)..."
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                required
              />
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <button
                type="submit"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Lưu bài viết
              </button>
              <Link
                href="/crm/posts"
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                Hủy
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
