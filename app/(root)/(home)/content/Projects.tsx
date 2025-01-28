import Title from "@/components/Layout/Title";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const project = [
    {
      label: "Personal Website",
      summary:
        "a digital space that showcases a person&#39;s best work, blog, backgrounds, etc.",
      tags: ["NextJS"],
      link: "https://github.com/byanrkh/site",
    },
    {
      label: "MDX Blog",
      summary: "Minimal looking simple mdx Blog system using NextJS!",
      tags: ["NextJS", "MDX"],
      link: "https://github.com/byanrkh/mdx-blog",
    },
  ];

  return (
    <section>
      <Title>Projects</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {project.map((p) => {
          return (
            <Link
              key={p.link}
              href={p.link}
              className="border border-[#202024] p-4 rounded group hover:scale-[1.02] duration-75"
              target="_blank"
            >
              <h1 className="group-hover:underline">{p.label}</h1>
              <p className="mt-2 mb-4 text-sm text-[#a6a6a6]">{p.summary}</p>
              <ul className="flex gap-1">
                {p.tags.map((tag) => {
                  return (
                    <li
                      key={tag}
                      className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit"
                    >
                      # {tag}
                    </li>
                  );
                })}
              </ul>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
