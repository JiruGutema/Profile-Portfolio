import { BlogPost } from "@/lib/types";
import prisma from "@/lib/prisma";
import { generateSlug } from "@/lib/utils";

export async function GET() {
  const res = await prisma.blogPost.findMany();
  return Response.json({ data: res });
}

export async function POST(request: Request) {
  const data = {
    title: "how to include markdown in react typescript project",
    slug: generateSlug("how to include markdown in react typescript project"),
    excerpt:
      "Learn how to structure and build maintainable React applications using TypeScript, focusing on best practices and modern patterns.",
    author: "Jiru Gutema",
    readTime: "8 min read",
    tags: "React, TypeScript, Frontend, Best Practices",
    likes: 42,
    dislikes: 3,
    content: `
# Building Scalable React Applications with TypeScript

Writing large React apps in TypeScript can seem intimidating at first.  
But with the right structure and best practices, you can scale safely.

---

## Why TypeScript?

- Type safety prevents runtime errors
- Better developer experience with autocomplete
- Easier refactoring in large codebases

---

## Example Code

\`\`\`ts
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [];
\`\`\`

---

## Conclusion

TypeScript + React = ❤️

[Read more](https://example.com)
`,
  };

  const res = await prisma.blogPost.create({
    data,
  });
  if (!res) {
    return Response.json(
      { error: "Failed to create blog post" },
      { status: 500 },
    );
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
    dislikes: res.dislikes,
    slug: res.slug,
    coverImage: res.coverImage ? res.coverImage : undefined,
  };

  return Response.json({ data: post }, { status: 201 });
}
