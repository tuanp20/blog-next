import Link from "next/link";
import Logo from "@/components/ui/Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Logo />
          </Link>
          <p>
            Blog về trải nghiệm cá nhân, podcast và những góc nhìn sâu sắc về
            Trí tuệ nhân tạo.
          </p>
        </div>

        <div className={styles.col}>
          <h4>Khám phá</h4>
          <ul>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li>
              <Link href="/blog">Tất cả bài viết</Link>
            </li>
            <li>
              <Link href="/category/podcast">Nghe Podcast</Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Chủ đề</h4>
          <ul>
            <li>
              <Link href="/category/cuoc-song">Cuộc sống</Link>
            </li>
            <li>
              <Link href="/category/podcast">Podcast</Link>
            </li>
            <li>
              <Link href="/category/ai">Trí tuệ nhân tạo</Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Kết nối</h4>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
            </li>
            <li>
              <Link href="/#gioi-thieu">Về bài viết</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} TWENTY-PI <span>✦</span> Mọi quyền được
          bảo lưu
        </p>
        <p>
          Được xây dựng với <span>♥</span> và cảm hứng bất tận
        </p>
      </div>
    </footer>
  );
}
