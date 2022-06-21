import { Router } from "express";
import { UploadedFile } from "express-fileupload";
import { getMongoManager } from "typeorm";
import { v4 as uuid } from "uuid";
import { FileType, UserRole } from "../generated/graphql";
import { Client } from "../models/client";
import { User } from "../models/user";
import { Request } from "../types";
import { saveFile } from "../utils/fileStorage";

const router = Router();

const isAuthorized = (user: User, client: Client) => {
  if (user.role === UserRole.Admin) return true;
  if (user.role === UserRole.Assistant) return true;
  if (user.role === UserRole.Sales && client.salesId === user.id) return true;

  return false;
};

router.post("/", async (req: Request, res) => {
  if (!req.user) return res.status(401).send();
  const clientId = req.query.clientId as string;

  if (!clientId) return res.status(400).send("No client id");

  const client = await getMongoManager().findOne(Client, clientId);

  if (!client) return res.status(400).send("Client not found");

  if (!isAuthorized(req.user, client)) return res.status(401).send();

  if (!req.files.file) return res.status(400).send("No file");

  const file = req.files.file as UploadedFile;
  const key = await saveFile(file);

  await getMongoManager().update(Client, client.id, {
    files: [
      ...(client.files || []),
      {
        id: uuid(),
        name: file.name,
        type: FileType.Other,
        fileId: key,
        creationDate: new Date().toISOString(),
      },
    ],
  });

  return res.send();
});

export default router;
