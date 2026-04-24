import Link from "next/link";
import Logo from "@/components/ui/Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.active}>
            Trang chủ
          </Link>
          <Link href="/category/cuoc-song">Cuộc sống</Link>
          <Link href="/category/podcast">Podcast</Link>
          <Link href="/category/ai">AI</Link>
        </nav>
        <Link href="/#newsletter" className={styles.btnSubscribe}>
          Đăng ký
        </Link>
      </div>
    </header>
  );
}
