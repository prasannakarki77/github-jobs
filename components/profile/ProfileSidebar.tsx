"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/utils";
import { Button } from "../ui/button";
import { FileUp, LogOut, Mail, Settings } from "lucide-react";
import { SafeUser } from "@/types/prisma";
import { useState } from "react";
import ImageUpload from "../ImageUpload";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

interface IProfileSidebar {
  currentUser: SafeUser;
}

const ProfileSidebar: React.FC<IProfileSidebar> = ({ currentUser }) => {
  const router = useRouter();
  const onImageUpload = async (image: string) => {
    const data = { image: image };
    try {
      await axios.put(`/api/profile`, data);
      toast({
        variant: "default",
        title: "Update  Success",
        description: "Profile Image updated",
      });
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error.response.data.message ?? "Update Failed",
        description: "Please try again!",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center p-4 h-full md:min-h-[500px]">
      <div className="flex flex-col gap-4   items-center  rounded-lg ">
        <Avatar className="h-28 w-28 border border-gray-100 shadow">
          {currentUser?.image ? (
            <AvatarImage src={currentUser.image} alt="@shadcn" />
          ) : (
            <AvatarFallback className="text-xl">
              {currentUser?.name ? getInitials(currentUser.name) : ""}
            </AvatarFallback>
          )}
        </Avatar>

        <ImageUpload onImageUpload={onImageUpload} />
        <p className=" text-lg font-semibold text-slate-600 dark:text-slate-400 ">
          {currentUser.name}
        </p>
        <p className=" text-sm flex gap-2 font-semibold text-slate-600 dark:text-slate-400  ">
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
