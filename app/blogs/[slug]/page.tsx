import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import BlogReactions from "@/components/blog/BlogReactions";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import { BlogPost } from "@/lib/types";
import prisma from "@/lib/prisma";
import { Suspense } from "react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const res = await prisma.blogPost.findFirst({
    where: { slug: slug },
  });

  if (!res) {
    notFound();
  }

  // Preprocess data
  const post: BlogPost = {
    id: res.id,
    title: res.title,
    excerpt: res.excerpt,
    content: res.content,
    author: res.author,
    publishedAt: res.publishedAt,
    readTime: res.readTime,
    tags: res.tags.split(",").map((tag) => tag.trim()),
    likes: res.likes,
    slug: res.slug,
    dislikes: res.dislikes,
    coverImage: res.coverImage || undefined,
  };
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/blogs"
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Article header */}
      <header className="space-y-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          {post.title}
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime.toString()} min read</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center space-x-2">
          <Tag className="w-4 h-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Article content */}
      <div className="mb-12">
        {/* Client component wrapped in Suspense */}
        <Suspense fallback={<div>Loading content...</div>}>
          <MarkdownRenderer content={post.content} />
        </Suspense>
      </div>

      {/* Reactions */}
      <div className="mb-12">
        <Suspense fallback={<div>Loading reactions...</div>}>
          <BlogReactions
            postId={post.id.toString()}
            initialLikes={post.likes}
            initialDislikes={post.dislikes}
          />
        </Suspense>
      </div>

      {/* Related posts or navigation */}
      <footer className="border-t border-border pt-8">
        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <span>Read More Articles</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const res = await prisma.blogPost.findFirst({
    where: { slug: slug },
  });

  if (!res) {
    notFound();
  }
  const post: BlogPost = {
    id: res.id,
    title: res.title,
    excerpt: res.excerpt,
    content: res.content,
    author: res.author,
    publishedAt: res.publishedAt,
    readTime: res.readTime,
    tags: res.tags.split(",").map((tag) => tag.trim()),
    likes: res.likes,
    slug: res.slug,
    dislikes: res.dislikes,
    coverImage: res.coverImage ? res.coverImage : undefined,
  };

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Jiru Gutema Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}
