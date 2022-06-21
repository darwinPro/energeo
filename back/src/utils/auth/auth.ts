import express from "express";
import { Request } from "../../types";
import { User } from "../../models/user";
import { verifyJwt } from "./jwt";
import { getMongoManager } from "typeorm";

const getBearerToken = (req: Request) => {
  const { authorization } = req.headers;

  if (!authorization) return null;

  const split = authorization.split(" ");

  if (split.length !== 2) return null;

  const token = split[1];

  if (!token) return null;

  return token;
};

/**
 * Enhances req with token and user if present
 */
export const auth = async (req: Request, _, next: express.NextFunction) => {
  try {
    req.token = null;
    req.user = null;

    const reqToken = getBearerToken(req);

    if (reqToken) {
      const { id } = await verifyJwt(reqToken);
      const user = await getMongoManager().findOne(User, id);

      req.token = reqToken;
      req.user = user;
    }

    next();
  } catch (err) {
    console.error(err);
    next();
  }
};

/**
 * Returns 401 if user is not authenticated
 */
export const authOr401 = (
  req: Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!req.user) return res.status(401).send();

  next();
};
