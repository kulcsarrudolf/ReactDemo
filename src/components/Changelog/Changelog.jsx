import { useState } from 'react';

import { Typography, Paper, Chip } from '@material-ui/core';

import { v4 as uuidv4 } from 'uuid';

import { getChangelogData } from './ChangelogData';

function getLabelColor(tag) {
  const labelColors = {
    added: '#32B643',
    changed: '#FFB700',
    fixed: '#A1548B',
    removed: '#2176FF',
    default: '#ACB3C2',
  };

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

  return color;
}

const Changelog = () => {
  const [changelogList] = useState(getChangelogData());

  return (
    <>
      <Paper style={{ padding: '1rem' }}>
        <Typography variant="h4">Changelog</Typography>

        {changelogList.map((change) => (
          <ChangelogItem key={uuidv4()} change={change} />
        ))}
      </Paper>
    </>
  );
};

const ChangelogItem = ({ change }) => {
  const { title, released, tags, summary } = change;

  return (
    <>
      <Paper style={{ padding: '1rem', margin: '1rem 0rem' }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {`Released: ${released}`}
        </Typography>
        {tags.map((tag) => (
          <Chip
            key={uuidv4()}
            size="small"
            label={tag}
            style={{
              background: getLabelColor(tag),
              marginRight: '0.25rem',
              marginBottom: '0.5rem',
            }}
          />
        ))}

        <Typography>{summary}</Typography>
      </Paper>
    </>
  );
};

export default Changelog;
