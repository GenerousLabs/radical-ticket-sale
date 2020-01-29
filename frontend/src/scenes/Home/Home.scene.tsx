import React from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  Typography,
  Paper,
  Button
} from "@material-ui/core";

import CampaignStatus from "../CampaignStatus/CampaignStatus.scene";

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CampaignStatus />
      <Typography variant="h2">You're NOT logged in</Typography>
      <Paper elevation={1} className={classes.paper}>
        <Typography>
          Enter your email <input></input>
        </Typography>
        <Typography>
          <Button variant="contained">Submit</Button>
        </Typography>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: 30
    },
    paper: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
);

export default Home;
