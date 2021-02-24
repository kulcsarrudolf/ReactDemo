import { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import { changelogData } from './ChangelogData';

import { countNumberOfChangesLastWeek } from './ChangelogUtils';

const ChangelogWidget = () => {
  const [numberOfChanges, setNumberOfChanges] = useState(null);

  useEffect(() => {
    setNumberOfChanges(countNumberOfChangesLastWeek(changelogData));
  }, []);

  return (
    <>
      <Typography>
        Number of changes last week:
        {numberOfChanges}
      </Typography>
    </>
  );
};

export default ChangelogWidget;
