import { UserRound } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import NavItems from "./NavItems";

const Navbar = () => (
    <MaxWidthWrapper className="flex flex-row justify-between min-h-12 py-1 bg-foreground/5">
      <div className="mt-auto flex-grow flex-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-2xl">
          workout builder <span className="text-blue-600">v1.0</span>
        </h1>
      </div>
      <NavItems />
      <div className="mt-auto flex-grow flex-1 ">
        <Link href="#">
          <UserRound className="ml-auto h-8 w-8 hover:bg-primary/25 rounded-full" />
        </Link>
      </div>
    </MaxWidthWrapper>
  );


export default Navbar;
