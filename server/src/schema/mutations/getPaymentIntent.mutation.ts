import { mutationField, inputObjectType, objectType, enumType } from "nexus";
import stripe from "../../stripe";

const typeName = "GetPaymentIntent";
const fieldName = typeName.substring(0, 1).toLowerCase() + typeName.substr(1);

const paymentMethodEnum = enumType({
  name: "PaymentMethod",
  members: { CARD: "CARD", SEPA: "SEPA" }
});

const input = inputObjectType({
  name: `${typeName}Input`,
  definition(t) {
    t.int("price", { required: true });
    t.field("paymentMethod", { type: paymentMethodEnum });
  }
});

const response = objectType({
  name: `${typeName}Response`,
  definition(t) {
    t.boolean("success");
    t.string("message", { nullable: true });
    t.string("intentId");
    t.string("intentClientSecret");
    t.int("price");
  }
});

export default mutationField(fieldName, {
  type: response,
  args: {
    input: input.asArg({ required: true })
  },
  async resolve(_, args, context) {
    const { price, paymentMethod } = args.input;

    if (paymentMethod === "SEPA") {
      throw new Error("SEPA is not currently supported. #3bAXuO");
    }

    const intent = await stripe.paymentIntents.create({
      amount: price,
      currency: "eur",
      // eslint-disable-next-line @typescript-eslint/camelcase
      capture_method: "manual"
    });

    /*
    const intent =
      paymentMethod === "CARD"
        ? await stripe.paymentIntents.create({
            amount: price,
            currency: "eur",
            // eslint-disable-next-line @typescript-eslint/camelcase
            capture_method: "manual"
          })
        : await stripe.paymentIntents.create({
            amount: price,
            currency: "eur",
            // eslint-disable-next-line @typescript-eslint/camelcase
            setup_future_usage: "off_session",
            // eslint-disable-next-line @typescript-eslint/camelcase
            payment_method_types: ["sepa_debit"]
          });
    */

    return {
      success: true,
      message: `Your price was ${price}`,
      intentId: intent.id,
      intentClientSecret: intent.client_secret,
      price
    };
  }
});
