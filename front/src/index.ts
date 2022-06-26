import express from "express";
import next from "next";
import path from "path";
import morgan from "morgan";
import { json } from "body-parser";
import cookieParser from "cookie-parser";

const port = process.env.FRONT_PORT;
const dev = process.env.NODE_ENV !== "production";

const app = express();
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

app.use(morgan(dev ? "tiny" : "combined"));
app.use(json());
app.use(cookieParser());

app.get("/sw.js", (_, res) =>
  res.sendFile(path.join(__dirname, "../.next/sw.js"))
);
app.get("/workbox-*", (req, res) =>
  res.sendFile(path.join(__dirname, "../.next", req.url))
);

app.use((req, res) => {
  handle(req, res);
});

nextApp.prepare().then(() => {
  app.listen(port, () => {
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );
  });
});
