import React from "react";
import {
  Paper,
  Typography,
  FormControl,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

import { ExternalLink } from "../../../components/ExternalLink";
import { Numbers } from "../Pledge.scene";
import { useGenericStyles } from "../../../styles";

type Props = {
  handleChange: (name: string, value: boolean) => void;
  numbers: Numbers;
};

const Terms: React.FC<Props> = props => {
  const { handleChange, numbers } = props;
  const classes = useGenericStyles();

  return (
    <>
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
          €{numbers.numbers.targetEuros / numbers.numbers.spots} per person
          means we'll have the budget for more art, more dreams, and better
          facilities. €{numbers.numbers.minimumEuros / numbers.numbers.spots}{" "}
          per person means we'll have the minimum possible burn. Less than this
          means other folks will cover some of your ticket cost, or we might not
          be able to organise the event this year. As a community we wish to
          support people of all income brackets, so choose the ticket price that
          makes sense for you.
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
    </>
  );
};

export default Terms;
