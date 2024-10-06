import Link from "next/link";

const NavItems = () => (
  <div className="flex flex-grow flex-1 gap-1 min-w-fit justify-center text-md font-bold tracking-tight text-foreground h-8">
    <div className="flex-1 text-center mt-auto whitespace-nowrap hover:text-primary hover:text-lg transition-all">
      <Link href="#">Builder</Link>
    </div>
    <div className="flex-1 text-center mt-auto whitespace-nowrap hover:text-primary hover:text-lg transition-all">
      <Link href="#">My Workouts</Link>
    </div>
  </div>
);

export default NavItems;
