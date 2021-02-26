import { Suspense } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import Routing from '../Router/Routing';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '4.5rem',
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Suspense
        fallback={
          <Grid container direction="row" justify="center" alignItems="center">
            <LinearProgress />
          </Grid>
        }
      >
        <Routing />
      </Suspense>
    </div>
  );
};

export default Main;
