import { queryType, stringArg, makeSchema, mutationType } from "nexus";
import { GraphQLServer } from "graphql-yoga";

import { submitEmail } from "./types/mutations/submitEmail.mutation";

const Query = queryType({
  definition(t) {
    t.string("hello", {
      args: { name: stringArg({ nullable: true }) },
      resolve: (parent, { name }) => `Hello ${name || "World"}!`
    });
  }
});

const schema = makeSchema({
  types: [Query, submitEmail],
  outputs: {
    schema: __dirname + "/../generated/schema.graphql",
    typegen: __dirname + "/../generated/typings.ts"
  }
});

const server = new GraphQLServer({
  schema
});

server.start(() => "Server is running on http://localhost:4000 #BqKNOE");
