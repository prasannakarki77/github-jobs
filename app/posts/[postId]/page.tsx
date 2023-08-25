import getPostById from "@/app/actions/getPostById";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import PostClient from "./PostClient";

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
  return <PostClient post={post} />;
};

export default PostPage;
