"use client";
import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import styles from "../admin.module.css";

export default function CRMSettings() {
  const [siteName, setSiteName] = useState("TWENTY-PI | Life in Many Colors");
  const [siteDesc, setSiteDesc] = useState(
    "My perspectives on life and technology. Writing to think more clearly.",
  );
  const [itemsPerPage, setItemsPerPage] = useState("10");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Settings saved (Mock)!");
  };

  return (
    <>
      <AdminHeader title="System Settings" />

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
              General Information
            </h3>

            <div className={styles.formGroup}>
              <label>Website Name (Site Name)</label>
              <input
                type="text"
                className={styles.input}
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Short Description (Description - Meta SEO)</label>
              <textarea
                className={styles.input}
                style={{ minHeight: "80px", resize: "vertical" }}
                value={siteDesc}
                onChange={(e) => setSiteDesc(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Posts Per Page</label>
              <select
                className={styles.input}
                style={{ width: "200px" }}
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(e.target.value)}
              >
                <option value="5">5 posts</option>
                <option value="10">10 posts</option>
                <option value="15">15 posts</option>
                <option value="20">20 posts</option>
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
              Danger Zone
            </h3>

            <div
              className={styles.card}
              style={{ border: "1px solid #fce8e6", background: "#fef7f6" }}
            >
              <h4 style={{ marginBottom: "0.5rem", color: "#c5221f" }}>
                Data Maintenance
              </h4>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1rem",
                }}
              >
                Clear all cache or reset user data counters.
              </p>
              <button
                type="button"
                className={styles.btn}
                style={{ background: "#c5221f", color: "#fff" }}
              >
                Clear Data Cache
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
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
