import getPosts from "./actions/getPosts";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import JobPostCard from "@/components/JobPostCard";

export default async function Home() {
  const posts = await getPosts();
  if (posts.length === 0) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <div className="flex flex-col gap-4">
        {posts.map((post) => {
          return <JobPostCard key={post.id} post={post} />;
        })}
      </div>
    </ClientOnly>
  );
}
