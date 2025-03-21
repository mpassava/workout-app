import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Build your <span className="text-primary">gains</span> today.
        </h1>
        <p className="text-md tracking-tight text-muted-foreground mt-10 w-3/5">
          Welcome to workout builder, the app that lets you organize, build, and
          customize your workouts. Try it for free.
        </p>
        <Link href="/sign-up">
          <Button className="mt-10">
            <UserPlus className="mr-2 h-4 w-4" /> Get Started
          </Button>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
