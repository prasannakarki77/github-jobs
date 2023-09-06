"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/utils";
import { Button } from "../ui/button";
import { FileUp, LogOut, Mail, Settings } from "lucide-react";
import { SafeUser } from "@/types/prisma";

interface IProfileSidebar {
  currentUser: SafeUser;
}

const ProfileSidebar: React.FC<IProfileSidebar> = ({ currentUser }) => {
  return (
    <div className="flex flex-col justify-center p-4 h-full">
      <div className="flex flex-col gap-4   items-center  rounded-lg ">
        <Avatar className=" h-28 w-28 ">
          {currentUser?.image ? (
            <AvatarImage src={currentUser?.image} alt="@shadcn" />
          ) : (
            <AvatarFallback className=" text-xl">
              {currentUser.name && getInitials(currentUser.name)}
            </AvatarFallback>
          )}
        </Avatar>
        <Button variant={"outline"}>
          <FileUp size={20} className="mr-1" /> Upload Photo
        </Button>
        <p className=" text-lg font-semibold text-slate-600 ">
          {currentUser.name}
        </p>
        <p className=" text-sm flex gap-2 font-semibold text-slate-600 ">
          <Mail size={20} /> {currentUser.email}
        </p>
      </div>
      <div className="flex-1"></div>
      <div className="flex justify-center">
        <Button variant={"link"}>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  );
};
export default ProfileSidebar;
