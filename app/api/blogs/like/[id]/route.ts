import { getUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
export async function PATCH(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "login required" }, { status: 401 });
  }
  let { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "blog id is required" }, { status: 400 });
  }

  const exist = await prisma.blogPost.findUnique({
    where: { id: parseInt(id) },
  });
  if (!exist) {
    return NextResponse.json(
      { error: "blog with this id doesn't exist" },
      { status: 404 },
    );
  }
  const post = await prisma.blogPost.update({
    where: { id: parseInt(id) },
    data: { likes: { increment: 1 } },
  });

  return NextResponse.json(post);
}
