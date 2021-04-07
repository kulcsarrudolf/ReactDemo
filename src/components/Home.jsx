import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChangelogWidget from './changelog/ChangelogWidget';

const useStyles = makeStyles(() => ({
  home: {
    padding: '1rem',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <ChangelogWidget />
      <Paper className={classes.home}>
        <Typography>A simple project created with React.</Typography>
      </Paper>
    </>
  );
}
export default Home;
