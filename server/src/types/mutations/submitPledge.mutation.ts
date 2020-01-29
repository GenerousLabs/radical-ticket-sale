import { mutationField, inputObjectType, objectType } from "nexus";

const typeName = "SubmitPledge";

const input = inputObjectType({
  name: `${typeName}Input`,
  definition(t) {
    t.string("token", { required: true });
    t.string("legalName", { required: true });
    t.int("amountCents", { required: true });
    t.boolean("agreeTerms", { required: true });
  }
});

const response = objectType({
  name: `${typeName}Response`,
  definition(t) {
    t.boolean("success");
    t.string("message", { nullable: true });
  }
});

export default mutationField(typeName, {
  type: response,
  args: {
    input: input.asArg({ required: true })
  },
  async resolve(root, args, context) {
    const { token, legalName, amountCents, agreeTerms } = args.input;

    return {
      success: true,
      message: `Your pledge has been recorded at ${amountCents}`
    };
  }
});
