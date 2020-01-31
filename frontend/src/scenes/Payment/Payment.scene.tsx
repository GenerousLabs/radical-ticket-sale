import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo";
import {
  Elements,
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";
// import {  } from "@types/react-stripe-elements";
import {
  Paper,
  Typography,
  Button,
  makeStyles,
  Theme
} from "@material-ui/core";

import { useGenericStyles } from "../../styles";
import Loading from "../../components/Loading.component";
import Stripe from "./components/Stripe.component";

const GET_PAYMENT_INTENT_MUTATION = gql`
  mutation GetPaymentIntent($price: Int!) {
    getPaymentIntent(input: { price: $price }) {
      success
      message
      intentId
      intentClientSecret
      price
    }
  }
`;

const SUBMIT_PLEDGE_MUTATION = gql`
  mutation SubmitPledge($input: SubmitPledgeInput!) {
    submitPledge(input: $input) {
      success
      message
      # pledge {}
    }
  }
`;

type Props = {
  legalName: string;
  price: number; // Int
  onSuccess: () => void;
};

const Payment: React.FC<Props> = props => {
  const { legalName, price } = props;

  const classes = useGenericStyles();
  const localClasses = useStyles();

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [getPaymentIntent, { error, loading, data }] = useMutation<{
    getPaymentIntent: {
      success: boolean;
      message: string;
      intentId: string;
      intentClientSecret: string;
      price: number;
    };
  }>(GET_PAYMENT_INTENT_MUTATION, {
    variables: { price }
  });

  const [submitPledge, submitPledgeReponse] = useMutation<
    {
      submitPledge: {
        success: boolean;
        message: string;
      };
    },
    {
      input: {
        legalName: string;
        intentId: string;
        amountCents: number;
        agreeTerms: string;
      };
    }
  >(SUBMIT_PLEDGE_MUTATION);

  useEffect(() => {
    getPaymentIntent();
  }, [price]);

  const Body = () => {
    if (error) {
      return (
        <>
          <Typography variant="h3">Error #wSAvTx</Typography>
          <Typography className={classes.p}>{error.message}</Typography>
        </>
      );
    }

    if (loading) {
      return <Loading />;
    }

    if (
      typeof data !== "object" ||
      typeof data.getPaymentIntent.intentClientSecret !== "string"
    ) {
      return (
        <>
          <Typography variant="h3">Error #oiVX0z</Typography>
          <Typography className={classes.p}>
            Unable to load client secret.
          </Typography>
        </>
      );
    }

    return (
      <>
        <Typography className={classes.p}>
          You have chosen to pay €{(price / 100).toFixed(2)}
        </Typography>
        <Typography className={classes.p}>
          If you're happy with all the details above. You can confirm your order
          now.
        </Typography>{" "}
        <Typography className={classes.p}>
          Note that Stripe will put a hold on the amount now, and will{" "}
          <strong>only debit the charge</strong> after the sale has ended.
        </Typography>
        {hasSubmitted ? (
          <Typography className={classes.p}>Payment submitted.</Typography>
        ) : (
          <div className={localClasses.cardWrapper}>
            <Stripe
              clientSecret={data.getPaymentIntent.intentClientSecret}
              onSubmit={async () => {
                setHasSubmitted(true);

                const result = await submitPledge({
                  variables: {
                    input: {
                      legalName,
                      intentId: data?.getPaymentIntent.intentId,
                      amountCents: price,
                      agreeTerms: ""
                    }
                  }
                });

                if (result.errors) {
                  alert(
                    `SUBMISSION FAILED #5RTRBI: Your payment was successfully processed, but it was not recorded. Please contact tickets@kiezburn.org for assistance.`
                  );
                } else {
                  alert(`CONGRATULATIONS: Your have pledged to buy a ticket.`);
                }
              }}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Typography variant="h3">Payment</Typography>
        <Body />
      </Paper>
    </>
  );
};

const WrappedPayments = injectStripe(Payment);

const ElementsWrappedPayment: React.FC<Props> = props => {
  return (
    <Elements>
      <WrappedPayments {...props} />
    </Elements>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  cardWrapper: {
    maxWidth: 400,
    paddingTop: 20,
    paddingBottom: 20
  }
}));

export default Payment;
