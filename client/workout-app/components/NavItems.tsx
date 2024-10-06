import Link from "next/link";

const NavItems = () => (
  <div className="flex flex-grow flex-1 gap-6 justify-evenly text-md font-bold tracking-tight text-foreground">
    <div className="flex-grow flex-1 text-center">
      <Link href="#">Builder</Link>
    </div>
    <div className="flex-grow flex-1 text-center">
      <Link href="#">My Workouts</Link>
    </div>
  </div>
);

export default NavItems;
