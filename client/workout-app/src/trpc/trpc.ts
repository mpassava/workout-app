import { initTRPC } from "@trpc/server";

const t = initTRPC.context().create({
  transformer: undefined
});

export const router = t.router;
export const publicProcedure = t.procedure;
