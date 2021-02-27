import { useState, Fragment } from 'react';
import { Typography, Paper, Button } from '@material-ui/core';

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
            <Typography variant="h5" component="h2" gutterBottom>
              {note.title}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {`Author: ${note.author} | Category: ${note.category} | Created at: ${note.date}`}
            </Typography>
          </Paper>
        </Fragment>
      ))}
      <NotesPaginator
        postsPerPage={postsPerPage}
        totalPosts={notes.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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

  if (totalNoOfPages === 1) {
    return null;
  }

  return (
    <>
      <Typography>{`Page ${currentPage} of ${totalNoOfPages}`}</Typography>

      {currentPage > 1 && (
        <Button
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
        >
          Previous Page
        </Button>
      )}

      {currentPage < totalNoOfPages && (
        <Button
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        >
          Next Page
        </Button>
      )}
    </>
  );
};

export default NoteSelector;
