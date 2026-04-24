import Link from "next/link";
import PostListItem from "../ui/PostListItem";
import styles from "./Sections.module.css";

const MOCK_DEEP_READS = [
  {
    tag: "Thiết kế hệ thống",
    title: "Tại sao design systems thất bại — và cách không để điều đó xảy ra",
    excerpt:
      "Hầu hết các design system chết không phải vì thiếu component, mà vì thiếu văn hóa.",
    date: "25 Tháng 3",
    readTime: "12 phút",
    slug: "tai-sao-design-systems-that-bai",
  },
  {
    tag: "UX Research",
    title: "Test 5 người dùng, không phải 50 — sự thật đằng sau con số kỳ diệu",
    excerpt:
      "Jakob Nielsen từng nói 5 người là đủ. Điều đó vẫn còn đúng trong thế giới 2025 không?",
    date: "18 Tháng 3",
    readTime: "9 phút",
    slug: "test-5-nguoi-dung",
  },
  {
    tag: "Công nghệ",
    title:
      "AI không thay thế designer — nó thay thế những designer không dùng AI",
    excerpt:
      "Cuộc dịch chuyển thực sự: từ người thực thi sang người đặt câu hỏi đúng hơn.",
    date: "10 Tháng 3",
    readTime: "15 phút",
    slug: "ai-khong-thay-the-designer",
  },
  {
    tag: "Phong cách tối giản",
    title:
      "Học từ Dieter Rams: 10 nguyên tắc thiết kế tốt vẫn còn nguyên giá trị",
    excerpt:
      "Được viết năm 1970s, nhưng từng nguyên tắc đều mô tả chính xác những lỗi mà chúng ta vẫn đang mắc hôm nay.",
    date: "1 Tháng 3",
    readTime: "11 phút",
    slug: "hoc-tu-dieter-rams",
  },
];

export default function DeepReads() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>
          Bài đọc <span>sâu</span>
        </h2>
        <Link href="/blog" className={styles.seeAll}>
          Xem tất cả →
        </Link>
      </div>

      <div className={styles.list}>
        {MOCK_DEEP_READS.map((post) => (
          <PostListItem key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
