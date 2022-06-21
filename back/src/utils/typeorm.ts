import { createConnection } from "typeorm";
import { Client } from "../models/client";
import { User } from "../models/user";
import { databaseUrl } from "./env";

export const init = () =>
  createConnection({
    type: "mongodb",
    url: databaseUrl,
    entities: [User, Client],
    useUnifiedTopology: true,
  });
