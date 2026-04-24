"use server";

import { revalidatePath } from "next/cache";
import { createPost, updatePost, deletePost, Post } from "./posts";

export async function createPostAction(post: Post) {
  await createPost(post);
  revalidatePath("/crm/posts");
  revalidatePath("/blog");
  revalidatePath("/");
}

export async function updatePostAction(slug: string, post: Post) {
  await updatePost(slug, post);
  revalidatePath("/crm/posts");
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/blog");
  revalidatePath("/");
}

export async function deletePostAction(slug: string) {
  await deletePost(slug);
  revalidatePath("/crm/posts");
  revalidatePath("/blog");
  revalidatePath("/");
}
