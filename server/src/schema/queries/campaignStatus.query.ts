import { queryField, objectType } from "nexus";

const type = objectType({
  name: "CampaignStatusType",
  definition(t) {
    t.int("maximumPledgeCount");
    t.int("currentPledgeCount");
    t.int("totalPledgeAmountCents");
    t.int("minimumAmountCents");
    t.int("targetAmountCents");
  }
});

export default queryField("campaignStatus", {
  type,
  args: {},
  async resolve(root, args, contextg) {
    return {
      maximumPledgeCount: 1000,
      currentPledgeCount: 23,
      totalPledgeAmountCents: 4000,
      minimumAmountCents: 2300,
      targetAmountCents: 4500
    };
  }
});
