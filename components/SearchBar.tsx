"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className=" flex gap-2 max-w-md   ">
      <Input type="text" placeholder="Email" />
      <Button size={"default"}>Search</Button>
    </div>
  );
};
export default SearchBar;
