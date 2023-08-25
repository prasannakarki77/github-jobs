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
    return post;
  } catch (error: any) {
    throw new Error(error);
  }
}
