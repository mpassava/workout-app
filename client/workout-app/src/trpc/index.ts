import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => "hello trpc"),
});

export type AppRouter = typeof appRouter;
