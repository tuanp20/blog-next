import styles from "./Logo.module.css";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  return (
    <span className={`${styles.logo} ${styles[variant]} ${styles[size]}`}>
      <span className={styles.wordmark}>TWENTY-BLOG</span>
    </span>
  );
}
