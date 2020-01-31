import React, { useState } from "react";
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
import { useSelector } from "react-redux";

import { AppState } from "../../store";
import { ExternalLink } from "../../components/ExternalLink";
import Intro from "./components/Intro.component";

const numbers = {
  min: "€60'000",
  target: "€88'000",
  spots: 1000,
  minimumEuros: 60000,
  targetEuros: 88000
};

const checks = {
  transfers: false,
  fair: false
};

const Pledge = () => {
  const classes = useStyles();
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

      {/* <Paper className={classes.paper}>
        <Typography variant="h3">No Refunds</Typography>
        <FormControl>
          <FormControlLabel
            value="some"
            control={
              <Checkbox
                onChange={(event, checked) => {
                  handleChange("first", checked);
                }}
              />
            }
            label="I accept the NO REFUND policy"
          />
          <Typography>
            I understand this is a volunteer run event and that Kiez Burn e.V.
            cannot guarantee that they will be able to give me any money back if
            the event has to be cancelled.
          </Typography>
        </FormControl>
      </Paper> */}

      <Paper className={classes.paper}>
        <Typography variant="h3">No Transfers</Typography>
        <FormControl>
          <FormControlLabel
            value="some"
            control={
              <Checkbox
                onChange={(event, checked) => {
                  handleChange("transfers", checked);
                }}
              />
            }
            label="I accept the NO TRANSFERS policy"
          />
          <Typography>
            As of right now ticket transfers are not possible.
          </Typography>
          <Typography>
            This is an open role for potential volunteers. Would you like to
            support ticket transfers?{" "}
            <ExternalLink href="https://talk.kiezburn.org/d/zHmtjnwT/volunteer-for-ticket-transfers">
              You can read about this and get involved here.
            </ExternalLink>
          </Typography>
          <Typography>
            By checking the box above, you confirm that you accept there might
            not be a possible to transfer your ticket. As of right now, and
            until further notice, tickets are 100% non transferrable.
          </Typography>
        </FormControl>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h3">Be Fair</Typography>
        <Typography>How much do you want to pay for your ticket?</Typography>
        <Typography>
          €{numbers.targetEuros / numbers.spots} per person means we'll have the
          budget for more art, more dreams, and better facilities. €
          {numbers.minimumEuros / numbers.spots} per person means we'll have the
          minimum possible burn. Less than this means other folks will cover
          some of your ticket cost, or we might not be able to organise the
          event this year. As a community we wish to support people of all
          income brackets, so choose the ticket price that makes sense for you.
        </Typography>
        <FormControl>
          <FormControlLabel
            value="some"
            control={<Checkbox />}
            onChange={(event, checked) => {
              handleChange("fair", checked);
            }}
            label="I promise to be as fair as possible in choosing my price"
          />
        </FormControl>
      </Paper>

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

          {price === -1 ? null : (
            <>
              <Paper className={classes.paper}>
                <Typography variant="h3">Terms</Typography>
                <Typography>
                  Your payment is handled by stripe, on behalf of Kiez Burn e.V.
                </Typography>
              </Paper>

              <Paper className={classes.paper}>
                <Typography variant="h3">Payment</Typography>
                <Typography>
                  You have chosen to pay €{(price / 100).toFixed(2)}
                </Typography>
                <Button variant="contained">Enter Card Details</Button>
              </Paper>

              <Paper className={classes.paper}>
                <Typography variant="h3">Checkout</Typography>
                <Typography>
                  If you're happy with all the details above. You can confirm
                  your order now.
                </Typography>
                <Button variant="contained">Checkout</Button>
              </Paper>
            </>
          )}
        </>
      )}
    </div>
  );
};

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: 600,
    paddingBottom: 300
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  p: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export default Pledge;
