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
          title="Khoảng trắng không phải là sự lãng phí"
          excerpt="Tại sao những trang web tốt nhất lại có ít thứ hơn bạn nghĩ — và tại sao ít lại có thể là nhiều hơn."
          author="Trang Nguyễn"
          date="12 Tháng 4"
          readTime="6 phút đọc"
          slug="khoang-trang-khong-phai-lang-phi"
        />
      </div>
    </section>
  );
}
