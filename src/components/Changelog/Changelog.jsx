import { useState, useEffect } from 'react';

import { Typography, Paper, Chip } from '@material-ui/core';

import { changelogData } from './ChangelogData';

const Changelog = () => {
  const [changelogList, setChangelogList] = useState([]);

  useEffect(() => {
    setChangelogList(changelogData);
  }, []);

  return (
    <>
      <Paper style={{ padding: '1rem' }}>
        <Typography variant="h4">Changelog</Typography>

        {changelogList.map((change) => (
          <>
            <ChangelogItem change={change} />
          </>
        ))}
      </Paper>
    </>
  );
};

const ChangelogItem = ({ change }) => {
  const { title, date, tags, summary } = change;

  const labelColors = {
    added: '#32B643',
    changed: '#FFB700',
    fixed: '#A1548B',
    removed: '#2176FF',
    default: '#ACB3C2',
  };

  return (
    <>
      <Paper style={{ padding: '1rem', margin: '1rem 0rem' }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {`Released: ${date}`}
        </Typography>
        {tags.map((tag) => {
          let color = null;

          switch (tag) {
            case 'Added':
              color = labelColors.added;
              break;
            case 'Changed':
              color = labelColors.changed;
              break;
            case 'Fixed':
              color = labelColors.fixed;
              break;
            case 'Removed':
              color = labelColors.removed;
              break;
            default:
              color = labelColors.default;
              break;
          }

          return (
            <Chip
              size="small"
              label={tag}
              style={{
                background: color,
                marginRight: '0.25rem',
                marginBottom: '0.5rem',
              }}
            />
          );
        })}
        <Typography>{summary}</Typography>
      </Paper>
    </>
  );
};

export default Changelog;
