import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import { serialize } from 'next-mdx-remote/serialize';

const postDirectory = path.join(process.cwd(), 'contents', 'posts');

export function getPostSlugList() {
    return getPosts().map((post) => post?.slug);
}

export function getPosts(){
  const postsDirectory = path.join(process.cwd(), 'contents', 'posts');
  const filenames = fs.readdirSync(postsDirectory, {
      withFileTypes: true,
  });
  const posts = filenames.map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
          path.join(process.cwd(), 'contents', 'posts', file.name),
          'utf-8'
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, '');
      return { data, content, slug };
  })
      .filter((post) => post).sort((a, b) => (dayjs(a?.data.date).isBefore(dayjs(b?.data.date)) ? 1 : -1));
  return posts
}

export async function getPostBySlug(slug : string) {
  const postPath = path.join(postDirectory, slug + '.mdx');
  const fileContent = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    title: data.title,
    date: dayjs(data.date).format('YYYY-MM-DD'),
    description: data.description,
    tags: data.tags,
    content: await serialize(content),
  };
}
