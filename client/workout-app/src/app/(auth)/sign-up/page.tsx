"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const formSubmit = ({
    username,
    email,
    password,
  }: TAuthCredentialsValidator) => {
    // TODO send data to server
  };

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
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    {...register("username")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.username,
                    })}
                    placeholder=""
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder=""
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder=""
                  />
                </div>
                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
