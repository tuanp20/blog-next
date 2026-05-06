"use client";

import { useSyncExternalStore, useEffect } from "react";

export type Language = "en" | "vi";

const translations = {
  en: {
    nav: {
      home: "Home",
      lifestyle: "Lifestyle",
      podcast: "Podcast",
      ai: "AI",
      subscribe: "Subscribe",
    },
    footer: {
      tagline:
        "A blog about personal experiences, podcasts, and deep insights on Artificial Intelligence.",
      explore: "Explore",
      allPosts: "All Posts",
      listenPodcast: "Listen to Podcast",
      topics: "Topics",
      lifestyle: "Lifestyle",
      podcast: "Podcast",
      ai: "Artificial Intelligence",
      connect: "Connect",
      aboutBlog: "About This Blog",
      rights: "All rights reserved",
      built: "Built with ♥ and endless inspiration",
    },
    marquee: [
      "Lifestyle",
      "Podcast",
      "Artificial Intelligence",
      "Personal Growth",
      "Technology",
      "UX / UI",
      "Stories",
      "Reflections",
    ],
    hero: {
      line1: "Writing to",
      line2: "make sense of things,",
      line3: "and see life more clearly.",
      body: "In a noisy digital world, I choose to pause and gather fragments from design, technology, and everyday life. This is where I clear my mind and search for the human values hidden in each ordinary moment — to better understand myself, and the world around me.",
      readLatest: "Read latest posts",
      about: "About this blog →",
      featuredLabel: "Featured",
    },
    latestPosts: {
      heading: "Latest",
      headingSpan: "Posts",
      seeAll: "See all →",
    },
    deepReads: {
      heading: "Deep",
      headingSpan: "Reads",
      seeAll: "See all →",
    },
    newsletter: {
      heading1: "Don't miss",
      heading2: "the next post",
      body: "One post a week — no spam, no ads. Just thoughtful writing delivered straight to your inbox.",
      placeholder: "your@email.com",
      ariaLabel: "Email address",
      subscribe: "Subscribe",
      subscribed: "✓ Subscribed!",
      note: "1,240+ readers · Unsubscribe anytime",
    },
    topics: {
      heading1: "Explore",
      headingSpan: "Topics",
    },
    topicNames: {
      lifestyle: "Lifestyle",
      podcast: "Podcast",
      ai: "Artificial Intelligence",
      design: "Design",
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      lifestyle: "Cuộc sống",
      podcast: "Podcast",
      ai: "AI",
      subscribe: "Đăng ký",
    },
    footer: {
      tagline:
        "Blog về trải nghiệm sống, podcast, và những góc nhìn sâu về Trí tuệ nhân tạo.",
      explore: "Khám phá",
      allPosts: "Tất cả bài viết",
      listenPodcast: "Nghe Podcast",
      topics: "Chủ đề",
      lifestyle: "Cuộc sống",
      podcast: "Podcast",
      ai: "Trí tuệ nhân tạo",
      connect: "Kết nối",
      aboutBlog: "Về blog này",
      rights: "Mọi quyền được bảo lưu",
      built: "Được xây dựng với ♥ và cảm hứng bất tận",
    },
    marquee: [
      "Cuộc sống",
      "Podcast",
      "Trí tuệ nhân tạo",
      "Phát triển bản thân",
      "Công nghệ",
      "UX / UI",
      "Stories",
      "Suy ngẫm",
    ],
    hero: {
      line1: "Viết để",
      line2: "gói ghém tâm tư,",
      line3: "thấy đời rõ hơn.",
      body: "Trong thế giới số ồn ào, tôi chọn dừng lại và nhặt nhạnh từng mảnh vỡ từ thiết kế, công nghệ và cuộc sống thường ngày. Đây là nơi tôi thanh lọc tâm trí, tìm kiếm những giá trị nhân văn ẩn sau từng khoảnh khắc bình thường — để hiểu rõ hơn về bản thân, và thế giới xung quanh.",
      readLatest: "Đọc bài mới nhất",
      about: "Về blog này →",
      featuredLabel: "Nổi bật",
    },
    latestPosts: {
      heading: "Bài viết",
      headingSpan: "mới nhất",
      seeAll: "Xem tất cả →",
    },
    deepReads: {
      heading: "Bài đọc",
      headingSpan: "sâu",
      seeAll: "Xem tất cả →",
    },
    newsletter: {
      heading1: "Đừng bỏ lỡ",
      heading2: "bài viết tiếp theo",
      body: "Mỗi tuần một bài — không spam, không quảng cáo. Chỉ là những bài viết suy ngẫm gửi thẳng đến hộp thư của bạn.",
      placeholder: "email@của-bạn.com",
      ariaLabel: "Địa chỉ email",
      subscribe: "Đăng ký",
      subscribed: "✓ Đã đăng ký!",
      note: "1.240+ độc giả · Hủy đăng ký bất cứ lúc nào",
    },
    topics: {
      heading1: "Chủ đề",
      headingSpan: "khám phá",
    },
    topicNames: {
      lifestyle: "Cuộc sống",
      podcast: "Podcast",
      ai: "Trí tuệ nhân tạo",
      design: "Thiết kế",
    },
  },
} as const;

export type Translations = typeof translations.en;

// ------------------------------------
// Module-level singleton store
// No Provider needed — works in any client component
// ------------------------------------
let _lang: Language = "en";
const _listeners = new Set<() => void>();

function _notify() {
  _listeners.forEach((l) => l());
}

export function toggleLanguage() {
  const next = _lang === "en" ? "vi" : "en";
  _lang = next;
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", next);
  }
  _notify();
}

export function useLanguage() {
  const lang = useSyncExternalStore(
    (listener) => {
      _listeners.add(listener);
      return () => _listeners.delete(listener);
    },
    () => _lang,
    () => "en" as Language
  );

  return {
    lang,
    t: translations[lang] as Translations,
    toggle: toggleLanguage,
  };
}

// Reads localStorage on mount and syncs the global store
export function LanguageInit() {
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved === "en" || saved === "vi") {
      _lang = saved;
      _notify();
    }
  }, []);
  return null;
}
