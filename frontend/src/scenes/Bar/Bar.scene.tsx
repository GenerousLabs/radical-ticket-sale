import React from "react";

import { createStyles, Theme, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const title = process.env.REACT_APP_TITLE || "Missing Title";

const Bar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="h1" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  })
);

export default Bar;
