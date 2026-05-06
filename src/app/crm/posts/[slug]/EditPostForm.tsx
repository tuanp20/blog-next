"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../../admin.module.css";
import { updatePostAction } from "@/lib/actions";
import { Post } from "@/lib/posts";

export default function EditPostForm({ post }: { post: Post }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: post.title,
    slug: post.slug,
    tag: post.tag,
    excerpt: post.excerpt,
    content: post.content,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await updatePostAction(post.slug, {
        ...post,
        ...formData,
      });

      alert("Post updated successfully!");
      router.push("/crm/posts");
    } catch (error) {
      console.error("Failed to update post:", error);
      alert("An error occurred while updating the post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.card} style={{ maxWidth: "800px" }}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Post Title</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter title..."
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
            <label>URL Slug</label>
            <input
              type="text"
              className={styles.input}
              placeholder="new-post-slug"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Category</label>
            <select
              className={styles.input}
              value={formData.tag}
              onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
            >
              <option value="Cuộc sống">Life</option>
              <option value="Podcast">Podcast</option>
              <option value="AI">Artificial Intelligence (AI)</option>
              <option value="Thiết kế">Design</option>
              <option value="Typography">Typography</option>
              <option value="Tư duy">Thinking</option>
              <option value="Nổi bật">Featured</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Short Description (Excerpt)</label>
          <input
            type="text"
            className={styles.input}
            placeholder="A short description of the post..."
            value={formData.excerpt}
            onChange={(e) =>
              setFormData({ ...formData, excerpt: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Content</label>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            placeholder="Write your post content here (Markdown/HTML supported)..."
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
            {isSubmitting ? "Saving..." : "Update Post"}
          </button>
          <Link
            href="/crm/posts"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
