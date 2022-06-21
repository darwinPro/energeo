import { AuthenticationError, SchemaDirectiveVisitor } from "apollo-server";
import { User } from "../models/user";

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const originalResolve = field.resolve;

    field.resolve = (...args: any) => {
      const context = args[2];
      const { user }: { user: User } = context;

      if (!user) {
        throw new AuthenticationError("Not authenticated as user.");
      }

      return originalResolve.apply(this, args);
    };
  }
}

export default AuthDirective;
