import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";

import { useStyles } from "../Pledge.scene";

type Props = {
  price: number; // Int
  onSuccess: () => void;
};

const Terms: React.FC<Props> = props => {
  const { price, onSuccess } = props;
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Typography variant="h3">Payment</Typography>
        <Typography className={classes.p}>
          You have chosen to pay €{(price / 100).toFixed(2)}
        </Typography>
        <Button variant="contained">Enter Card Details</Button>
      </Paper>
    </>
  );
};

export default Terms;
