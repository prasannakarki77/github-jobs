import { ModeToggle } from "../ModeToggle";
import SignInUpModal from "../SignInUpModal";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types/prisma";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  ">
      <div className=" container flex h-14 items-center  ">
        <h1 className="text-xl">
          <span className=" font-bold text-2xl ">Github </span>Jobs
        </h1>
        <div className="flex-1"></div>
        <div className="flex gap-2">
          <ModeToggle />
          {currentUser ? (
            <UserMenu currentUser={currentUser} />
          ) : (
            <>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Log in</Button>
                </DialogTrigger>
                <SignInUpModal modalFor={"sign-in"} />
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Sign Up</Button>
                </DialogTrigger>
                <SignInUpModal modalFor={"sign-up"} />
              </Dialog>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;