import Link from "next/link";
import FeaturedCard from "../ui/FeaturedCard";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>
          Viết để
          <br />
          <em>suy nghĩ</em>
          <br />
          rõ hơn.
        </h1>
        <p>
          Những ghi chép về thiết kế, công nghệ và cách con người tạo ra ý nghĩa
          từ thế giới số.
        </p>
        <div className={styles.cta}>
          <Link href="/blog" className={styles.btnPrimary}>
            Đọc bài mới nhất
          </Link>
          <Link href="/#gioi-thieu" className={styles.btnGhost}>
            Về blog này →
          </Link>
        </div>
      </div>

      <div className={styles.featured}>
        <FeaturedCard
          label="Nổi bật"
          title="Những điều đáng học: 5 bậc thang của một mối quan hệ trọn vẹn"
          excerpt="Bắt đầu với ngoại hình, kính trọng vì tài hoa, hợp nhau vì tính cách... Những suy ngẫm về hành trình kết nối với một con người."
          author="Tuân 20P"
          date="24 Tháng 4"
          readTime="5 phút đọc"
          slug="nhung-dieu-dang-hoc"
        />
      </div>
    </section>
  );
}
