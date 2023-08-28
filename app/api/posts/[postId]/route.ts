import getCurrentUser from "@/app/actions/getCurrentUser";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

interface IParams {
  postId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== UserRole.EMPLOYER) {
    return NextResponse.error();
  }

  const { postId } = params;

  if (!postId || !Number(postId)) {
    throw new Error("Invalid Id");
  }

  const post = await prisma.posting.deleteMany({
    where: {
      id: Number(postId),
      userId: currentUser.id,
    },
  });

  return NextResponse.json(post);
}
