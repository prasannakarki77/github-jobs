"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="flex gap-2 max-w-xl flex-1">
      <Input
        type="text"
        placeholder="Job title"
        className=" dark:bg-secondary shadow-md"
      />
      <Button>Search</Button>
    </div>
  );
};
export default SearchBar;
