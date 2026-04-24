import { Metadata } from "next";
import AdminSidebar from "@/components/admin/AdminSidebar";
import styles from "./admin.module.css";

export const metadata: Metadata = {
  title: "TWENTY-PI CRM",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.adminLayout}>
      <AdminSidebar />
      <div className={styles.contentArea}>{children}</div>
    </div>
  );
}
