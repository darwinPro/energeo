import { pick } from "lodash";
import jwt from "jsonwebtoken";
import { User } from "../../models/user";
import { secretKey } from "../env";

export const signJwt = (user: User): string => {
  const userData = pick(user, ["id", "googleId"]);
  const token = jwt.sign(userData, secretKey, { expiresIn: "7d" });

  return token;
};

export const verifyJwt = (token: string): { id: string; googleId: string } =>
  jwt.verify(token, secretKey) as any;
