import getPosts from "./actions/getPosts";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import JobPostCard from "@/components/JobPostCard";
import SearchBar from "@/components/SearchBar";

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
      <div className=" ">
        <div className=" mb-4 bg-search-bg h-40 flex justify-center items-center px-10 ">
          <SearchBar />
        </div>

        <div className="flex flex-col gap-10">
          {posts.map((post) => {
            return <JobPostCard key={post.id} post={post} />;
          })}
        </div>
      </div>
    </ClientOnly>
  );
}
