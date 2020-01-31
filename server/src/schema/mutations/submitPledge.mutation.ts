import { mutationField, inputObjectType, objectType } from "nexus";

const typeName = "SubmitPledge";
const fieldName = typeName.substr(0, 1).toLowerCase() + typeName.substr(1);

const input = inputObjectType({
  name: `${typeName}Input`,
  definition(t) {
    t.string("legalName", { required: true });
    t.string("intentId", { required: true });
    t.int("amountCents", { required: true });
    t.string("agreeTerms", { required: true });
  }
});

const response = objectType({
  name: `${typeName}Response`,
  definition(t) {
    t.boolean("success");
    t.string("message", { nullable: true });
  }
});

export default mutationField(fieldName, {
  type: response,
  args: {
    input: input.asArg({ required: true })
  },
  async resolve(root, args, context) {
    const { token, legalName, amountCents, agreeTerms } = args.input;

    console.log("Pledge Submitted #HOmZlt", args);

    return {
      success: true,
      message: `Your pledge has been recorded at ${amountCents}`
    };
  }
});
