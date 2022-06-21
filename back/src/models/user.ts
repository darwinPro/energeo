import { Entity, ObjectIdColumn, Column } from "typeorm";
import { gql } from "apollo-server-express";
import { UserRole, UserState } from "../generated/graphql";

@Entity()
export class User {
  @ObjectIdColumn()
  id: string;
  @Column()
  googleId?: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  role?: UserRole;
  @Column()
  state?: UserState;
}

export const userGql = gql`
  enum UserRole {
    admin
    assistant
    sales
  }

  enum UserState {
    enabled
    disabled
  }

  type User {
    id: String!
    googleId: String
    firstName: String!
    lastName: String!
    email: String!
    role: UserRole
    state: UserState
  }

  # Get user
  type UserReturn {
    token: String!
    user: User!
  }

  # Get user list
  type UsersReturn {
    users: [User!]
  }

  # Create user
  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    role: UserRole!
    state: UserState
  }
  type CreateUserReturn {
    createdUser: User!
  }

  # Update user
  input UpdateUserInput {
    id: String!
    firstName: String
    lastName: String
    role: UserRole
    state: UserState
  }
  type UpdateUserReturn {
    updatedUser: User!
  }

  # Delete user
  input DeleteUserInput {
    id: String!
  }
  type DeleteUserReturn {
    deletedUserId: String!
  }
`;
