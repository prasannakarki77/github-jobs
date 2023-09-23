import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { image } = body;

  const profile = await prisma.user.update({
    where: { id: currentUser.id },
    data: {
      image,
    },
  });
  return NextResponse.json(profile);
}
