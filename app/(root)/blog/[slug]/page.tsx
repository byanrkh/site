import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getPostBySlug,
  getAllPosts,
  mdxOptions,
  components,
} from "@/libs/blog/getPost";
import { formatDate } from "@/libs/blog/formatDate";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
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
        <h1 className="text-5xl font-bold mb-5">{(await post).title}</h1>
        <hr className="mt-20 mb-5 border-t border-t-[#252529]" />
        <div className="flex justify-between items-center mx-2">
          <ul className="flex gap-2">
            {(await post).tags.map((tag) => {
              return (
                <li
                  className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500"
                  key={tag}
                >
                  # {tag}
                </li>
              );
            })}
          </ul>
          <ul className="flex text-xs gap-2">
            <li>{formatDate((await post).date)}</li>·
            <li>{(await post).readTime} min read</li>
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
    </section>
  );
}
