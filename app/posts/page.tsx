import React from "react";
import { Metadata } from "next";
import getPosts from "../actions/getPosts";
import { DataTable } from "@/components/posts/PostsTable";

export const metadata: Metadata = {
  title: "Job Posts | GitHub Jobs",
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <div className=" ">
      <h1 className=" font-bold">Job Posts</h1>
      <DataTable data={posts} />
    </div>
  );
};

export default Posts;
