import express from "express";

const app = express();
const port = process.env.PORT || 3030;

app.get("/", (_, res) => {
  res.send("Backend API");
});

app.listen(port, (err) => {
  if (err) {
    console.error(err.message, "error starting server");
  }
  console.log(`server listing on port ${port}`);
});
