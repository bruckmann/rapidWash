function isWeekDay(date) {
  const dateObject = new Date(date);
  const dayOfWeek = dateObject.getDay();
  return (dayOfWeek === 5) || (dayOfWeek  === 6); // 6 = Saturday, 0 = Sunday
};

export default isWeekDay;