import { Entity, ObjectIdColumn, Column } from "typeorm";
import { gql } from "apollo-server-express";
import { ClientState } from "../generated/graphql";
import { ClientContact } from "./clientContact";
import { File } from "./file";

@Entity()
export class Client {
  @ObjectIdColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  salesId?: string;
  @Column()
  address?: string;
  @Column()
  programmedVisitDate?: string;
  @Column()
  billType?: string;
  @Column()
  siret?: string;
  @Column()
  revenue?: number;
  @Column()
  validationDate?: string;
  @Column()
  contractStartDate?: string;
  @Column()
  contractEndDate?: string;
  @Column()
  paimentReceptionDate?: string;
  @Column()
  contact?: ClientContact;
  @Column()
  state: ClientState;
  @Column()
  files?: File[];
}

export const clientGql = gql`
  enum ClientState {
    initial
    awaitingCotation
    cotationReceived
    fileClosed
    cotationSigned
    cotationValidated
    transactionSecured
    disabled
  }
  type Client {
    id: String!
    name: String!
    salesId: String
    sales: User
    address: String
    programmedVisitDate: String
    billType: String
    siret: String
    revenue: Float
    validationDate: String
    contractStartDate: String
    contractEndDate: String
    paimentReceptionDate: String
    contact: ClientContact
    state: ClientState
    files: [File!]
  }

  # Get clients
  input ClientsInput {
    id: String
  }
  type ClientsReturn {
    clients: [Client!]
  }

  # Create client
  input CreateClientInput {
    name: String!
    salesId: String
    address: String
    programmedVisitDate: String
    billType: String
    siret: String
    revenue: Float
    validationDate: String
    contractStartDate: String
    contractEndDate: String
    paimentReceptionDate: String
    contact: CreateClientContactInput
    state: ClientState
  }
  type CreateClientReturn {
    createdClient: Client!
  }

  # Update client
  input UpdateClientInput {
    id: String!
    name: String
    salesId: String
    address: String
    programmedVisitDate: String
    billType: String
    siret: String
    revenue: Float
    validationDate: String
    contractStartDate: String
    contractEndDate: String
    paimentReceptionDate: String
    contact: CreateClientContactInput
    state: ClientState
  }
  type UpdateClientReturn {
    updatedClient: Client!
  }

  # Delte client
  input DeleteClientInput {
    id: String!
  }
  type DeleteClientReturn {
    deletedClientId: String!
  }

  # Delete file
  input DeleteClientFileInput {
    clientId: String!
    fileId: String!
  }
  type DeleteClientFileOutput {
    deletedFileId: String!
  }
`;
