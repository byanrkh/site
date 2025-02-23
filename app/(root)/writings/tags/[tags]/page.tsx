import PostCard from "@/components/Layout/PostCard";
import Title from "@/components/Layout/Title";
import { getAllPosts } from "@/libs/Blog/post";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ tags: string }>;
};

export default async function page({ params }: Props) {
  const tags = (await params).tags;
  const posts = getAllPosts().filter((post) => post.tags.includes(tags));

  if (!posts) {
    notFound();
  }

  return (
    <section>
      <Title emoji="#">
        Blog topic:{" "}
        <div className="ml-2 text-xl bg-[#18181b] border border-[#252529] text-zinc-500 px-1 rounded font-normal">
          # {tags}
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
