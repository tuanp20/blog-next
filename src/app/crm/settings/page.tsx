"use client";
import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import styles from "../admin.module.css";

export default function CRMSettings() {
  const [siteName, setSiteName] = useState("TWENTY-PI | Blog Tối Giản");
  const [siteDesc, setSiteDesc] = useState(
    "Blog tối giản về thiết kế, công nghệ và cuộc sống.",
  );
  const [itemsPerPage, setItemsPerPage] = useState("10");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cài đặt đã được lưu (Mock)!");
  };

  return (
    <>
      <AdminHeader title="Cài đặt hệ thống" />

      <main className={styles.main}>
        <div className={styles.card} style={{ maxWidth: "800px" }}>
          <form onSubmit={handleSubmit}>
            <h3
              style={{
                marginBottom: "1.5rem",
                fontSize: "1.2rem",
                fontFamily: "var(--font-display)",
              }}
            >
              Thông tin chung
            </h3>

            <div className={styles.formGroup}>
              <label>Tên Website (Site Name)</label>
              <input
                type="text"
                className={styles.input}
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Mô tả ngắn (Description - Meta SEO)</label>
              <textarea
                className={styles.input}
                style={{ minHeight: "80px", resize: "vertical" }}
                value={siteDesc}
                onChange={(e) => setSiteDesc(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Số bài viết trên một trang</label>
              <select
                className={styles.input}
                style={{ width: "200px" }}
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(e.target.value)}
              >
                <option value="5">5 bài</option>
                <option value="10">10 bài</option>
                <option value="15">15 bài</option>
                <option value="20">20 bài</option>
              </select>
            </div>

            <h3
              style={{
                margin: "3rem 0 1.5rem",
                fontSize: "1.2rem",
                fontFamily: "var(--font-display)",
                color: "#c5221f",
              }}
            >
              Vùng nguy hiểm
            </h3>

            <div
              className={styles.card}
              style={{ border: "1px solid #fce8e6", background: "#fef7f6" }}
            >
              <h4 style={{ marginBottom: "0.5rem", color: "#c5221f" }}>
                Bảo trì dữ liệu
              </h4>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1rem",
                }}
              >
                Xóa toàn bộ cache hoặc reset bộ đếm dữ liệu người dùng.
              </p>
              <button
                type="button"
                className={styles.btn}
                style={{ background: "#c5221f", color: "#fff" }}
              >
                Clear Cache Dữ Liệu
              </button>
            </div>

            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--gray-light)",
              }}
            >
              <button
                type="submit"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Lưu cấu hình
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
