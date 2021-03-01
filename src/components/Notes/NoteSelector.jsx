import { useState, Fragment } from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const NoteSelector = ({ notes, setSelectedNote }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLastNote = currentPage * postsPerPage;
  const indexOfFirstNote = indexOfLastNote - postsPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  return (
    <>
      {currentNotes.map((note) => (
        <Fragment key={note.id}>
          <Paper
            onClick={() => {
              setSelectedNote(note);
            }}
            elevation={3}
            style={{
              padding: '0.4rem 0.75rem',
              margin: '0.25rem',
            }}
          >
            <Typography variant="h6" component="h2" gutterBottom>
              {note.title}
            </Typography>
          </Paper>
        </Fragment>
      ))}
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ marginTop: '1rem' }}
      >
        <NotesPaginator
          postsPerPage={postsPerPage}
          totalPosts={notes.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Grid>
    </>
  );
};

const NotesPaginator = ({
  postsPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
}) => {
  const totalNoOfPages = Math.ceil(totalPosts / postsPerPage);

  if (totalNoOfPages < 2) {
    return null;
  }

  return (
    <>
      <Pagination
        count={totalNoOfPages}
        page={currentPage}
        onChange={(e, page) => {
          setCurrentPage(page);
        }}
        shape="rounded"
      />
    </>
  );
};

export default NoteSelector;
