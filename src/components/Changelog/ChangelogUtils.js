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

const getNumberOfWeek = (date = new Date()) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

const isDateInThisWeek = (date) => {
  if (getNumberOfWeek() === getNumberOfWeek(date)) {
    return true;
  }
  return false;
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
