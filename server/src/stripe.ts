import stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

export default new stripe(secretKey, {
  apiVersion: "2019-12-03"
});
