import fs from "fs";
import path from "path";

export interface Post {
  slug: string;
  number: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  dateISO: string;
  readTime: string;
  audioDuration?: string;
}

const postsFilePath = path.join(process.cwd(), "data", "posts.json");

function getPostsData(): Post[] {
  if (!fs.existsSync(postsFilePath)) {
    return [];
  }
  const jsonData = fs.readFileSync(postsFilePath, "utf-8");
  return JSON.parse(jsonData);
}

function savePostsData(posts: Post[]) {
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), "utf-8");
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getPostsData();
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return getPostsData();
}

// Server Actions (to be moved to a separate file if needed, but for now here is fine)
export async function createPost(post: Post) {
  const posts = getPostsData();
  posts.push(post);
  savePostsData(posts);
}

export async function updatePost(slug: string, updatedPost: Post) {
  const posts = getPostsData();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index !== -1) {
    posts[index] = updatedPost;
    savePostsData(posts);
  }
}

export async function deletePost(slug: string) {
  const posts = getPostsData();
  const filteredPosts = posts.filter((p) => p.slug !== slug);
  savePostsData(filteredPosts);
}
