import { BlogPost } from "@/lib/types";
import prisma from "@/lib/prisma";
import { generateSlug } from "@/lib/utils";

export async function GET() {
  const res = await prisma.blogPost.findMany();
  return Response.json({ data: res });
}
