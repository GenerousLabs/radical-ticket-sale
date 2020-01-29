import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme,
  createMuiTheme
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Bar from "../Bar/Bar.scene";
import Home from "../Home/Home.scene";

const baseTheme = createMuiTheme();
const theme = responsiveFontSizes(baseTheme);

export const history = createBrowserHistory();

const Routes = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Bar />
        <CssBaseline />
        <Container>
          <Home />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1
    }
  });

type Props = WithStyles<typeof styles>;

export default withStyles(styles)(Routes);
