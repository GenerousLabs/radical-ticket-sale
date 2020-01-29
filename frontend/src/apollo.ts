import ApolloClient, { Operation } from "apollo-boost";

// import { getToken, userHasRole } from "./services/auth/auth.service";

const uri = process.env.REACT_APP_GRAPHQL_URL;

const getToken = () => "token";

const getAuthHeader = () => {
  const token = getToken();
  if (token) {
    return {
      Authorization: `Bearer ${getToken()}`
    };
  }
  return {};
};

const client = new ApolloClient({
  uri,
  request: (operation: Operation) => {
    operation.setContext({
      headers: { ...getAuthHeader() }
    });
  }
});

export default client;
