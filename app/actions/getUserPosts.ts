import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUserPosts() {
  const user = await getCurrentUser();
  try {
    const posts = await prisma.posting.findMany({
      where: {
        userId: user?.id,
      },
      orderBy: {
        createdAt: "desc",
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
