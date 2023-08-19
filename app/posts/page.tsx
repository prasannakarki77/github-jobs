import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Posts | GitHub Jobs",
};

const Posts = () => {
  return (
    <div className="container my-5">
      <Link href="/posts/create">Create Job posting</Link>
    </div>
  );
};

export default Posts;
