import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.dateISO).toISOString(),
      authors: ["Tuân 20P"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function PostDetail({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: [
      {
        "@type": "Person",
        name: "Tuân 20P",
        url: "https://twentypi.com/",
      },
    ],
    datePublished: new Date(post.dateISO).toISOString(),
  };

  return (
    <article style={{ maxWidth: 720, margin: "0 auto", padding: "6rem 2rem" }}>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header style={{ marginBottom: "4rem" }}>
        <div
          style={{
            display: "inline-block",
            background: "var(--yellow)",
            color: "var(--black)",
            padding: "0.3rem 0.75rem",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          {post.tag}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.5rem",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          {post.title}
        </h1>
        <div
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          By Tuân 20P <span>·</span> {post.date} <span>·</span> {post.readTime}
        </div>
      </header>

      <div
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.8,
          color: "var(--text-primary)",
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
