import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <div className="container relative pt-20 flex flex-col items-center justify-center lg:px-0">
        <div className="mx-auto sm:w-96 w-full flex flex-col justify-center space-y-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link
              href="/sign-in"
              className={buttonVariants({
                variant: "link",
                className: "gap-0.5",
              })}
            >
              Already have an account? Sign-In
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
