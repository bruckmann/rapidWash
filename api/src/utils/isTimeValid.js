function isTimeValidate(time) {
  const schedule = time.split(':');
  const hour = +schedule[0];
  const minutes = +schedule[1];

  if (hour < 8 || hour > 18) {
    return false;
  } else if (minutes !== 30 && minutes !== 0) {
    return false;
  } else if (hour == 18 && minutes == 30){
    return false;
  }

  return true;
}

module.exports = isTimeValidate;
