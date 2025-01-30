import { formatDate } from "@/libs/Blog/formatDate";
import {
  components,
  getAllPosts,
  getPostBySlug,
  mdxOptions,
} from "@/libs/Blog/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Comment from "./content/Comment";
import Divider from "@/components/Layout/Divider";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  if (!params || !(await params).slug) {
    notFound();
  }
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <section>
      <header>
        <ul className="flex gap-3 text-sm">
          <li>
            <Link href={"/"} className="hover:underline">
              . .
            </Link>
          </li>
          /
          <li>
            <Link href={"/blog"} className="hover:underline">
              Blog
            </Link>
          </li>
          /
        </ul>
        <h1 className="text-5xl font-bold mb-5">{post.title}</h1>
        <hr className="mt-20 mb-5 border-t border-t-[#252529]" />
        <div className="flex justify-between items-center mx-2">
          <Link
            className="text-sm hover:underline bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500"
            href={`/blog/tags/${post.tags}`}
          >
            # {post.tags}
          </Link>{" "}
          <ul className="flex text-xs gap-2">
            <li>{formatDate(post.date)}</li>·<li>{post.readTime} min read</li>
          </ul>
        </div>
        <hr className="mt-5 mb-20 border-t border-t-[#252529]" />
      </header>
      <article className="prose lg:prose-base prose-invert">
        <MDXRemote
          source={(await post).content}
          options={mdxOptions}
          components={components}
        />
      </article>
      <p className="mt-16 text-zinc-500 text-sm font-mono text-center">
        ~ Its the End of{" "}
        <span className="text-violet-300 underline">{post.title}</span> ~
      </p>
      <hr className="mb-20 mt-5 border-t border-t-[#252529]" />
      <Comment />
    </section>
  );
}
