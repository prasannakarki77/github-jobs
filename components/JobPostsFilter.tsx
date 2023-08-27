"use client";
import { useState } from "react";
import qs from "query-string";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Props {
  className?: string;
}

const JobPostsFilter = (props: Props) => {
  const params = useSearchParams();
  const router = useRouter();
  const [duration, setDuration] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const searchQuery = qs.parse(params.toString());

  const handleFilterJob = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      duration: duration,
      location: location,
    };
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  };
  const handleReset = () => {
    setDuration("");
    setLocation("");
    router.push("/");
  };

  return (
    <div {...props}>
      <div className=" ">
        <div className=" mb-4 text-xs">
          <Select onValueChange={(value) => setDuration(value)}>
            <SelectTrigger className="text-xs">
              <SelectValue placeholder="Duration" className="text-xs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time" className=" text-xs">
                Full Time
              </SelectItem>
              <SelectItem value="part-time" className=" text-xs">
                Part Time
              </SelectItem>
              <SelectItem value="contract" className=" text-xs">
                Contract
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Input
          type="text"
          placeholder="city, state, zip code or country"
          className=" dark:bg-secondary mb-5 text-xs"
          onChange={(e) => setLocation(e.target.value)}
        />
        <RadioGroup
          value={location}
          className="flex flex-col gap-4"
          onValueChange={(value) => setLocation(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="kathmandu" id="r1" />
            <Label htmlFor="r1">Kathmandu</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="london" id="r2" />
            <Label htmlFor="r2">London</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="newyork" id="r3" />
            <Label htmlFor="r3">New York</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="berlin" id="r3" />
            <Label htmlFor="r3">Berlin</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex gap-2 mt-4">
        <Button onClick={handleFilterJob} className="w-full">
          Filter
        </Button>
        <Button onClick={handleReset} variant={"outline"} className="w-full">
          Reset
        </Button>
      </div>
      {(searchQuery.title || searchQuery.location || searchQuery.duration) && (
        <div className="text-xs text-slate-400 mt-4">
          Search result for:{" "}
          {searchQuery.title && (
            <Badge variant="secondary">{searchQuery.title}</Badge>
          )}
          {searchQuery.location && (
            <Badge variant="secondary">{searchQuery.location}</Badge>
          )}
          {searchQuery.duration && (
            <Badge variant="secondary">{searchQuery.duration}</Badge>
          )}
        </div>
      )}
    </div>
  );
};
export default JobPostsFilter;
