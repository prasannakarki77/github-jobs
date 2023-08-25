import getCurrentUser from "@/app/actions/getCurrentUser";
import getPostById from "@/app/actions/getPostById";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";

interface IParams {
  postId: number;
}

const PostPage = async ({ params }: { params: IParams }) => {
  const post = await getPostById(params);
  if (!post) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return <ClientOnly>{post.title}</ClientOnly>;
};

export default PostPage;
