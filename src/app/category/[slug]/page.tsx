import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/posts";
import PostListItem from "@/components/ui/PostListItem";
import PodcastCard from "@/components/ui/PodcastCard";

interface CategoryPageProps {
  params: { slug: string };
}

// Helper to map UI slug to internal Data Tags
const mapSlugToTag = (slug: string) => {
  if (slug === "cuoc-song") return "Lifestyle";
  if (slug === "podcast") return "Podcast";
  if (slug === "ai") return "AI";
  return null;
};

export async function generateStaticParams() {
  return [{ slug: "cuoc-song" }, { slug: "podcast" }, { slug: "ai" }];
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const tag = mapSlugToTag(params.slug);
  if (!tag) return { title: "Not Found" };

  return {
    title: `Category: ${tag}`,
    description: `Explore articles and podcasts in the ${tag} category.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const tag = mapSlugToTag(params.slug);

  if (!tag) {
    notFound();
  }

  // Filter posts by tag
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter((post) => post.tag === tag);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "6rem 2rem" }}>
      <div style={{ marginBottom: "4rem" }}>
        <span
          style={{
            fontSize: "0.85rem",
            color: "var(--yellow-dim)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 600,
          }}
        >
          Category
        </span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "3rem",
            letterSpacing: "-0.02em",
            marginTop: "0.5rem",
          }}
        >
          {tag}.
        </h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {filteredPosts.length === 0 ? (
          <p style={{ color: "var(--text-secondary)" }}>
            No content available for this category yet.
          </p>
        ) : (
          filteredPosts.map((post) => {
            // If Podcast, render PodcastCard
            if (tag === "Podcast") {
              return (
                <PodcastCard
                  key={post.slug}
                  number={post.number}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  audioDuration={post.audioDuration || "0 min"}
                  slug={post.slug}
                />
              );
            }
            // Default: render post list item
            return <PostListItem key={post.slug} {...post} />;
          })
        )}
      </div>
    </div>
  );
}
