import { Resolvers } from "../generated/graphql";
import { Context } from "../types";
import { getFilePresignedLink } from "../utils/fileStorage";

export const FileResolvers: Resolvers<Context> = {
  File: {
    fileUrl: async (parent) => {
      const key = parent.fileId;

      const url = getFilePresignedLink(key);

      return url;
    },
  },
};
