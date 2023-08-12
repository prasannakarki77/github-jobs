import { ModeToggle } from "./ModeToggle";
import SignInUpModal from "./SignInUpModal";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";

const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  ">
      <div className=" container flex h-14 items-center  ">
        <h1 className="text-xl">
          <span className=" font-bold text-2xl ">Github </span>Jobs
        </h1>
        <div className="flex-1"></div>
        <div className="flex gap-2">
          <ModeToggle />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">Sign in</Button>
            </DialogTrigger>
            <SignInUpModal />
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
