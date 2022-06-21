import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { backendUrl } from "../utils/env";

let token: string = null;

export const setToken = (newToken: string) => (token = newToken);

const httpLink = createHttpLink({
  uri: new URL("/graphql", backendUrl).href,
  fetch: (uri, options) => {
    const { operationName } = JSON.parse(options.body.toString());
    return fetch(`${uri}?operationName=${operationName}`, options);
  },
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function Provider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Provider;
