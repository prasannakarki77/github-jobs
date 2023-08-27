"use client";
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

interface Props {
  className?: string;
}

const JobPostsFilter = (props: Props) => {
  return (
    <div {...props}>
      <div className=" ">
        <div className=" mb-4 text-xs">
          <Select>
            <SelectTrigger className="text-xs">
              <SelectValue placeholder="Job Type" className="text-xs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light" className=" text-xs">
                Full Time
              </SelectItem>
              <SelectItem value="dark" className=" text-xs">
                Part Time
              </SelectItem>
              <SelectItem value="system" className=" text-xs">
                Contract
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Input
          type="text"
          placeholder="city, state, zip code or country"
          className=" dark:bg-secondary mb-5 text-xs"
        />
        <RadioGroup defaultValue="kathmandu" className="flex flex-col gap-4">
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
    </div>
  );
};
export default JobPostsFilter;
