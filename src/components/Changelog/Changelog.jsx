import { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';

import { changelogData } from './ChangelogData';

const Changelog = () => {
  const [changelogList, setChangelogList] = useState([]);

  useEffect(() => {
    setChangelogList(changelogData);
  }, []);

  return (
    <>
      <Typography>Changelog</Typography>

      {changelogList.map((change) => (
        <>{change.summary}</>
      ))}
    </>
  );
};

export default Changelog;
