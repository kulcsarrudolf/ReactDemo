import { Typography, Paper } from "@material-ui/core";
import { getNotes } from "./../Services/notesService";

const Notes = () => {
    console.log(getNotes());

    return (
        <>
            <Paper elevation={3} style={{ padding: "10px 20px" }}>
                <Typography variant='h5' component='h2' gutterBottom>
                    Sleep
                </Typography>
                <Typography variant='caption' display='block' gutterBottom>
                    Author: | Created at:
                </Typography>
            </Paper>
        </>
    );
};

export default Notes;
