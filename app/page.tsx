import getPosts from "./actions/getPosts";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import JobPostCard from "@/components/JobPostCard";
import SearchBar from "@/components/SearchBar";

interface HomeProps {
  searchParams: { query?: string };
}

export default async function Home({ searchParams }: HomeProps) {
  const posts = await getPosts(searchParams);

  return (
    <ClientOnly>
      <div className=" ">
        <div className=" mb-6 bg-search-bg h-40 flex justify-center items-center px-10 ">
          <SearchBar />
        </div>

        {posts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => {
              return <JobPostCard key={post.id} post={post} />;
            })}
          </div>
        )}
      </div>
    </ClientOnly>
  );
}
