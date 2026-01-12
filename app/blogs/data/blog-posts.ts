// This is just a dummy data am using for the development purpose. 
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  likes: number;
  dislikes: number;
  coverImage?: string;
}


export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure and build maintainable React applications using TypeScript, focusing on best practices and modern patterns.",
    author: "Jiru Gutema",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Frontend", "Best Practices"],
    likes: 42,
    dislikes: 3,
    content: `# Building Scalable React Applications with TypeScript

When building modern web applications, the combination of React and TypeScript provides a powerful foundation for creating maintainable and scalable codebases. In this post, we'll explore key strategies and patterns that will help you build better React applications.

## Why TypeScript with React?

TypeScript brings static type checking to JavaScript, which helps catch errors at compile time rather than runtime. This is especially valuable in React applications where prop drilling and component composition can become complex.

\`\`\`typescript
interface UserProps {
  name: string;
  email: string;
  isActive: boolean;
}

const UserCard: React.FC<UserProps> = ({ name, email, isActive }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
      <span className={isActive ? 'active' : 'inactive'}>
        {isActive ? 'Active' : 'Inactive'}
      </span>
    </div>
  );
};
\`\`\`

## Project Structure

A well-organized project structure is crucial for scalability. Here's a recommended structure:

\`\`\`
src/
├── components/
│   ├── ui/
│   ├── forms/
│   └── layout/
├── hooks/
├── utils/
├── types/
├── services/
└── pages/
\`\`\`

## Custom Hooks for Reusability

Custom hooks are a great way to extract and reuse stateful logic:

\`\`\`typescript
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
\`\`\`

## Component Composition Patterns

Use composition over inheritance to create flexible components:

\`\`\`typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={\`card \${className}\`}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

// Usage
<Card>
  <CardHeader>
    <h2>User Profile</h2>
  </CardHeader>
  <CardContent>
    <UserCard {...userProps} />
  </CardContent>
</Card>
\`\`\`

## Conclusion

Building scalable React applications with TypeScript requires thoughtful planning and adherence to best practices. By focusing on proper typing, component composition, and code organization, you can create applications that are both maintainable and performant.

Remember to always consider the long-term maintainability of your code and don't be afraid to refactor when patterns emerge that could be abstracted into reusable components or hooks.`
  },
  {
    id: "2",
    title: "Modern CSS Techniques for Better Web Design",
    excerpt: "Explore modern CSS features like Grid, Flexbox, and CSS Custom Properties to create responsive and maintainable stylesheets.",
    author: "Jiru Gutema",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    tags: ["CSS", "Web Design", "Frontend", "Responsive"],
    likes: 28,
    dislikes: 1,
    content: `# Modern CSS Techniques for Better Web Design

CSS has evolved significantly over the years, introducing powerful features that make creating responsive and maintainable stylesheets easier than ever. Let's explore some modern techniques that every web developer should know.

## CSS Grid: The Layout Revolution

CSS Grid provides a two-dimensional layout system that's perfect for complex layouts:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.grid-item {
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
}

/* Named grid lines for better organization */
.layout {
  display: grid;
  grid-template-columns: [sidebar-start] 250px [sidebar-end main-start] 1fr [main-end];
  grid-template-rows: [header-start] 60px [header-end content-start] 1fr [content-end];
}
\`\`\`

## CSS Custom Properties (Variables)

Custom properties make your CSS more maintainable and dynamic:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --border-radius: 8px;
  --spacing-unit: 1rem;
  --font-size-base: 16px;
}

.button {
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  padding: calc(var(--spacing-unit) * 0.5) var(--spacing-unit);
  font-size: var(--font-size-base);
}

/* Dynamic theming */
[data-theme="dark"] {
  --primary-color: #60a5fa;
  --secondary-color: #94a3b8;
}
\`\`\`

## Container Queries: Responsive Components

Container queries allow components to respond to their container's size:

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  padding: 1rem;
}

@container card (min-width: 400px) {
  .card {
    display: flex;
    gap: 1rem;
  }
  
  .card-content {
    flex: 1;
  }
}
\`\`\`

## Modern Flexbox Patterns

Flexbox remains essential for one-dimensional layouts:

\`\`\`css
/* Auto-sizing navigation */
.nav {
  display: flex;
  gap: 1rem;
}

.nav-item {
  flex: 0 1 auto; /* Don't grow, can shrink, auto basis */
}

.nav-item.active {
  flex: 1; /* Take remaining space */
}

/* Perfect centering */
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
\`\`\`

## CSS Logical Properties

Use logical properties for better internationalization:

\`\`\`css
.content {
  /* Instead of margin-left and margin-right */
  margin-inline: 2rem;
  
  /* Instead of padding-top and padding-bottom */
  padding-block: 1rem;
  
  /* Instead of border-left */
  border-inline-start: 2px solid var(--primary-color);
}
\`\`\`

## Conclusion

Modern CSS provides powerful tools for creating responsive, maintainable, and accessible web designs. By leveraging Grid, Flexbox, custom properties, and other modern features, you can write cleaner, more efficient stylesheets that adapt to various screen sizes and user preferences.

The key is to understand when to use each technique and how they work together to create cohesive design systems.`
  },
  {
    id: "3",
    title: "Next.js 14: App Router and Server Components Deep Dive",
    excerpt: "Understanding the new App Router in Next.js 14 and how Server Components change the way we build React applications.",
    author: "Jiru Gutema",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    tags: ["Next.js", "React", "Server Components", "App Router"],
    likes: 67,
    dislikes: 5,
    content: `# Next.js 14: App Router and Server Components Deep Dive

Next.js 14 introduces significant changes with the stable App Router and Server Components. These features fundamentally change how we think about React applications, bringing server-side rendering to a new level.

## Understanding Server Components

Server Components run on the server and never hydrate on the client:

\`\`\`typescript
// app/posts/page.tsx - Server Component by default
import { getPosts } from '@/lib/api';

export default async function PostsPage() {
  // This runs on the server
  const posts = await getPosts();
  
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

## Client Components for Interactivity

Use the "use client" directive for interactive components:

\`\`\`typescript
'use client';

import { useState } from 'react';

export default function LikeButton({ postId }: { postId: string }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      const response = await fetch(\`/api/posts/\${postId}/like\`, {
        method: 'POST',
      });
      
      if (response.ok) {
        setLikes(prev => isLiked ? prev - 1 : prev + 1);
        setIsLiked(!isLiked);
      }
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  };

  return (
    <button 
      onClick={handleLike}
      className={\`like-button \${isLiked ? 'liked' : ''}\`}
    >
      ❤️ {likes}
    </button>
  );
}
\`\`\`

## App Router File Structure

The new App Router uses a file-based routing system:

\`\`\`
app/
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── loading.tsx        # Loading UI
├── error.tsx          # Error UI
├── not-found.tsx      # 404 page
├── posts/
│   ├── layout.tsx     # Posts layout
│   ├── page.tsx       # Posts list
│   ├── loading.tsx    # Posts loading
│   └── [slug]/
│       ├── page.tsx   # Individual post
│       └── loading.tsx
└── api/
    └── posts/
        └── route.ts   # API route
\`\`\`

## Data Fetching Patterns

Server Components enable new data fetching patterns:

\`\`\`typescript
// Parallel data fetching
async function getPostData(slug: string) {
  const [post, comments, relatedPosts] = await Promise.all([
    getPost(slug),
    getComments(slug),
    getRelatedPosts(slug)
  ]);
  
  return { post, comments, relatedPosts };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { post, comments, relatedPosts } = await getPostData(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
      <section>
        <h2>Comments</h2>
        <CommentsList comments={comments} />
      </section>
      
      <aside>
        <h2>Related Posts</h2>
        <RelatedPostsList posts={relatedPosts} />
      </aside>
    </article>
  );
}
\`\`\`

## Streaming and Suspense

Use Suspense boundaries for better loading experiences:

\`\`\`typescript
import { Suspense } from 'react';

export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Suspense fallback={<PostSkeleton />}>
        <PostContent slug={params.slug} />
      </Suspense>
      
      <Suspense fallback={<CommentsSkeleton />}>
        <CommentsSection slug={params.slug} />
      </Suspense>
    </div>
  );
}

async function PostContent({ slug }: { slug: string }) {
  const post = await getPost(slug);
  return <article>{/* Post content */}</article>;
}

async function CommentsSection({ slug }: { slug: string }) {
  const comments = await getComments(slug);
  return <section>{/* Comments */}</section>;
}
\`\`\`

## Route Handlers (API Routes)

The new API route format:

\`\`\`typescript
// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') || '1';
  
  try {
    const posts = await getPosts({ page: parseInt(page) });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const post = await createPost(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
\`\`\`

## Conclusion

Next.js 14's App Router and Server Components represent a significant shift in how we build React applications. By understanding when to use Server Components versus Client Components, and leveraging the new routing system, you can build faster, more efficient applications with better user experiences.

The key is to embrace the server-first approach while strategically using client-side interactivity where needed.`
  }
];

export const getBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  // Convert title to slug format for URL-friendly routing
  return blogPosts.find(post => 
    post.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') === slug
  );
};

export const generateSlug = (title: string): string => {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};