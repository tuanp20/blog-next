import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import { getPostBySlug } from "@/lib/posts";
import EditPostForm from "./EditPostForm";
import styles from "../../admin.module.css";

interface EditPostPageProps {
  params: { slug: string };
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <AdminHeader title={`Sửa bài viết: ${post.title}`} />
      <main className={styles.main}>
        <EditPostForm post={post} />
      </main>
    </>
  );
}
