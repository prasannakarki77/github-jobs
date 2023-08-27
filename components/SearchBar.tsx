"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) {
      router.push(`/?query=${query}`);
    } else {
      router.push("/");
    }
  };
  return (
    <form className="flex gap-2 max-w-xl flex-1" onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Job title"
        className=" dark:bg-secondary shadow-md"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};
export default SearchBar;
