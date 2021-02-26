import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export const changelogData = [
  {
    title: 'Test Best Feature ever',
    summary: 'This is the most important change',
    tags: ['Added', 'Fixed'],
    date: '2021-02-26',
  },
  {
    title: 'Test Feature 11',
    summary: 'This is just a test description for test feature',
    tags: ['Removed'],
    date: '2021-02-23',
  },
  {
    title: 'Test Feature 11',
    summary: 'This is just a test description for test feature',
    tags: ['Removed'],
    date: '2021-02-22',
  },
  {
    title: 'Test Feature 11',
    summary: 'This is just a test description for test feature',
    tags: ['Removed'],
    date: '2021-02-21',
  },
  {
    title: 'Test Feature',
    summary: 'This is just a test description for test feature',
    tags: ['Added', 'Changed', 'Fixed', 'Removed'],
    date: '2021-02-05',
  },
  {
    title: 'Test Feature 2',
    summary: 'This is just a test description for test feature',
    tags: ['Added', 'Removed'],
    date: '2021-02-01',
  },
  {
    title: 'Test Feature 3',
    summary: 'This is just a test description for test feature',
    tags: ['Removed'],
    date: '2021-01-28',
  },
  {
    title: 'Test Feature 4',
    summary: 'This is just a test description for test feature',
    tags: ['Added', 'Changed', 'Fixed', 'Removed'],
    date: '2021-01-25',
  },
  {
    title: 'Test Feature 5',
    summary: 'This is just a test description for test feature',
    tags: ['Added'],
    date: '2021-01-11',
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
      // released: 'Test',
    });
  });

  return result;
};
