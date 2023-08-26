import prisma from "@/lib/prismadb";

export interface IPostsParams {
  query?: string;
}

export default async function getPosts({ query }: IPostsParams) {
  try {
    const posts = await prisma.posting.findMany({
      where: {
        title: { contains: query, mode: "insensitive" },
      },
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
