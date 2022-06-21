import { Entity, Column } from "typeorm";
import { gql } from "apollo-server-express";

@Entity()
export class ClientContact {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  phone: string;
  @Column()
  email: string;
  @Column()
  birthDate: string;
}

export const clientContactGql = gql`
  type ClientContact {
    firstName: String
    lastName: String
    phone: String
    email: String
    birthDate: String
  }

  input CreateClientContactInput {
    firstName: String!
    lastName: String!
    phone: String
    email: String
    birthDate: String
  }

  input UpdateClientContactInput {
    firstName: String
    lastName: String
    phone: String
    email: String
    birthDate: String
  }
`;
