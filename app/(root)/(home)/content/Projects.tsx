import Title from "@/components/Layout/Title";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <section>
      <Title>Projects</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          href={"https://byanrkh.my.id"}
          className="border border-[#202024] p-4 rounded group hover:scale-[1.02] duration-75"
        >
          <h1 className="group-hover:underline">Portfolio</h1>
          <p className="mt-2 mb-4 text-sm text-[#a6a6a6]">
            a digital space that showcases a person's best work, blog,
            backgrounds, etc.
          </p>
          <div className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
            # NextJS
          </div>
        </Link>
        <Link
          href={"https://github.com/byanrkh/portfolio"}
          className="border border-[#202024] p-4 rounded group hover:scale-[1.02] duration-75"
        >
          <h1 className="group-hover:underline">NextJS portfolio template</h1>
          <p className="mt-2 mb-4 text-sm text-[#a6a6a6]">
            portfolio template using Next.js to showcase personal or
            professional projects, etc.
          </p>
          <div className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
            # NextJS
          </div>
        </Link>
      </div>
    </section>
  );
}
