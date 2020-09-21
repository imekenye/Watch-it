export const displayTime = (i) => {
  let timeNumber = 6;
  if (i === 1 || i === 4 || i === 7 || i === 10) {
    timeNumber = timeNumber + 3;
    return timeNumber;
  } else if (i === 2 || i === 5 || i === 8 || i === 11) {
    timeNumber = 11;
    return timeNumber;
  } else {
    return timeNumber;
  }
};
