import prisma from "@/lib/prismadb";

export default async function getPosts() {
  try {
    const posts = await prisma.posting.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });
    const safePosts = posts.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString(),
      expiresAt: post.expiresAt?.toISOString(),
    }));
    return safePosts;
  } catch (error: any) {
    throw new Error(error);
  }
}
