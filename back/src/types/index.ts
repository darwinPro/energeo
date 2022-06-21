import { Request as ExpressRequest } from "express";
import { User } from "../models/user";

export type Context = { user?: User; token?: string };
export type Request = ExpressRequest & Context;
