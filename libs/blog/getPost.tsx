import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import type { Post } from "@/types/post";
import { calculateReadTime } from "./readTime";
import type { MDXRemoteProps } from "next-mdx-remote";

const postsDirectory = path.join(process.cwd(), "content");

export async function getAllPosts(): Promise<Post[]> {
  const filenames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".mdx"))
      .map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug: filename.replace(".mdx", ""),
          title: data.title,
          date: data.date,
          content: content,
          readTime: calculateReadTime(content),
          tags: data.tags || [],
        };
      })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    content,
    readTime: calculateReadTime(content),
    tags: data.tags || [],
  };
}

export const mdxOptions = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
};

export const components: MDXRemoteProps["components"] = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-extrabold relative flex group cursor-pointer mb-5">
      {children}
      <span className="absolute -left-6 top-0 hidden group-hover:block">#</span>
    </h1>
  ),
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <code {...props} />,
};
