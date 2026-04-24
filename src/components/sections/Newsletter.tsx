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
          Đừng bỏ lỡ
          <br />
          <em>bài viết tiếp theo</em>
        </h2>
        <p>
          Mỗi tuần một bài — không spam, không quảng cáo. Chỉ là những suy nghĩ
          đáng đọc được gửi thẳng đến hộp thư của bạn.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email@của-bạn.com"
            aria-label="Địa chỉ email"
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
            {subscribed ? "✓ Đã đăng ký!" : "Đăng ký"}
          </button>
        </form>
        <p className={styles.note}>
          Hơn 1,240 người đang đọc · Hủy đăng ký bất kỳ lúc nào
        </p>
      </div>
    </section>
  );
}
