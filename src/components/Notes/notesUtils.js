export const sortSwitchesByName = (switches) => {
  function compare(a, b) {
    const switchName1 = a.name.toUpperCase();
    const switchName2 = b.name.toUpperCase();

    let comparison = 0;
    if (switchName1 > switchName2) {
      comparison = 1;
    } else if (switchName1 < switchName2) {
      comparison = -1;
    }
    return comparison;
  }

  return switches.sort(compare);
};
