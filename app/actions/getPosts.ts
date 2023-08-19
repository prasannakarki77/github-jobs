import prisma from "@/lib/prismadb";

export default async function getPosts() {
  try {
    const posts = await prisma.posting.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts;
  } catch (error: any) {
    throw new Error(error);
  }
}
