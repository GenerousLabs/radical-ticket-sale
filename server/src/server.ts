import { makeSchema } from "nexus";
import { GraphQLServer } from "graphql-yoga";

import campaignStatus from "./schema/queries/campaignStatus.query";
import pledgeStatus from "./schema/queries/pledgeStatus.query";
import submitEmail from "./schema/mutations/submitEmail.mutation";
import submitPledge from "./schema/mutations/submitPledge.mutation";

const schema = makeSchema({
  types: [campaignStatus, pledgeStatus, submitEmail, submitPledge],
  outputs: {
    schema: __dirname + "/../generated/schema.graphql",
    typegen: __dirname + "/../generated/typings.ts"
  }
});

const server = new GraphQLServer({
  schema
});

server.start(() => "Server is running on http://localhost:4000 #BqKNOE");
