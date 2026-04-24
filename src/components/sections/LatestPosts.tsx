import Link from "next/link";
import PostCard from "../ui/PostCard";
import styles from "./Sections.module.css"; // Shared section styles

// Temporary mock data — will be moved to lib/posts.ts later
const MOCK_POSTS = [
  {
    number: "01",
    tag: "Thiết kế",
    title: "Màu sắc và cảm xúc trong giao diện người dùng",
    excerpt:
      "Cách não bộ xử lý màu sắc — và tại sao vàng lại tạo ra cảm giác khác với màu xanh.",
    date: "18 Tháng 4, 2025",
    readTime: "5 phút đọc",
    slug: "mau-sac-va-cam-xuc",
  },
  {
    number: "02",
    tag: "Typography",
    title: "Serif hay Sans-serif: Câu hỏi sai lầm",
    excerpt:
      "Vấn đề không phải là kiểu chữ nào bạn chọn, mà là bạn hiểu tại sao mình chọn nó.",
    date: "10 Tháng 4, 2025",
    readTime: "7 phút đọc",
    slug: "serif-hay-sans-serif",
  },
  {
    number: "03",
    tag: "Tư duy",
    title: "Quy tắc 80/20 trong thiết kế sản phẩm",
    excerpt:
      "Phần lớn giá trị đến từ một tỷ lệ nhỏ các tính năng. Làm sao tìm ra phần đó?",
    date: "3 Tháng 4, 2025",
    readTime: "4 phút đọc",
    slug: "quy-tac-80-20",
  },
];

export default function LatestPosts() {
  return (
    <section className={styles.section} id="bai-viet">
      <div className={styles.header}>
        <h2>
          Bài viết <span>mới nhất</span>
        </h2>
        <Link href="/blog" className={styles.seeAll}>
          Xem tất cả →
        </Link>
      </div>

      <div className={styles.grid}>
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
