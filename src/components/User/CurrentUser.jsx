import { useSelector, useDispatch } from 'react-redux';
import { Typography, Grid, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { resetUser } from '../../redux/actions/userAction';

const useStyles = makeStyles(() => ({
  changeUserButton: {
    minWidth: 300,
    margin: 10,
  },
  home: {
    padding: '1rem',
  },
  span: {
    fontWeight: 'bold',
  },
}));

const CurrentUser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleChangeUserButton = () => {
    dispatch(resetUser());
  };

  return (
    <>
      <Paper className={classes.home}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Typography>
            The current user is:
            <Typography
              display="inline"
              component="span"
              className={classes.span}
            >
              {` ${user}`}
            </Typography>
          </Typography>

          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleChangeUserButton}
            className={classes.changeUserButton}
          >
            Change User
          </Button>
        </Grid>
      </Paper>
    </>
  );
};

export default CurrentUser;
