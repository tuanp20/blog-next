"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import styles from "../../admin.module.css";
import { createPostAction } from "@/lib/actions";

export default function NewPostPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    tag: "Cuộc sống",
    excerpt: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const now = new Date();
      const dateStr = now.toLocaleDateString("vi-VN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const dateISO = now.toISOString().split("T")[0];

      await createPostAction({
        ...formData,
        number: "00", // Default or calculated
        date: dateStr,
        dateISO: dateISO,
        readTime: "5 phút", // Mock
      });

      alert("Bài viết đã được tạo thành công!");
      router.push("/crm/posts");
    } catch (error) {
      console.error("Failed to create post:", error);
      alert("Đã có lỗi xảy ra khi tạo bài viết.");
    } finally {
      setIsSubmitting(false);
    }
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
              <label>Mô tả ngắn (Excerpt)</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Một đoạn mô tả ngắn về bài viết..."
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
                required
              />
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
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang lưu..." : "Lưu bài viết"}
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
