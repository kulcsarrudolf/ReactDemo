import { Fragment, useState, useEffect } from "react";
import { Typography, Paper } from "@material-ui/core";
import { getNotes } from "./../Services/notesService";

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const allNotes = await getNotes();
            setNotes(allNotes);
        };

        fetchNotes();
    }, []);

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
