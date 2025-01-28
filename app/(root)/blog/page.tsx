import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/post";
import React from "react";

export default async function page() {
  const generatePost = getAllPosts();
  return (
    <section>
      <Title>Blog</Title>
      <div className="grid grid-cols-1 gap-3">
        {generatePost.map((post) => {
          return <PostCard key={post.slug} post={post} />;
        })}
      </div>
    </section>
  );
}
