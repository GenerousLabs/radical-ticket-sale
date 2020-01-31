import { makeStyles, Theme } from "@material-ui/core";

export const useGenericStyles = makeStyles((theme: Theme) => ({
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
