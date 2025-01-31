import Link from "next/link";
import type { Post } from "@/types";
import { formatDate } from "@/libs/Blog/formatDate";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      key={post.slug}
      className="border border-[#252529] bg-[#141417] p-5 rounded-xl hover:scale-[1.01] duration-200"
    >
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="h-14 w-14 border border-[#252529] bg-[#1a1a1e] rounded-xl flex items-center justify-center text-2xl">
            {post.emoji}
          </div>
          <div className="mt-1">
            <h2 className="text-lg font-black flex gap-2">
              {post.title}
              <div className="block sm:hidden text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500">
                # {post.tags}
              </div>
            </h2>
            <ul className="text-zinc-400 flex items-center gap-2 text-sm">
              <li>{post.readTime} min read</li>
              <div className="bg-zinc-400 rounded-full h-[3px] w-[3px] aspect-square flex-none relative "></div>
              <li>{formatDate(post.date)}</li>
            </ul>
          </div>
        </div>
        <ul>
          <ul className="sm:flex gap-1 hidden">
            <div className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500">
              # {post.tags}
            </div>
          </ul>
        </ul>
      </div>
    </Link>
  );
}
