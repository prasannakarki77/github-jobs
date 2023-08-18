import Link from "next/link";
import React from "react";

const Posts = () => {
  return (
    <div className="container my-5">
      <Link href="/posts/create">Create Job posting</Link>
    </div>
  );
};

export default Posts;
