export interface Post {
  slug: string;
  number: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  dateISO: string;
  readTime: string;
  audioDuration?: string; // added for Podcast
}

export const POSTS: Post[] = [
  {
    slug: "podcast-tap-1-ai-tuong-lai",
    number: "01",
    tag: "Podcast",
    title: "Tập 1: Trí tuệ nhân tạo có thực sự hiểu chúng ta?",
    excerpt:
      "Trong tập đầu tiên, chúng ta cùng bàn về cách các mô hình ngôn ngữ lớn hoạt động đằng sau những đoạn chat và giới hạn của cảm xúc máy móc.",
    content: "<p>Bản ghi âm chi tiết sẽ được cập nhật sớm...</p>",
    date: "10 Tháng 5, 2025",
    dateISO: "2025-05-10",
    readTime: "Nghe",
    audioDuration: "45 phút",
  },
  {
    slug: "chuyen-chay-bo-moi-sang",
    number: "02",
    tag: "Cuộc sống",
    title: "Cái giá của một thói quen mới",
    excerpt:
      "Sau 30 ngày chạy bộ liên tục, điều tôi nhận ra không phải là thể lực tốt lên, mà là thời gian trống trải bị thu hẹp một cách có chủ đích.",
    content: "<p>Nội dung chi tiết...</p>",
    date: "5 Tháng 5, 2025",
    dateISO: "2025-05-05",
    readTime: "4 phút",
  },
  {
    slug: "ai-khong-thay-the-designer",
    number: "03",
    tag: "AI",
    title: "AI không thay thế designer — nó thay thế việc không dùng AI",
    excerpt:
      "Phân tích làn sóng dịch chuyển từ người thực thi tác vụ sang người đặt câu hỏi và đạo diễn sản phẩm.",
    content: "<p>Nội dung chi tiết...</p>",
    date: "25 Tháng 4, 2025",
    dateISO: "2025-04-25",
    readTime: "8 phút",
  },
  {
    slug: "su-co-doc-thoi-dai-so",
    number: "04",
    tag: "Cuộc sống",
    title: "Sự cô độc giữa hàng nghìn kết nối",
    excerpt:
      "Tại sao chúng ta lại cảm thấy xa lạ nhất trong chính lúc được bao quanh bởi mạng lưới kết nối vô tận?",
    content: "<p>Nội dung chi tiết...</p>",
    date: "15 Tháng 4, 2025",
    dateISO: "2025-04-15",
    readTime: "6 phút",
  },
  {
    slug: "khoang-trang-khong-phai-lang-phi",
    number: "00",
    tag: "Nổi bật",
    title: "Khoảng trắng không phải là sự lãng phí",
    excerpt:
      "Tại sao những trang web tốt nhất lại có ít thứ hơn bạn nghĩ — và tại sao ít lại có thể là nhiều hơn.",
    content: "<p>Content for this post goes here.</p>",
    date: "12 Tháng 4, 2025",
    dateISO: "2025-04-12",
    readTime: "6 phút đọc",
  },
  {
    slug: "mau-sac-va-cam-xuc",
    number: "01",
    tag: "Thiết kế",
    title: "Màu sắc và cảm xúc trong giao diện người dùng",
    excerpt:
      "Cách não bộ xử lý màu sắc — và tại sao vàng lại tạo ra cảm giác khác với màu xanh.",
    content: "<p>Content for this post goes here.</p>",
    date: "18 Tháng 4, 2025",
    dateISO: "2025-04-18",
    readTime: "5 phút đọc",
  },
  {
    slug: "serif-hay-sans-serif",
    number: "02",
    tag: "Typography",
    title: "Serif hay Sans-serif: Câu hỏi sai lầm",
    excerpt:
      "Vấn đề không phải là kiểu chữ nào bạn chọn, mà là bạn hiểu tại sao mình chọn nó.",
    content: "<p>Content for this post goes here.</p>",
    date: "10 Tháng 4, 2025",
    dateISO: "2025-04-10",
    readTime: "7 phút đọc",
  },
  {
    slug: "quy-tac-80-20",
    number: "03",
    tag: "Tư duy",
    title: "Quy tắc 80/20 trong thiết kế sản phẩm",
    excerpt:
      "Phần lớn giá trị đến từ một tỷ lệ nhỏ các tính năng. Làm sao tìm ra phần đó?",
    content: "<p>Content for this post goes here.</p>",
    date: "3 Tháng 4, 2025",
    dateISO: "2025-04-03",
    readTime: "4 phút đọc",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return POSTS;
}
