import { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostListItem from "@/components/ui/PostListItem";

export const metadata: Metadata = {
  title: "All Posts",
  description:
    "An archive of thoughts, notes, and articles on design and technology.",
};

export default function BlogListing() {
  const posts = getAllPosts();

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "6rem 2rem" }}>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "3rem",
          marginBottom: "1rem",
          letterSpacing: "-0.02em",
        }}
      >
        All Posts.
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "4rem" }}>
        Read all {posts.length} notes.
      </p>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts.map((post) => (
          <PostListItem key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
