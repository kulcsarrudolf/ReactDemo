import { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Paper, Grid, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import NotesFilterBox from './NoteFilterBox';
import Note from './Note';

import { getNotesByUserName } from '../../Services/notesService';
import NoteSelector from './NoteSelector';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  note: {
    padding: theme.spacing(2),
  },
}));

const Notes = () => {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);
  const user = useSelector((state) => state.user);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const allNotes = await getNotesByUserName(user);
      if (filteredCategories) {
        const filteredNotes = allNotes.filter((note) =>
          filteredCategories.includes(note.category)
        );

        setNotes(filteredNotes);
      } else {
        setNotes(allNotes);
      }
    };

    fetchNotes();
  }, [user, filteredCategories]);

  if (!user) {
    return (
      <>
        <Alert severity="warning">User is not selected.</Alert>
      </>
    );
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <NotesFilterBox setFilteredCategories={setFilteredCategories} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <NoteSelector notes={notes} setSelectedNote={setSelectedNote} />
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.note}>
          <Note note={selectedNote} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Notes;
