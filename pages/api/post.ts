import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';

const postDirectory = path.join(process.cwd(), 'pages', 'post');

export function getPosts(){
  const filenames = fs.readdirSync(postDirectory, {
      withFileTypes: true,
  });
  const posts = filenames.map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
          path.join(postDirectory, file.name),
          'utf-8'
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, '');
      return { data, content, slug };
  })
      .filter((post) => post).sort((a, b) => (dayjs(a?.data.date).isBefore(dayjs(b?.data.date)) ? 1 : -1));
  return posts
}

