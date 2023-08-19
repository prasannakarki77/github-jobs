import { Button } from "@/components/ui/button";
import getPosts from "./actions/getPosts";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";

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
    <main className="in-h-screen">
      {posts.map((post) => {
        return <h1 key={post.id}>{post.title}</h1>;
      })}
    </main>
  );
}
