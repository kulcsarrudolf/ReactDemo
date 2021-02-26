import { useState, useEffect } from 'react';

import { Typography, Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import NewIcon from '@material-ui/icons/NewReleases';

import { changelogData } from './ChangelogData';

import {
  countNumberOfChangesLastWeek,
  countNumberOfChangesLastMonth,
} from './ChangelogUtils';

const ChangelogWidget = () => {
  const [numberOfChangesLastWeek, setNumberOfChangesLastWeek] = useState(null);
  const [numberOfChangesLastMonth, setNumberOfChangesLastMonth] = useState(
    null
  );

  useEffect(() => {
    setNumberOfChangesLastWeek(countNumberOfChangesLastWeek(changelogData));
    setNumberOfChangesLastMonth(countNumberOfChangesLastMonth(changelogData));
  }, []);

  return (
    <>
      <Alert
        severity="info"
        action={
          <Button color="inherit" size="small">
            GO TO CHANGELOG
          </Button>
        }
      >
        <AlertTitle>Changelog</AlertTitle>
        <>
          <Typography>
            Number of changes last week:
            {` ${numberOfChangesLastWeek}`}
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <NewIcon />
            <Typography>
              Number of changes last week:
              {` ${numberOfChangesLastWeek}`}
            </Typography>
          </div>
          <Typography>
            Number of changes in the last 30 days:
            {` ${numberOfChangesLastMonth}`}
          </Typography>
        </>
      </Alert>
    </>
  );
};

export default ChangelogWidget;
