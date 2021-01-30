import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Paper } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { getNotesByUserName } from "./../Services/notesService";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchNotes = async () => {
            const allNotes = await getNotesByUserName(user);
            setNotes(allNotes);
        };

        fetchNotes();
    }, []);

    if (!user) {
        return (
            <>
                <Alert severity='warning'>User is not selected.</Alert>
            </>
        );
    }

    return (
        <>
            {notes.map((note) => {
                return (
                    <Fragment key={note.id}>
                        <Paper
                            elevation={3}
                            style={{
                                padding: "0.5rem 1rem",
                                margin: "0.75rem",
                            }}
                        >
                            <Typography
                                variant='h5'
                                component='h2'
                                gutterBottom
                            >
                                {note.title}
                            </Typography>
                            <Typography
                                variant='caption'
                                display='block'
                                gutterBottom
                            >
                                Author: {note.author} | Created at: {note.date}
                            </Typography>
                        </Paper>
                    </Fragment>
                );
            })}
        </>
    );
};

export default Notes;
