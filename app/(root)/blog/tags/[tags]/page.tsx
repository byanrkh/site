import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/post";
import { notFound } from "next/navigation";
import React from "react";

export default function page({ params }: { params: { tags: string } }) {
  const posts = getAllPosts().filter((post) => post.tags.includes(params.tags));

  if (!posts) {
    notFound();
  }

  return (
    <section>
      <Title>
        Blog topic:{" "}
        <div className="ml-2 text-xl bg-[#18181b] border border-[#252529] px-1 rounded font-normal">
          # {params.tags}
        </div>
      </Title>
      <div className="grid grid-cols-1 gap-3">
        {posts.map((post) => {
          return <PostCard key={post.slug} post={post} />;
        })}
      </div>
    </section>
  );
}
