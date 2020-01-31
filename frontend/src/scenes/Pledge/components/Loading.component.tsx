import React from "react";
import { CircularProgress, makeStyles, Theme } from "@material-ui/core";

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: "center",
    padding: 20
  }
}));

export default Loading;
