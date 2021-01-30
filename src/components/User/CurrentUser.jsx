import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { resetUser } from "./../../redux/actions/userAction";

const useStyles = makeStyles((theme) => ({
    changeUserButton: {
        minWidth: 300,
        margin: 10,
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
            <Grid
                container
                direction='column'
                alignItems='center'
                justify='center'
            >
                <Typography>
                    The current user is: <b>{user}</b>
                </Typography>

                <Button
                    variant='contained'
                    size='large'
                    color='primary'
                    onClick={handleChangeUserButton}
                    className={classes.changeUserButton}
                >
                    Change User
                </Button>
            </Grid>
        </>
    );
};

export default CurrentUser;
