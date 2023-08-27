import getPosts, { IPostsParams } from "./actions/getPosts";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import JobPostCard from "@/components/JobPostCard";
import JobPostsFilter from "@/components/JobPostsFilter";
import SearchBar from "@/components/SearchBar";

interface HomeProps {
  searchParams: IPostsParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const posts = await getPosts(searchParams);
  let content;
  if (posts.length === 0) {
    content = <EmptyState />;
  } else {
    content = (
      <div className="flex flex-col gap-4">
        {posts.map((post) => {
          return <JobPostCard key={post.id} post={post} />;
        })}
      </div>
    );
  }

  return (
    <ClientOnly>
      <div className=" ">
        <div className=" mb-6 bg-search-bg h-40 flex justify-center items-center px-10 ">
          <SearchBar />
        </div>
        <div className=" grid md:grid-cols-12 gap-4">
          <JobPostsFilter className="md:col-span-2" />
          <div className="md:col-span-10">{content}</div>
        </div>
      </div>
    </ClientOnly>
  );
}
