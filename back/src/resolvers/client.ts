import { ApolloError } from "apollo-server-express";
import { getMongoManager } from "typeorm";
import {
  ClientsReturn,
  CreateClientReturn,
  DeleteClientReturn,
  MutationCreateClientArgs,
  MutationDeleteClientArgs,
  MutationUpdateClientArgs,
  QueryClientsArgs,
  RequireFields,
  Resolver,
  Resolvers,
  ResolverTypeWrapper,
  UpdateClientReturn,
} from "../generated/graphql";
import { Client } from "../models/client";
import { User } from "../models/user";
import { Context } from "../types";

// @ts-ignore
export const clientsResolver: Resolver<
  ResolverTypeWrapper<ClientsReturn>,
  {},
  Context,
  RequireFields<QueryClientsArgs, never>
> = async (_, { input }: { input: { id: string } }) => {
  if (input?.id)
    return { clients: [await getMongoManager().findOne(Client, input.id)] };

  const clients = await getMongoManager().find(Client);

  return { clients };
};

export const createClientResolver: Resolver<
  ResolverTypeWrapper<CreateClientReturn>,
  {},
  Context,
  RequireFields<MutationCreateClientArgs, "input">
> = async (_, { input }) => {
  let client = await getMongoManager().create(Client, input);
  client = await getMongoManager().save(client);

  return { createdClient: client as any };
};

// @ts-ignore
export const updateClientResolver: Resolver<
  ResolverTypeWrapper<UpdateClientReturn>,
  {},
  Context,
  RequireFields<MutationUpdateClientArgs, "input">
> = async (_, { input }) => {
  await getMongoManager().update(Client, input.id, input);
  const client = await getMongoManager().findOne(Client, { id: input.id });

  return { updatedClient: client };
};

export const deleteClientResolver: Resolver<
  ResolverTypeWrapper<DeleteClientReturn>,
  {},
  Context,
  RequireFields<MutationDeleteClientArgs, "input">
> = async (_, { input: { id } }: { input: { id: string } }) => {
  await getMongoManager().delete(Client, id);

  return { deletedClientId: id };
};

export const deleteClientFileResolver: Resolvers<Context>["Mutation"]["deleteClientFile"] = async (_, { input: { clientId, fileId } }) => {
  const manager = await getMongoManager()

  const client = await manager.findOne(Client, clientId);

  if (!client) throw new ApolloError("Client not found", "CLIENT_NOT_FOUND");

  if (!client?.files?.find(file => file.id === fileId)) throw new ApolloError("File not found", "FILE_NOT_FOUND");

  client.files = client.files.filter(file => file.id !== fileId);

  await manager.save(client);

  return { deletedFileId: fileId };
};

export const ClientResolvers: Resolvers<Context> = {
  Client: {
    sales: async (client) => {
      const salesId = client.salesId;
      const manager = getMongoManager();
      const sales = await manager.findOne(User, salesId);

      return sales;
    },
  },
};
