import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "@/types";
import remarkGfm from "remark-gfm";
import { MDXRemoteProps } from "next-mdx-remote";
import { ExternalLink } from "react-feather";

const postsDir = path.join(process.cwd(), "content");

export function getAllPosts(): Post[] {
  const getFiles = fs.readdirSync(postsDir);

  // Get blog file
  const posts: Post[] = getFiles.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
      content: content,
      readTime: calculateReadTime(content),
      tags: data.tags,
    };
  });

  // Sort blog by date
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Calculate blog read time
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
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
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

export const components: MDXRemoteProps["components"] = {};
