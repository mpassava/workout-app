import Link from "next/link";

const NavItems = () => (
  <div className="flex flex-grow flex-1 gap-6 justify-evenly text-lg font-bold tracking-tight text-foreground mt-auto">
    <div className="flex-grow flex-1 text-center mt-auto">
      <Link href="#">Builder</Link>
    </div>
    <div className="flex-grow flex-1 text-center mt-auto">
      <Link href="#">My Workouts</Link>
    </div>
  </div>
);

export default NavItems;
