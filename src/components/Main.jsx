import { Suspense } from "react";
import Routing from "../Router/Routing";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "3.5rem",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Suspense
          fallback={
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <LinearProgress />
            </Grid>
          }
        >
          <Routing />
        </Suspense>
      </Grid>
    </div>
  );
};

export default Main;
