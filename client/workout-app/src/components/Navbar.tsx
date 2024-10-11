"use client";

import { UserRound } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import NavItems from "./NavItems";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState<null | string>(null);

  const handleLogoClick = () => {
    setActive(null);
  };

  const user = null;

  return (
    <nav>
      <MaxWidthWrapper className="flex flex-row justify-between min-h-12 py-1 items-center">
        <div className="flex-grow flex-1">
          <Link href="/" onClick={handleLogoClick}>
            <Image
              src="/logo-1.png"
              alt="workout builder logo"
              width={200}
              height={43}
            ></Image>
          </Link>
        </div>
        {user ? <NavItems active={active} setActive={setActive} /> : null}
        {user ? (
          <div className="flex-grow flex-1">
            <Link href="#">
              <UserRound className="ml-auto h-8 w-8 hover:bg-primary/25 transition-all rounded-full" />
            </Link>
          </div>
        ) : (
          <div className="flex-grow flex-1 flex">
            <div className="ml-auto flex gap-1">
              <div className="w-px h-full bg-foreground/5"></div>
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "font-bold"
                )}
              >
                Sign In
              </Link>
              <div className="w-px h-full bg-foreground/5"></div>
              <Link
                href="/sign-up"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "font-bold"
                )}
              >
                Create An Account
              </Link>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="h-px bg-foreground/5"></div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
