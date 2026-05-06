"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import styles from "@/app/crm/admin.module.css";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/crm", icon: "📊" },
  { label: "Posts", href: "/crm/posts", icon: "📝" },
  { label: "Categories", href: "/crm/categories", icon: "📁" },
  { label: "Settings", href: "/crm/settings", icon: "⚙️" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Link href="/crm" className={styles.logo}>
          <Logo variant="light" size="sm" />
        </Link>
        <span className={styles.subtitle}>Workspace</span>
      </div>

      <nav className={styles.sidebarNav}>
        {NAV_ITEMS.map((item) => {
          // Check if active (handle exact match for /crm, and prefix for others like /crm/posts/new)
          const isActive =
            item.href === "/crm"
              ? pathname === "/crm"
              : pathname?.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? styles.active : ""}
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: "auto", padding: "1.5rem 1rem" }}>
        <Link
          href="/"
          style={{
            color: "rgba(250,250,248,0.4)",
            textDecoration: "none",
            fontSize: "0.8rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>←</span> Back to Blog
        </Link>
      </div>
    </aside>
  );
}
