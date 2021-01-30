import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    home: {
        padding: "1rem",
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.home}>
                <Typography>A simple project created with React.</Typography>
            </Paper>
        </>
    );
}
export default Home;
