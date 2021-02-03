import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Typography, Paper } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import NotesFilterBox from "./NoteFilterBox";

import { getNotesByUserName, getCategories } from "../../Services/notesService";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const user = useSelector((state) => state.user);
    const [category, setCategory] = useState(["work", "ideas"]);

    useEffect(() => {
        const fetchNotes = async () => {
            const allNotes = await getNotesByUserName(user);
            if (category) {
                const filteredNotes = allNotes.filter((note) =>
                    note.category.includes(category)
                );

                setNotes(filteredNotes);
            } else {
                setNotes(allNotes);
            }
        };

        fetchNotes();
    }, [user, category]);

    if (!user) {
        return (
            <>
                <Alert severity='warning'>User is not selected.</Alert>
            </>
        );
    }

    return (
        <>
            <>
                <NotesFilterBox
                    categories={getCategories()}
                    setCategory={setCategory}
                />
            </>

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
                                Author: {note.author} | Category:{" "}
                                {note.category} | Created at: {note.date}
                            </Typography>
                        </Paper>
                    </Fragment>
                );
            })}
        </>
    );
};

export default Notes;
