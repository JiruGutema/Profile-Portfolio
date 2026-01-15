import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { getBlogPosts } from "../data/blog-posts";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import BlogReactions from "@/components/blog/BlogReactions";
import { BlogPost } from "@/lib/types";
import { baseUrl, generateSlug } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const response = await fetch(`${baseUrl}/api/blogs/${slug}`).then((res) =>
    res.json(),
  );
  const post: BlogPost = response.data;

  if (!post) {
    notFound();
  }

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
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime.toString()}</span>
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
        <MarkdownRenderer content={post.content} />
      </div>

      {/* Reactions */}
      <div className="mb-12">
        <BlogReactions
          postId={post.id.toString()}
          initialLikes={post.likes}
          initialDislikes={post.dislikes}
        />
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

// Generate static params for all blog posts
export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: generateSlug(post.title),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const posts = getBlogPosts();
  const { slug } = await params;
  const post = posts.find((p) => generateSlug(p.title) === slug);

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
      publishedTime: post.publishedAt,
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

