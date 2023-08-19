"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}
const EmptyState: React.FC<EmptyState> = ({
  title = "No Exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <div className={"text-center"}>
        <div className="text-2xl font-bold">{title}</div>
        <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
      </div>
      <div className="w-48 mt-4">
        {showReset && (
          <Button variant={"outline"} onClick={() => router.push("/")} />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
