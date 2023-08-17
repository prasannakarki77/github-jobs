import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role === "USER") {
    return NextResponse.error();
  }

  const body = await request.json();
  const { title, description, location, duration, expiresAt } = body;

  const posting = await prisma.posting.create({
    data: {
      title,
      description,
      location,
      duration,
      expiresAt,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(posting);
}
