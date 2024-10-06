import { UserRound } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import NavItems from "./NavItems";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
    <MaxWidthWrapper className="flex flex-row justify-between min-h-12 py-1 items-center">
      <div className="flex-grow flex-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          <Image src="/logo-1.png" alt="workout builder logo" width={200} height={43}></Image>
        </h1>
      </div>
      <NavItems />
      <div className="flex-grow flex-1">
        <Link href="#">
          <UserRound className="ml-auto h-8 w-8 hover:bg-primary/25 transition-all rounded-full" />
        </Link>
      </div>
    </MaxWidthWrapper>
    <MaxWidthWrapper>
      <div className="h-px bg-foreground/5"></div>
    </MaxWidthWrapper>
    </>
  );
};

export default Navbar;
