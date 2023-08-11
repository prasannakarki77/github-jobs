import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

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
          <Button variant="default">Sign in</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
