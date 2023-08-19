"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center  gap-8">
      <Image src={"/404.svg"} alt="404" width={450} height={450} />
      <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
