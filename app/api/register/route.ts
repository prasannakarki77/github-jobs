import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role: "EMPLOYER",
    },
  });
  if (user) {
    return NextResponse.json(user);
  }
  return NextResponse.error();
  return NextResponse.json(user);
}
