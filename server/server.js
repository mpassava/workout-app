import express from "express";
import { config } from "./config.js";
import Database from "./database.js";

const app = express();
const port = process.env.PORT || 3030;

const db = new Database(config);

app.get("/", async (_, res) => {
  try {
    // db.connect();
    res.send(`Server is running in ${process.env.NODE_ENV} mode`);
  } catch(err) {
    res.send(err.stack)
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error(err.message, "error starting server");
  }
  console.log(`server listing on port ${port}`);
});
