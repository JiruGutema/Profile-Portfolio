"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Save, Eye, Edit3 } from "lucide-react";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import { generateSlug } from "@/lib/utils";

interface BlogEditorProps {
  postId: number | null;
  onSave: () => void;
  onCancel: () => void;
}

export default function BlogEditor({ postId, onSave, onCancel }: BlogEditorProps) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    readTime: "",
    tags: "",
    coverImage: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const fetchPost = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/admin/blogs/${postId}`);
      const data = await res.json();
      setFormData({
        title: data.title,
        slug: "",
        excerpt: data.excerpt,
        content: data.content,
        author: data.author,
        readTime: data.readTime,
        tags: data.tags,
        coverImage: data.coverImage || "",
      });
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setIsLoading(false);
    }
  };


  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const url = postId ? `/api/admin/blogs/${postId}` : "/api/admin/blogs";
      const method = postId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onSave();
      } else {
        const error = await res.json();
        alert(error.error || "Failed to save post");
      }
    } catch (error) {
      console.error("Failed to save post:", error);
      alert("Failed to save post");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onCancel}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-2 px-4 py-2 border border-border rounded-md text-foreground hover:bg-accent transition-colors"
              >
                {showPreview ? (
                  <>
                    <Edit3 className="w-4 h-4" />
                    <span>Edit</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </>
                )}
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSaving}
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{isSaving ? "Saving..." : "Save Post"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showPreview ? (
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">{formData.title || "Untitled Post"}</h1>
              <p className="text-xl text-muted-foreground mb-6">{formData.excerpt || "No excerpt provided"}</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
                <span>{formData.author || "Unknown Author"}</span>
                <span>•</span>
                <span>{formData.readTime || "0"} min read</span>
              </div>
              {formData.tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {formData.tags.split(",").map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {formData.content ? (
                  <MarkdownRenderer content={formData.content} />
                ) : (
                  <p className="text-muted-foreground italic">No content yet...</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter post title"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Excerpt *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              required
              rows={3}
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Brief description of the post"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Content * (Markdown supported)
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
              rows={20}
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
              placeholder="Write your post content in Markdown..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Author *
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Author name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Read Time *
              </label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Tags * (comma-separated)
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="React, Next.js, TypeScript"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Cover Image URL (optional)
            </label>
            <input
              type="text"
              value={formData.coverImage}
              onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </form>
        )}
      </main>
    </div>
  );
}
