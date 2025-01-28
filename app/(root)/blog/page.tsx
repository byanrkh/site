import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/blog/getPost";
import React from "react";

export default async function page() {
  const posts = await getAllPosts();

  return (
    <section>
      <Title>Blog</Title>
      <div className="grid grid-cols-1 gap-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
