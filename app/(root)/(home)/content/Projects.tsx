import Title from "@/components/Layout/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const project = [
    {
      label: "Personal Website",
      image: "byanrkh.png",
      summary:
        "a digital space that showcases a person's best work, blog, backgrounds, etc.",
      tags: ["NextJS"],
      link: "https://github.com/byanrkh/site",
    },
    {
      label: "MDX Blog",
      image: "mdx-blog.png",
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
              key={p.label}
              href={p.link}
              className="border relative pb-12 border-[#252529] bg-[#141417] rounded-xl hover:scale-[1.01] duration-200"
            >
              <div className="p-5">
                <Image
                  src={`/assets/project/${p.image}`}
                  alt="mockup"
                  width={1000}
                  height={100}
                  className="border border-[#202024] rounded-lg"
                />
                <div className="mt-5 mb-5">
                  <h1 className="font-black text-lg">{p.label}</h1>
                  <p>{p.summary}</p>
                </div>
              </div>
              <div className="absolute bottom-0 w-full">
                <hr className="border-t border-t-[#252529] border-dashed" />
                <div className="p-5">
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
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
