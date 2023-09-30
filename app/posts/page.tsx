import React from "react";
import { Metadata } from "next";
import getPosts from "../actions/getPosts";
import { DataTable } from "@/components/posts/PostsTable";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import getUserPosts from "../actions/getUserPosts";

export const metadata: Metadata = {
  title: "Job Posts | GitHub Jobs",
};

const Posts = async () => {
  const posts = await getUserPosts();

  return (
    <div className=" ">
      <div className=" flex justify-between items-center mb-5">
        <h1 className=" font-bold text-xl">Job Posts</h1>
        <Link
          href={"/posts/create"}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <PlusIcon size={18} className="mr-2" /> New Job Post
        </Link>
      </div>
      <DataTable data={posts} />
    </div>
  );
};

export default Posts;
