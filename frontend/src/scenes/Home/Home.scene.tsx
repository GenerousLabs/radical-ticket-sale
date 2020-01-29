import React from "react";

import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";

const Home: React.FC<Props> = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <h1>You're logged in</h1>
      <p>
        Edit this page in <code>frontend/src/scenes/Home/Home.scene.tsx</code>
      </p>
    </div>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    anonContainer: {
      paddingTop: "10vh",
      textAlign: "center",
      fontSize: "3em"
    },
    container: {}
  });

type Props = WithStyles<typeof styles>;

export default withStyles(styles)(Home);
