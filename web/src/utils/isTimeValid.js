function isTimeValid(time) {
  const schedule = time.split(':');
  const hour = +schedule[0];
  const minutes = +schedule[1];

  if (hour < 8 || hour > 18) {
    return false;
  } else if (minutes !== 30 && minutes !== 0) {
    return false;
  }

  return true;
}

export default isTimeValid;