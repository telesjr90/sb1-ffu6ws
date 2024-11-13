import { globSync } from 'glob';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export function getBlogPosts() {
  const files = globSync('src/content/blog/*.md');
  return files.map((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    const { data, content: markdown } = matter(content);
    return {
      ...data,
      content: markdown,
      slug: path.basename(file, '.md')
    };
  });
}
