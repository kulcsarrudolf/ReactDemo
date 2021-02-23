import { Grid, Typography } from '@material-ui/core';

const PageNotFound = () => (
  <>
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ height: 'calc(100vh - 5.5rem' }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Page not found</Typography>
      <Typography variant="h5">Go back to Home</Typography>
    </Grid>
  </>
);
export default PageNotFound;
