import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Elements } from "react-stripe-elements";
import {
  Paper,
  Typography,
  makeStyles,
  Theme,
  Input,
  Button,
  FormControl,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio
} from "@material-ui/core";

import { AppState } from "../../store";
import { ExternalLink } from "../../components/ExternalLink";
import Intro from "./components/Intro.component";
import Terms from "./components/Terms.component";
import Payment from "../Payment/Payment.scene";
import { useGenericStyles } from "../../styles";

export type Numbers = {
  text: {
    [key: string]: string;
  };
  numbers: {
    [key: string]: number; // Int
  };
};

const numbers: Numbers = {
  text: {
    min: "€60'000",
    target: "€88'000"
  },
  numbers: {
    spots: 1000,
    minimumEuros: 60000,
    targetEuros: 88000
  }
};

const checks = {
  transfers: false,
  fair: false
};

const Pledge = () => {
  const classes = useGenericStyles();
  const hasToken = useSelector((state: AppState) => state.token.token !== "");
  const [readIntro, setReadIntro] = useState(false);
  const [name, setName] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(checks);
  const [price, setPrice] = useState(-1);
  const [hasCustomPrice, setCustomPrice] = useState(false);

  const handleChange = (field: string, checked: boolean) => {
    setAgreedTerms({ ...agreedTerms, [field]: checked });
  };

  if (!hasToken) {
    return null;
  }

  if (!readIntro) {
    return (
      <div className={classes.container}>
        <Intro numbers={numbers} />
        <Paper className={classes.paper}>
          <Typography variant="h3">Buy a ticket</Typography>
          <Typography className={classes.p}>
            If you're happy with the details above, you can start your ticket
            purchase now.
          </Typography>
          <Button
            onClick={() => {
              setReadIntro(true);
              window.scrollTo(0, 0);
            }}
            variant="contained"
            size="large"
            color="primary"
          >
            Start checkout
          </Button>
        </Paper>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h3">Welcome</Typography>
        <Typography className={classes.p}>
          Welcome to the Kiez Burn 2020 ticket extravaganza.
        </Typography>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h3">Legal name</Typography>
        <Typography>Enter your legal name</Typography>
        <Input
          type="text"
          onChange={event => {
            setName(event.target.value);
          }}
        ></Input>
        <Typography>
          <strong>NOTE:</strong> This must match your ID when you arrive. No
          possibility to make changes later.
        </Typography>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h3">Newsletters</Typography>
        <FormControl>
          <FormControlLabel
            value="some"
            control={
              <Checkbox
                onChange={(event, checked) => {
                  console.log("newsletter setting #vBCle5");
                }}
              />
            }
            label="Please add me to the Kiez Burn mailing list"
          />
          <Typography>
            If you want to be added to the Kiez Burn mailing list, check this
            box. We will send some essential emails to you anyway, these are
            thigns you will need to know for the event. But we won't add you to
            the newsletter unless you explicitly consent.
          </Typography>
        </FormControl>
      </Paper>

      <Terms handleChange={handleChange} numbers={numbers} />

      {!Object.values(agreedTerms).every(a => a) ? null : (
        <>
          <Paper className={classes.paper}>
            <Typography variant="h3">Price</Typography>
            <FormControl>
              <Typography>Choose your price from the list below.</Typography>
              <RadioGroup
                aria-label="Price"
                onChange={(event, value) => {
                  if (value === "0") {
                    setCustomPrice(true);
                  } else {
                    setCustomPrice(false);
                    setPrice(parseInt(value));
                  }
                }}
              >
                <FormControlLabel
                  value="29800"
                  control={<Radio />}
                  label="Generous ticket - €298"
                />
                <FormControlLabel
                  value="14800"
                  control={<Radio />}
                  label="Supporter ticket - €148"
                />
                <FormControlLabel
                  value="9800"
                  control={<Radio />}
                  label="Standard ticket - €98"
                />
                <FormControlLabel
                  value="4000"
                  control={<Radio />}
                  label="Low income ticket - €40"
                />
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="Choose my own price"
                />
              </RadioGroup>
            </FormControl>
            <div>
              {!hasCustomPrice ? null : (
                <>
                  Enter your price €
                  <Input
                    type="text"
                    onChange={event => {
                      setPrice(
                        Math.round(parseFloat(event.target.value)) * 100
                      );
                    }}
                  />
                  .00
                </>
              )}
            </div>
          </Paper>

          <Paper className={classes.paper}>
            <Typography variant="h3">Terms</Typography>
            <Typography>
              Your payment is handled by stripe, on behalf of Kiez Burn e.V.
            </Typography>
          </Paper>

          {price === -1 ? null : (
            <>
              <Payment legalName={name} onSuccess={() => {}} price={price} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Pledge;
