import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/Blog/post";
import Link from "next/link";
import React from "react";

export default async function Blog() {
  const generatePost = getAllPosts();

  return (
    <section>
      <div className="flex justify-between items-center">
        <Title>Latest Blogs</Title>
        <Link
          href={"/writings"}
          className="text-xs text-zinc-500 -mt-5 hover:underline"
        >
          view more
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {generatePost
          .map((post) => {
            return <PostCard key={post.slug} post={post} />;
          })
          .slice(0, 3)}
      </div>
    </section>
  );
}
