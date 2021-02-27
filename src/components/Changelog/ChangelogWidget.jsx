import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Alert } from '@material-ui/lab';

import { changelogData } from './ChangelogData';

import {
  countNumberOfChangesLastWeek,
  countNumberOfChangesLastMonth,
} from './ChangelogUtils';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: theme.palette.primary,
  },
}));

const ChangelogWidget = () => {
  const classes = useStyles();
  const [changelogInfo, setChangelogInfo] = useState(null);

  useEffect(() => {
    const numberOfChangesLastWeek = countNumberOfChangesLastWeek(changelogData);
    const numberOfChangesLastMonth = countNumberOfChangesLastMonth(
      changelogData
    );

    if (numberOfChangesLastWeek > 0) {
      setChangelogInfo({
        numberOfChanges: numberOfChangesLastWeek,
        interval: 'this week',
      });
    } else if (numberOfChangesLastMonth > 0) {
      setChangelogInfo({
        numberOfChanges: numberOfChangesLastMonth,
        interval: 'this month',
      });
    } else {
      setChangelogInfo(null);
    }
  }, []);

  if (changelogInfo === null) {
    return null;
  }

  return (
    <>
      <Alert style={{ marginBottom: '1rem' }} severity="info">
        {`${changelogInfo.numberOfChanges} updates ${changelogInfo.interval}. `}
        More details are available on
        <Link to="/changelog" className={classes.link}>
          {` Changelog `}
        </Link>
        page.
      </Alert>
    </>
  );
};

export default ChangelogWidget;
