import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  ">
      <div className=" container flex h-14 items-center  ">
        <h1>Github Jobs</h1>
        <div className="flex-1"></div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
