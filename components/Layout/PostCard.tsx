import Link from "next/link";
import type { Post } from "@/types";
import { formatDate } from "@/libs/formatDate";
import { cn } from "@/libs/cn";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="border border-[#202024] p-4 rounded group hover:scale-[1.01] duration-75"
    >
      <h1 className="group-hover:underline">{post.title}</h1>
      <div className="mt-1 flex justify-between items-center">
        <div
          className={cn(
            "text-xs bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500"
          )}
        >
          # {post.tags}
        </div>
        <p className="text-xs text-zinc-400">{formatDate(post.date)}</p>
      </div>
    </Link>
  );
}
