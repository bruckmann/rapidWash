function dateValidate(date) {
  const dateObject = new Date(date);
  const dayOfWeek = dateObject.getDay();
  const isWeekend = (dayOfWeek === 6) || (dayOfWeek  === 0); // 6 = Saturday, 0 = Sunday
  return isWeekend
};

export default dateValidate;