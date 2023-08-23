"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import useSignInUpModal from "@/app/hooks/useSignInUpModal";

interface ForbiddenProps {
  hideSignIn: boolean;
}
const Forbidden403 = ({ hideSignIn = false }: ForbiddenProps) => {
  const { setOpen, setModalFor } = useSignInUpModal();
  const handleSignIn = () => {
    setOpen(true);
    setModalFor("sign-in");
  };
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center  gap-8">
      <Image src={"/403.svg"} alt="404" width={450} height={450} />
      <div className=" flex items-center gap-3">
        <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
          Return to Home
        </Link>
        {!hideSignIn && (
          <Button onClick={handleSignIn} variant={"secondary"}>
            Sign in
          </Button>
        )}
      </div>
    </div>
  );
};

export default Forbidden403;
