import React from "react";
import { Link } from "react-router-dom";

import { createStyles, withStyles, WithStyles, Theme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Bar: React.FC<Props> = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Typography variant="h6" component="h1" color="inherit">
              App Header
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  });

type Props = WithStyles<typeof styles>;

export default withStyles(styles)(Bar);
