import prisma from "@/lib/prismadb";

export interface IPostsParams {
  title?: string;
  location?: string;
  duration?: string;
}

export default async function getPosts(params: IPostsParams) {
  const { title, location, duration } = params;
  let query: any = {};
  if (title) {
    query.title = { contains: title, mode: "insensitive" };
  }
  if (location) {
    query.location = { contains: location, mode: "insensitive" };
  }
  if (duration) {
    query.duration = duration;
  }

  try {
    const posts = await prisma.posting.findMany({
      where: query,
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
