import getPostById from "@/app/actions/getPostById";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import JobPostingForm from "@/components/forms/JobPostingForm";
import { Separator } from "@/components/ui/separator";

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
  return (
    <div className="container my-5  max-w-5xl">
      <h1 className="text-2xl font-bold my-3">Edit Job Posting</h1>
      <Separator className="my-4" />
      <JobPostingForm post={post} isEdit />
    </div>
  );
};

export default PostPage;
