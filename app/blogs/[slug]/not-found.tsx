import Link from 'next/link';
import { ArrowLeft, FileX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="space-y-6">
    

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            Blog Post Not Found
          </h1>
          <p className="text-lg text-muted-foreground">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/blogs"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
