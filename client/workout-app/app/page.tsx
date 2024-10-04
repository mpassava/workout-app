import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Build your <span className="text-primary">gains</span> today.
        </h1>
        <Button className="mt-10">
          <UserPlus className="mr-2 h-4 w-4" /> Get Started
        </Button>
      </div>
    </MaxWidthWrapper>
  );
}
