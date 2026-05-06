"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setSubscribed(true);
    }
  };

  return (
    <section className={styles.newsletter} id="newsletter">
      <div className={styles.inner}>
        <h2>
          {t.newsletter.heading1}
          <br />
          <em>{t.newsletter.heading2}</em>
        </h2>
        <p>{t.newsletter.body}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={t.newsletter.placeholder}
            aria-label={t.newsletter.ariaLabel}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribed}
            required
          />
          <button
            type="submit"
            disabled={subscribed}
            className={subscribed ? styles.success : ""}
          >
            {subscribed ? t.newsletter.subscribed : t.newsletter.subscribe}
          </button>
        </form>
        <p className={styles.note}>{t.newsletter.note}</p>
      </div>
    </section>
  );
}
