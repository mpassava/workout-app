import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import chalk from "chalk";
import morgan from "morgan";
import debugModule from "debug";
import { nextApp, nextHandler } from "./lib/next-server-utils";

const PORT = Number(process.env.PORT) || 3000;
const debug = debugModule("server");
const app = express();

app.use(morgan("tiny"));

app.use((req: Request, res: Response) => nextHandler(req, res));

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  debug(`internal error: ${err}`);
  res.status(500).send("internal server error");
});

(async function start() {
  debug("starting server...");
  try {
    debug("preparing nextApp...");
    await nextApp.prepare();
    app.listen(PORT, () => {
      debug(`express listening on port ${chalk.green(PORT)}`);
    });
  } catch (err) {
    debug(`error preparing nextApp: ${chalk.red(err)}`);
  }
})();
