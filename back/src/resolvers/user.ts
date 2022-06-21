import { ApolloError, ValidationError } from "apollo-server";
import verifyGoogleToken from "../utils/auth/verifyGoogleToken";
import { User } from "../models/user";
import { signJwt } from "../utils/auth/jwt";
import {
  CreateUserReturn,
  DeleteUserReturn,
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationUpdateUserArgs,
  QueryUserArgs,
  RequireFields,
  Resolver,
  ResolverTypeWrapper,
  UpdateUserReturn,
  UserReturn,
  UsersReturn,
} from "../generated/graphql";
import { Context } from "../types";
import { getMongoManager } from "typeorm";

export const userResolver: Resolver<
  ResolverTypeWrapper<UserReturn>,
  {},
  Context,
  RequireFields<QueryUserArgs, never>
> = async (_, { token }, { user: reqUser, token: reqToken }) => {
  if (reqUser) return { token: reqToken, user: reqUser };

  const data = await verifyGoogleToken(token);
  // Already existing user
  // 103543872607159250379
  let user = await getMongoManager().findOne(User, {
    where: { googleId: data.googleId },
  });

  // If user does not exist
  if (!user) {
    // Try to find by email
    // In the case he has been invited, but it's the first time he connects
    user = await getMongoManager().findOne(User, {
      where: { email: data.email },
    });

    if (user) {
      // If exists, update to add the googleId
      await getMongoManager().update(User, user.id, {
        googleId: data.googleId,
      });
      user = await getMongoManager().findOne(User, {
        where: { id: data.googleId },
      });
    } else {
      // Else, create the user
      user = await getMongoManager().create(User, data);
      user = await getMongoManager().save(user);
    }
  }

  const jwt = signJwt(user);

  return { token: jwt, user };
};

export const usersResolver: Resolver<
  ResolverTypeWrapper<UsersReturn>,
  {},
  Context,
  {}
> = async () => {
  const users = await getMongoManager().find(User);

  return { users };
};

export const createUserResolver: Resolver<
  ResolverTypeWrapper<CreateUserReturn>,
  {},
  Context,
  RequireFields<MutationCreateUserArgs, "input">
> = async (_, { input }) => {
  const usersWithSameEmail = await getMongoManager().find(User, {
    where: { email: input.email },
  });

  if (usersWithSameEmail.length)
    throw new ApolloError("A user with this email already exists", "EMAIL_ALREADY_EXISTS");

  let newUser = await getMongoManager().create(User, input);
  newUser = await getMongoManager().save(newUser);

  return { createdUser: newUser as any };
};

export const updateUserResolver: Resolver<
  ResolverTypeWrapper<UpdateUserReturn>,
  {},
  Context,
  RequireFields<MutationUpdateUserArgs, "input">
> = async (_, { input }) => {
  const manager = getMongoManager()
  await manager.update(User, input.id, input as any);
  const user = await manager.findOne(User, input.id);

  return { updatedUser: user };
};

export const deleteUserResolver: Resolver<
  ResolverTypeWrapper<DeleteUserReturn>,
  {},
  Context,
  RequireFields<MutationDeleteUserArgs, "input">
> = async (_, { input: { id } }: { input: { id: string } }, { user }) => {
  if (id === user.id) throw new ValidationError("You can not remove yourself");

  await getMongoManager().delete(User, id);

  return { deletedUserId: id };
};
