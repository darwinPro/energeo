import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import { json } from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { auth } from "./utils/auth/auth";
import { port } from "./utils/env";
import apolloMiddleware from "./apollo";
import { init } from "./utils/typeorm";
import routes from "./routes";

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(cookieParser());
app.use(json());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50 Mb
    abortOnLimit: true,
  })
);

app.get("/", (_, res) => res.send("up"));
app.use(auth);
app.use(routes);

apolloMiddleware(app);

(async () => {
  console.log("Connecting to the database...");
  await init();
  console.log("Connected.");
  console.log("Starting server...");
  app.listen(port, () => {
    console.log(`Serer listening at port ${port} !`);
  });
})();
