import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export const changelogData = [
  {
    title: 'Test Best Feature ever',
    summary: 'This is the most important change',
    tags: ['Added', 'Fixed'],
    date: '2021-02-27',
  },
  {
    title: 'Test Best Feature ever',
    summary: 'This is the most important change',
    tags: ['Added', 'Fixed'],
    date: '2021-02-23',
  },
  {
    title: 'Test Best Feature ever',
    summary: 'This is the most important change',
    tags: ['Added', 'Fixed'],
    date: '2021-02-18',
  },
  {
    title: 'Test Best Feature ever',
    summary: 'This is the most important change',
    tags: ['Added', 'Fixed'],
    date: '2021-02-11',
  },
  {
    title: 'Test Best Feature ever',
    summary: 'This is the most important change',
    tags: ['Added', 'Fixed'],
    date: '2021-01-27',
  },
  {
    title: 'Test Best Feature ever',
    summary: 'This is the most important change',
    tags: ['Added', 'Fixed'],
    date: '2020-08-27',
  },

  {
    title: 'Test Best Feature ever',
    summary: 'This is the most important change',
    tags: ['Added', 'Fixed'],
    date: '2019-11-12',
  },

  {
    title: 'Test Best Feature ever',
    summary: 'This is the most important change',
    tags: ['Added', 'Fixed'],
    date: '2019-04-27',
  },
];

export const getChangelogData = () => {
  const result = [];

  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo('en-US');

  changelogData.forEach((change) => {
    result.push({
      title: change.title,
      summary: change.summary,
      tags: change.tags,
      released: timeAgo.format(new Date(change.date)),
    });
  });

  return result;
};
