"use client";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import SignInUpModal from "./SignInUpModal";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types/prisma";
import { SignInUpModalType } from "@/types/common";
import useSignInUpModal from "@/app/hooks/useSignInUpModal";
import Link from "next/link";
interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const { setOpen, setModalFor } = useSignInUpModal();
  const handleModalOpen = (modal: SignInUpModalType) => {
    setOpen(true);
    setModalFor(modal);
  };
  return (
    <div className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  ">
      <div className=" container flex h-14 items-center  ">
        <Link href="/">
          <h1 className="text-xl">
            <span className=" font-bold text-2xl ">Github </span>Jobs
          </h1>
        </Link>
        <div className="flex-1"></div>
        <div className="flex gap-2">
          <ModeToggle />
          {currentUser ? (
            <UserMenu currentUser={currentUser} />
          ) : (
            <>
              <Button
                variant="default"
                onClick={() => handleModalOpen("sign-in")}
              >
                Log in
              </Button>
              <Button
                variant="outline"
                onClick={() => handleModalOpen("sign-up")}
              >
                Sign Up
              </Button>
              <SignInUpModal />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
