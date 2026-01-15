export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  author: string;
  publishedAt: Date;
  readTime: Date;
  tags: string[];
  likes: number;
  dislikes: number;
  coverImage?: string;
}
