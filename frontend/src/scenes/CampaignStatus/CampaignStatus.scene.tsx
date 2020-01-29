import React from "react";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import {
  createStyles,
  Theme,
  makeStyles,
  Typography,
  Paper
} from "@material-ui/core";
import red from "@material-ui/core/colors/red";

const CampaignStatusQuery = gql`
  query CampaignStatusQuery {
    campaignStatus {
      currentPledgeCount
      maximumPledgeCount
      minimumAmountCents
      targetAmountCents
      totalPledgeAmountCents
    }
  }
`;

const CampaignStatus: React.FC = () => {
  const classes = useStyles();
  const { error, loading, data } = useQuery<{
    campaignStatus: {
      currentPledgeCount: number; // Int
      maximumPledgeCount: number; // Int
      minimumAmountCents: number; // Int
      targetAmountCents: number; // Int
      totalPledgeAmountCents: number; // Int
    };
  }>(CampaignStatusQuery);

  if (error) {
    return (
      <Paper elevation={1} className={classes.paperError}>
        <Typography variant="h2">Error #OXiCMb</Typography>
        <Typography>{error.message}</Typography>
      </Paper>
    );
  }

  if (loading || !data) {
    return null;
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h2">Campaign Status</Typography>
        <Typography>
          Total number of spots avaiilable:{" "}
          {data.campaignStatus.maximumPledgeCount}
        </Typography>
        <Typography>
          Total number of pledges made so far:{" "}
          {data.campaignStatus.currentPledgeCount}
        </Typography>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      // paddingTop: 10
    },
    paper: {
      padding: theme.spacing(2)
      // marginTop: theme.spacing(2),
      // marginBottom: theme.spacing(2)
    },
    paperError: {
      backgroundColor: red[50],
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
);

export default CampaignStatus;
