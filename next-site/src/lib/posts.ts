import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  image?: string;
}

export function getSortedPostsData(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      const image = matterResult.data.image;
      let imageUrl = null;
      if (typeof image === 'string') {
        imageUrl = image;
      } else if (typeof image === 'object' && image !== null && 'teaser' in image) {
        imageUrl = (image as { teaser: string }).teaser;
      }

      return {
        ...matterResult.data,
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date || new Date().toISOString(),
        content: matterResult.content,
        excerpt: matterResult.data.excerpt || '',
        image: imageUrl,
      } as PostData;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(slug: string): PostData | null {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  let fullPath = '';
  if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const image = matterResult.data.image;
  let imageUrl = null;
  if (typeof image === 'string') {
    imageUrl = image;
  } else if (typeof image === 'object' && image !== null && 'teaser' in image) {
    imageUrl = (image as { teaser: string }).teaser;
  }

  return {
    ...matterResult.data,
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date || new Date().toISOString(),
    content: matterResult.content,
    excerpt: matterResult.data.excerpt || '',
    image: imageUrl,
  } as PostData;
}
