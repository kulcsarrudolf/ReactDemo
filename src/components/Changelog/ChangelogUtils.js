const numberOfDaysBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let dayCount = 0;

  while (end > start) {
    dayCount += 1;
    start.setDate(start.getDate() + 1);
  }

  return dayCount;
};

const isDateFromLastSevenDays = (date) => {
  const today = new Date();
  if (numberOfDaysBetweenDates(date, today) <= 7) {
    return true;
  }

  return false;
};

export const countNumberOfChangesLastWeek = (changesList) => {
  let numberOfChanges = 0;
  changesList.forEach((change) => {
    if (isDateFromLastSevenDays(new Date(change.date))) {
      numberOfChanges += 1;
    }
  });

  return numberOfChanges;
};

export const countNumberOfChangesLastMonth = (changesList) => {
  const today = new Date();
  let numberOfChanges = 0;
  changesList.forEach((change) => {
    if (numberOfDaysBetweenDates(new Date(change.date), today) <= 30) {
      numberOfChanges += 1;
    }
  });

  return numberOfChanges;
};
