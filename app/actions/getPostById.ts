import prisma from "@/lib/prismadb";

interface IParams {
  postId: number;
}

export default async function getPostById(params: IParams) {
  try {
    const { postId } = params;

    const post = await prisma.posting.findUnique({
      where: {
        id: Number(postId),
      },
      include: {
        user: true,
      },
    });
    if (post) {
      return {
        ...post,
        createdAt: post.createdAt.toISOString(),
        expiresAt: post.expiresAt?.toISOString(),
      };
    }
    return null;
  } catch (error: any) {
    throw new Error(error);
  }
}
