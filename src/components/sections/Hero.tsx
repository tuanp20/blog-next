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
          <em>gói ghém tâm tư,</em>
          <br />
          thấy đời rõ hơn.
        </h1>
        <p>
          Giữa thế giới số ồn ào, mình chọn cách dừng lại để nhặt nhạnh những mảnh vụn từ thiết kế, công nghệ và cuộc sống.
          Đây là nơi mình thanh lọc tâm trí, đi tìm những giá trị nhân văn ẩn sau mỗi điểm chạm thường nhật – để thấy mình, và thấy thế giới trọn vẹn hơn.
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
