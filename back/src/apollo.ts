import { ApolloServer, gql } from "apollo-server-express";
import { Express } from "express";
import AuthDirective from "./directives/ApolloAuthDirective";
import RoleDirective from "./directives/RoleDirective";

import { Resolvers } from "./generated/graphql";
import { clientGql } from "./models/client";
import { clientContactGql } from "./models/clientContact";
import { fileGql } from "./models/file";
import { userGql } from "./models/user";
import {
  ClientResolvers,
  clientsResolver,
  createClientResolver,
  deleteClientFileResolver,
  deleteClientResolver,
  updateClientResolver,
} from "./resolvers/client";
import { FileResolvers } from "./resolvers/file";
import {
  createUserResolver,
  deleteUserResolver,
  updateUserResolver,
  userResolver,
  usersResolver,
} from "./resolvers/user";
import { Context } from "./types";

const typeDefs = gql`
  ${fileGql}
  ${userGql}
  ${clientContactGql}
  ${clientGql}

  directive @auth on FIELD_DEFINITION
  directive @role(roles: [UserRole!]) on FIELD_DEFINITION

  type Query {
    user(token: String): UserReturn!
    users: UsersReturn! @role(roles: [admin, assistant, sales])

    clients(input: ClientsInput): ClientsReturn!
      @role(roles: [admin, assistant, sales])
  }

  type Mutation {
    # User
    createUser(input: CreateUserInput!): CreateUserReturn!
      @role(roles: [admin, assistant, sales])
    updateUser(input: UpdateUserInput!): UpdateUserReturn!
      @role(roles: [admin, assistant, sales])
    deleteUser(input: DeleteUserInput!): DeleteUserReturn!
      @role(roles: [admin, assistant, sales])

    # Client
    createClient(input: CreateClientInput!): CreateClientReturn!
      @role(roles: [admin, assistant, sales])
    updateClient(input: UpdateClientInput!): UpdateClientReturn!
      @role(roles: [admin, assistant, sales])
    deleteClient(input: DeleteClientInput!): DeleteClientReturn!
      @role(roles: [admin, assistant, sales])
    deleteClientFile(input: DeleteClientFileInput!): DeleteClientFileOutput! @role(roles: [admin, assistant, sales])
  }
`;

const resolvers: Resolvers<Context> = {
  ...FileResolvers,
  ...ClientResolvers,
  Query: {
    user: userResolver,
    users: usersResolver,
    clients: clientsResolver,
  },
  Mutation: {
    createUser: createUserResolver,
    updateUser: updateUserResolver,
    deleteUser: deleteUserResolver,
    createClient: createClientResolver,
    updateClient: updateClientResolver,
    deleteClient: deleteClientResolver,
    deleteClientFile: deleteClientFileResolver
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: { req }) => ({
    user: req.user,
    token: req.token,
  }),
  schemaDirectives: {
    auth: AuthDirective,
    role: RoleDirective,
  },
});

export default (app: Express) => server.applyMiddleware({ app });
