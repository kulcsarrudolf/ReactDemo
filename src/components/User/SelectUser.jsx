import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userAction';

import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from '@material-ui/core';

import { getAllUsers } from '../../Services/userService';

const useStyles = makeStyles((theme) => ({
  userSelector: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  setUserButton: {
    minWidth: 300,
  },
}));

const SelectUser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  const isUserSelected = selectedUser.length > 0;

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []);

  const handleUserSelect = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleSetUserButtonClick = () => {
    dispatch(setUser(selectedUser));
  };

  if (users.length > 0) {
    return (
      <>
        <Grid container direction="column" alignItems="center" justify="center">
          <FormControl variant="outlined" className={classes.userSelector}>
            <InputLabel>Select a user</InputLabel>
            <Select
              value={selectedUser}
              onChange={handleUserSelect}
              label="User name"
            >
              {users.map((user) => (
                <MenuItem key={uuidv4()} value={user}>
                  {user}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {isUserSelected && (
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={handleSetUserButtonClick}
              className={classes.setUserButton}
            >
              Set User
            </Button>
          )}
        </Grid>
      </>
    );
  }

  return <>Loading...</>;
};

export default SelectUser;
