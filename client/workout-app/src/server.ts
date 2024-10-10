import 'dotenv/config'
import express from "express";
import chalk from "chalk";
import morgan from "morgan";
import debugModule from "debug";
import { nextApp, nextHandler } from "./lib/next-server-utils";

const PORT = Number(process.env.PORT) || 3000;
const debug = debugModule("server");
const app = express();

const start = async () => {
  debug("starting app");
  app.use(morgan("tiny"));

  app.use((req, res) => nextHandler(req, res));

  app.route("/api/auth")
    .get()
    .post()
    .patch()

  nextApp.prepare().then(() => {
    app.listen(PORT, () => {
      debug(`express listening on port ${chalk.green(PORT)}`);
    });
  });
};

start();
