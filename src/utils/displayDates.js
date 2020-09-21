export const displayDates = (i) => {
  let dateNumber = 5;
  if (i === 3 || i === 4 || i === 5) {
    dateNumber = dateNumber + 1;
    return dateNumber;
  } else if (i === 6 || i === 7 || i === 8) {
    dateNumber = dateNumber + 2;
    return dateNumber;
  } else if (i === 9 || i === 10 || i === 11) {
    dateNumber = dateNumber + 3;
    return dateNumber;
  } else {
    return dateNumber;
  }
};
