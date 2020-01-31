import React, { useEffect, useState } from "react";
import {
  Elements,
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";
import { Button } from "@material-ui/core";

type Props = {
  clientSecret: string;
  onSubmit: () => void;
};

const Card: React.FC<Props &
  ReactStripeElements.InjectedStripeProps> = props => {
  const { clientSecret, onSubmit, stripe, elements } = props;

  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   debugger;
  // }, [stripe, elements]);

  if (!stripe || !elements) {
    return null;
  }

  return (
    <>
      <CardElement />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={async () => {
          setIsSubmitting(true);
          const card = elements.getElement("card");

          if (!card) {
            alert("ERROR #cQ1dCe: Failed to get card element");
            return;
          }

          try {
            const result = await stripe.confirmCardPayment(clientSecret, {
              payment_method: {
                card
              }
            });

            try {
              if (result.error) {
                alert(`PAYMENT ERROR #5IWn1m: ${result.error.message}`);
              } else {
                onSubmit();
              }
            } catch (error) {}
          } catch (error) {
            alert(`PAYMENT ERROR #CbAPVz: ${error.message}`);
          }
        }}
        disabled={isSubmitting}
      >
        Confirm Order
      </Button>
    </>
  );
};

const WrappedCard = injectStripe(Card);

const Stripe: React.FC<Props> = props => {
  return (
    <Elements>
      <WrappedCard {...props} />
    </Elements>
  );
};

export default Stripe;
