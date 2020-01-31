import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo";
import { Paper, Typography, Button, CircularProgress } from "@material-ui/core";

import { useStyles } from "../Pledge.scene";
import Loading from "./Loading.component";

type Props = {
  price: number; // Int
  onSuccess: () => void;
};

const GET_PAYMENT_INTENT_MUTATION = gql`
  mutation GetPaymentIntent($price: Int!) {
    getPaymentIntent(input: { price: $price }) {
      success
      message
      clientSecret
    }
  }
`;

const Terms: React.FC<Props> = props => {
  const { price, onSuccess } = props;

  const classes = useStyles();

  const [getPaymentIntent, { error, loading, data }] = useMutation<{
    getPaymentIntent: {
      success: boolean;
      message: string;
      clientSecret: string;
    };
  }>(GET_PAYMENT_INTENT_MUTATION, {
    variables: { price }
  });

  useEffect(() => {
    getPaymentIntent();
  }, [price]);

  if (error) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h3">Error #wSAvTx</Typography>
        <Typography className={classes.p}>{error.message}</Typography>
      </Paper>
    );
  }

  return (
    <>
      <Paper className={classes.paper}>
        <Typography variant="h3">Payment</Typography>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Typography className={classes.p}>
              You have chosen to pay €{(price / 100).toFixed(2)}
            </Typography>
            <p>key: {data?.getPaymentIntent.clientSecret}</p>
            <Button variant="contained">Enter Card Details</Button>
          </>
        )}
      </Paper>
    </>
  );
};

export default Terms;
