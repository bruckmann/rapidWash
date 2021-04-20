function dateValidate(date) {
  const dateObject = new Date(date);
  const dayOfWeek = dateObject.getDay();
  return (dayOfWeek === 6) || (dayOfWeek  === 0); // 6 = Saturday, 0 = Sunday
};

export default dateValidate;