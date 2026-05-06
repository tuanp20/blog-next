"use client";
import { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

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
          Don&apos;t miss
          <br />
          <em>the next post</em>
        </h2>
        <p>
          One post a week — no spam, no ads. Just thoughtful writing delivered
          straight to your inbox.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
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
            {subscribed ? "✓ Subscribed!" : "Subscribe"}
          </button>
        </form>
        <p className={styles.note}>
          1,240+ readers · Unsubscribe anytime
        </p>
      </div>
    </section>
  );
}
