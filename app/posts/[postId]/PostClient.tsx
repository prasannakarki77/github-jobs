import { Badge } from "@/components/ui/badge";
import { fDate, getInitials } from "@/lib/utils";
import { SafePost } from "@/types/prisma";
import { GlobeIcon, TimerIcon } from "lucide-react";
import Image from "next/image";

interface PostClientProps {
  post: SafePost;
}

const PostClient: React.FC<PostClientProps> = ({ post }) => {
  const {
    id,
    user,
    title,
    description,
    createdAt,
    duration,
    location,
    expiresAt,
  } = post;

  return (
    <div className="flex  flex-col gap-6">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold mb-1">{title}</h1>
          <Badge variant="secondary" className=" capitalize rounded font-bold">
            {duration}
          </Badge>
        </div>
        <p className="text-xs text-slate-400 font-semibold flex gap-1 items-center">
          <TimerIcon size={15} />
          {fDate(createdAt)}
        </p>
      </div>
      <div className=" flex gap-2">
        <div className=" bg-gray-300 dark:bg-slate-800 w-14  rounded-sm ">
          {user.image ? (
            <Image
              src={user.image}
              height={60}
              width={80}
              alt={user.id}
              className="w-full h-full object-cover"
            />
          ) : (
            <p className=" w-full h-full flex justify-center items-center font-bold text-xl">
              {user.name && getInitials(user?.name)}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span className=" font-bold">{user.name}</span>
          <span className="text-xs text-slate-400 font-semibold flex gap-1 items-center">
            <GlobeIcon size={15} />
            {location}
          </span>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="flex flex-col gap-2"
      />
      {expiresAt && (
        <p className=" text-right text-sm font-bold ">
          <span className="    font-normal ">Apply before:</span>{" "}
          {fDate(expiresAt)}{" "}
        </p>
      )}
    </div>
  );
};
export default PostClient;
