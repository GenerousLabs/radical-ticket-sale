import { mutationField, inputObjectType, objectType } from "nexus";
import stripe from "../../stripe";

const typeName = "GetPaymentIntent";
const fieldName = typeName.substring(0, 1).toLowerCase() + typeName.substr(1);

const input = inputObjectType({
  name: `${typeName}Input`,
  definition(t) {
    t.int("price", { required: true });
  }
});

const response = objectType({
  name: `${typeName}Response`,
  definition(t) {
    t.boolean("success");
    t.string("message", { nullable: true });
    t.string("clientSecret");
  }
});

export default mutationField(fieldName, {
  type: response,
  args: {
    input: input.asArg({ required: true })
  },
  async resolve(_, args, context) {
    const { price } = args.input;

    const intent = await stripe.paymentIntents.create({
      amount: price,
      currency: "eur"
    });

    console.log("intent #gxChpW", intent.client_secret);

    return {
      success: true,
      message: `Your price was ${price}`,
      clientSecret: intent.client_secret
    };
  }
});
