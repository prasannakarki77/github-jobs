import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Posts = () => {
  return (
    <div className="container my-5">
      <Link href="/posts/create">Create Job posting</Link>
      <Loader />
    </div>
  );
};

export default Posts;
