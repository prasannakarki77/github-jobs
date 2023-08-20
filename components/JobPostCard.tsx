import { SafePost } from "@/types/prisma";
import { Card } from "./ui/card";
import Image from "next/image";
import { fToNow, getInitials } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Globe } from "lucide-react";
import { History } from "lucide-react";
interface JobPostCardProps {
  post: SafePost;
}

const JobPostCard: React.FC<JobPostCardProps> = ({ post }) => {
  const { id, user, title, description, createdAt, duration, location } = post;
  return (
    <Card className="flex gap-3 p-3">
      <div className=" bg-gray-300 dark:bg-slate-800 w-20 rounded-sm ">
        {user.image ? (
          <Image
            src={user.image}
            height={150}
            width={150}
            alt={user.id}
            className="w-full"
          />
        ) : (
          <p className="w-full h-full flex justify-center items-center font-bold text-xl">
            {user.name && getInitials(user?.name)}
          </p>
        )}
      </div>
      <div className=" flex gap-1 flex-1  sm:flex-row flex-col">
        <div className=" flex flex-col gap-2 items-start">
          <p className="font-bold text-sm">{user.name}</p>
          <h2 className=" font-semibold text-slate-800 dark:text-white">
            {title}
          </h2>
          <Badge variant="secondary" className=" rounded">
            {duration}
          </Badge>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col justify-end">
          <div className="text-xs font-bold text-slate-400 flex-row flex gap-2 justify-between w-full">
            <span className="flex gap-1">
              <Globe size={15} />
              {location}
            </span>
            <span className="flex gap-1">
              <History size={15} /> {fToNow(createdAt)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobPostCard;
