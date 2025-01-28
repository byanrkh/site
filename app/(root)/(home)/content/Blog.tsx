import Title from "@/components/Layout/Title";
import Link from "next/link";
import React from "react";

export default async function Blog() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <Title>Latest Blogs</Title>
        <Link
          href={"/blog"}
          className="text-xs text-zinc-500 -mt-5 hover:underline"
        >
          view more
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <Link
          href={`/blog/aaa`}
          className="border border-[#202024] p-4 rounded group"
        >
          <h1 className="group-hover:underline">aaa</h1>
          <div className="mt-1 flex justify-between items-center">
            <div className="flex gap-1">
              {/* {post.tags.map((tag) => (
            <div
              key={tag}
              className="text-xs bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500"
            >
              # {tag}
            </div>
          ))} */}
              <div className="text-xs bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500">
                # NextJS
              </div>
            </div>
            <p className="text-xs text-zinc-400">2 Jan, 2025</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
