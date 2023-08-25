import { Badge } from "@/components/ui/badge";
import { fDate } from "@/lib/utils";
import { SafePost } from "@/types/prisma";
import { TimerIcon } from "lucide-react";
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
    <div className="flex  flex-col gap-3">
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
