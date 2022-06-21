import { Entity, Column } from "typeorm";
import { gql } from "apollo-server-express";
import { FileType } from "../generated/graphql";

@Entity()
export class File {
  @Column()
  id: string;
  @Column()
  name: string;
  @Column()
  type: FileType;
  @Column()
  fileId: string;
  @Column()
  creationDate: string;
}

export const fileGql = gql`
  enum FileType {
    Other
  }
  type File {
    id: String!
    name: String!
    type: FileType!
    fileId: String!
    fileUrl: String!
    creationDate: String!
  }
`;
