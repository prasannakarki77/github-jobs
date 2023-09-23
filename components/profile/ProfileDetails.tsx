import { User } from "@prisma/client";
import { Separator } from "../ui/separator";
import { format } from "date-fns";
import { SafeUser } from "@/types/prisma";

interface IProfileSidebar {
  currentUser: SafeUser;
}

const ProfileDetails: React.FC<IProfileSidebar> = ({ currentUser }) => {
  const { email, name, image, role } = currentUser;

  return (
    <div className="flex flex-col gap-4 p-6   rounded-lg ">
      <div className="">
        <h1 className="text-lg font-semibold mb-2">
          {role === "USER" ? "Personal" : "Company"} Details
        </h1>
        <div className=" grid grid-cols-2 gap-4 mb-4">
          <TextWithTitle text={name} title="Name" />
          <TextWithTitle text={email} title="Email" />
        </div>
      </div>
    </div>
  );
};
export default ProfileDetails;

const TextWithTitle: React.FC<{
  text: string | null;
  title: string;
}> = ({ text, title }) => (
  <p className="flex flex-col gap-2 text-slate-600 dark:text-slate-400  font-medium ">
    <span className="text-sm capitalize">{title}</span>
    <span className=" bg-secondary p-2 rounded-lg">{text || "------"}</span>
  </p>
);
