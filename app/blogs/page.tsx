import { getBlogPosts } from './data/blog-posts';
import BlogCard from '@/components/blog/BlogCard';

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about software development, web technologies, and programming best practices.
        </p>
      </div>

      {/* Blog posts grid */}
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Empty state (if no posts) */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No blog posts available at the moment. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
