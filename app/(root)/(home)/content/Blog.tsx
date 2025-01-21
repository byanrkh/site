import Title from "@/components/Layout/Title";
import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <section>
      <Title>Latest Blogs</Title>
      <div className="grid grid-cols-1 gap-3">
        <Link
          href={"/"}
          className="border border-[#202024] p-4 rounded group hover:scale-[1.02] duration-75"
        >
          <h1 className="group-hover:underline">Lorem ipsum dolor sit amet.</h1>
          <div className="mt-1 flex justify-between items-center">
            <div className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500">
              # NextJS
            </div>
            <p className="text-xs">Jan 1, 2025</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="border border-[#202024] p-4 rounded group hover:scale-[1.02] duration-75"
        >
          <h1 className="group-hover:underline">Lorem ipsum dolor sit amet.</h1>
          <div className="mt-1 flex justify-between items-center">
            <div className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500">
              # NextJS
            </div>
            <p className="text-xs">Jan 1, 2025</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="border border-[#202024] p-4 rounded group hover:scale-[1.02] duration-75"
        >
          <h1 className="group-hover:underline">Lorem ipsum dolor sit amet.</h1>
          <div className="mt-1 flex justify-between items-center">
            <div className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500">
              # NextJS
            </div>
            <p className="text-xs">Jan 1, 2025</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
