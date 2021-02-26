import { Typography } from '@material-ui/core';

const Note = ({ note }) => {
  if (note) {
    return (
      <>
        <Typography variant="h3">{note.title}</Typography>
        <Typography variant="subtitle2" gutterBottom>
          Author:
          {note.author}
        </Typography>
        <Typography variant="body1">{note.note}</Typography>
      </>
    );
  }

  return <></>;
};

export default Note;
