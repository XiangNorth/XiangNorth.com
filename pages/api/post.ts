import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import dayjs from 'dayjs';

const postDirectory = path.join(process.cwd(), '_posts');

export function getAllSlugs() {
  const filenames = fs.readdirSync(postDirectory);
  const slugs = filenames.map((file) => {
    const slug = file.replace(/.mdx$/, '');
    return slug
  });
  function postDate(i: string): number {
    const filePath = path.join(postDirectory, i + '.mdx');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents)
    return data.date;
  }
  slugs.sort((a, b) => {
    return dayjs(postDate(a)).isBefore(postDate(b)) ? 1 : -1
  })
  return slugs
}

export function getPostsSummary() {
  const slugs = getAllSlugs()
  const posts = slugs.map((slug) => {
    const filePath = path.join(postDirectory, slug + '.mdx');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const post = {
      slug: slug,
      data: data,
    };
    return post;
  }
  )
  return posts
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postDirectory, slug + '.mdx');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents)
  const item = {
    data: data,
    content: await serialize(content),
  }
  return item;
}

