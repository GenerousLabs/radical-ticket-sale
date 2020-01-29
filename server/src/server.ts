import { queryType, stringArg, makeSchema } from "nexus";
import { GraphQLServer } from "graphql-yoga";

import campaignStatus from "./types/queries/campaignStatus.query";
import pledgeStatus from "./types/queries/pledgeStatus.query";
import submitEmail from "./types/mutations/submitEmail.mutation";
import submitPledge from "./types/mutations/submitPledge.mutation";

const Query = queryType({
  definition(t) {
    t.string("hello", {
      args: { name: stringArg({ nullable: true }) },
      resolve: (parent, { name }) => `Hello ${name || "World"}!`
    });
  }
});

const schema = makeSchema({
  types: [Query, campaignStatus, pledgeStatus, submitEmail, submitPledge],
  outputs: {
    schema: __dirname + "/../generated/schema.graphql",
    typegen: __dirname + "/../generated/typings.ts"
  }
});

const server = new GraphQLServer({
  schema
});

server.start(() => "Server is running on http://localhost:4000 #BqKNOE");
