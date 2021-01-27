import { Typography, Paper } from "@material-ui/core";

const Notes = () => {
    return (
        <>
            <Paper elevation={3} style={{ padding: "10px 20px" }}>
                <Typography variant='h5' component='h1' gutterBottom>
                    Sleep
                </Typography>
                <Typography>Created at: </Typography>
            </Paper>
        </>
    );
};

export default Notes;
