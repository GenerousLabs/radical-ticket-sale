import { queryField, objectType } from "nexus";

const type = objectType({
  name: "PledgeStatusType",
  definition(t) {
    t.int("amountCents");
  }
});

export default queryField("pledgeStatus", {
  type,
  args: {},
  async resolve(root, args, context) {
    return {
      amountCents: 2200
    };
  }
});
