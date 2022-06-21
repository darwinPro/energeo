import { ForbiddenError, SchemaDirectiveVisitor } from "apollo-server";
import { User } from "../models/user";

class RoleDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const originalResolve = field.resolve;
    const { roles: neededRoles } = this.args;

    field.resolve = (...args: any) => {
      const { user }: { user: User } = args[2];

      if (!neededRoles.includes(user.role))
        throw new ForbiddenError("Forbidden");

      return originalResolve.apply(this, args);
    };
  }
}

export default RoleDirective;
