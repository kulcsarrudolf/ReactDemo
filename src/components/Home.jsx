import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChangelogWidget from './Changelog/ChangelogWidget';

const useStyles = makeStyles((theme) => ({
  home: {
    padding: '1rem',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.home}>
        <Typography>A simple project created with React.</Typography>
        <ChangelogWidget />
      </Paper>
    </>
  );
}
export default Home;
