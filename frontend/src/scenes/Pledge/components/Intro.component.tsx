import React from "react";
import { Paper, Typography } from "@material-ui/core";

import { ExternalLink } from "../../../components/ExternalLink";
import { Numbers } from "../Pledge.scene";
import { useGenericStyles } from "../../../styles";

type Props = {
  numbers: Numbers;
};

const Intro: React.FC<Props> = props => {
  const { numbers } = props;
  const classes = useGenericStyles();

  return (
    <>
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
          , a budget of <strong>{numbers.text.target}</strong> would make for a
          fantastic Kiez Burn 2020. The bear minimum to make an event happen
          would be at least {numbers.text.min}.
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
        <Typography variant="h3">Budget</Typography>
        <Typography className={classes.p}>
          We're working on the budget proposals for Kiez Burn 2020, more info
          will be posted here shortly.
        </Typography>
      </Paper>
    </>
  );
};

export default Intro;
