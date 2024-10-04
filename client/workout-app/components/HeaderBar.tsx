import { UserRound } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const HeaderBar = () => {
  return (
    <MaxWidthWrapper className="flex flex-row min-h-14 py-1 bg-foreground/30">
      <div className="flex-grow flex-1 text-left mt-auto">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-2xl">
          Workout Builder <span className="text-blue-600">V1.0</span>
        </h1>
      </div>
      <div className="mt-auto">
        <Link href="#">
          <UserRound className="h-8 w-8 hover:bg-primary/25 rounded-full" />
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeaderBar;
