import { queryField, objectType } from "nexus";

const type = objectType({
  name: "PledgeStatusType",
  definition(t) {
    t.boolean("pledged");
    t.int("amountCents");
  }
});

export default queryField("pledgeStatus", {
  type,
  args: {},
  async resolve(root, args, context) {
    return {
      pledged: true,
      amountCents: 2200
    };
  }
});
