import { mutationField, inputObjectType, objectType } from "nexus";

const SubmitEmailInput = inputObjectType({
  name: "SubmitEmailInput",
  definition(t) {
    t.string("email", { required: true });
  }
});

const submitEmailResponse = objectType({
  name: "SubmitEmailResponse",
  definition(t) {
    t.boolean("success");
    t.string("message", { nullable: true });
  }
});

export const submitEmail = mutationField("submitEmail", {
  type: submitEmailResponse,
  args: {
    input: SubmitEmailInput
  },
  async resolve(_, args, context) {
    const email = args.input.email;

    return {
      success: true,
      message: `Your email was ${email}`
    };
  }
});
