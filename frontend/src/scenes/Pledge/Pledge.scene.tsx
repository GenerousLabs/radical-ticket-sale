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

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h3">Welcome</Typography>
        <Typography className={classes.p}>
          Welcome to the Kiez Burn 2020 ticket extravaganza.
        </Typography>
        <Typography className={classes.p}>
          We trust you already know what Kiez Burn is. But just in case, here's
          a few links for you:
        </Typography>
        <ul>
          <li>
            <ExternalLink href="https://kiezburn.org">
              The Kiez Burn web site
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://talk.kiezburn.org/dashboard">
              The Talk platform where Kiez Burn decisions are discussed
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://kiezburn.org/home/about/11-principles/">
              The Kiez Burn 11 principles
            </ExternalLink>
          </li>
        </ul>
        <Typography className={classes.p}>
          In this spirit of cocreation and experimentation we're trying
          something new for 2020.
        </Typography>
        <Typography className={classes.p}>
          Based on our{" "}
          <ExternalLink href="https://talk.kiezburn.org/g/QFjHmdZ2/2019-archive">
            financials from 2019
          </ExternalLink>
          , a budget of <strong>{numbers.target}</strong> would make for a
          fantastic Kiez Burn 2020. The bear minimum to make an event happen
          would be at least {numbers.min}.
        </Typography>
        <Typography className={classes.p}>
          What would you like Kiez Burn's budget to be for 2020?
        </Typography>
        <Typography className={classes.p}>
          You're invited to vote with your wallet. On this page you can pledge
          to buy a Kiez Burn ticket. The system will record your payment
          information, and if we collect 1'000 pledges, and the total budget
          from those pledges is more than our minimum, we'll collect all the
          money. This sale begins 1 Feb and ends by 21 Feb, or whenever all
          spots are filled.
        </Typography>
        <Typography className={classes.p}>
          For more information, to ask questions, or to engage in this process,{" "}
          <ExternalLink href="">click here</ExternalLink>.
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
            I understand this is a volunteer run event and that so far nobody
            has volunteered to handle ticket transfers. Therefore I fully and
            gladly accept that if I cannot attend the event FOR ANY REASON AT
            ALL, I will not be able to transfer my ticket.
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

      {!agreedTerms.fair ? null : (
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
                  value="14800"
                  control={<Radio />}
                  label="Generous ticket - €148"
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
                <Typography variant="h3">Card Details</Typography>
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

const useStyles = makeStyles((theme: Theme) => ({
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
