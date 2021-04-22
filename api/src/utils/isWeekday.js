function isWeekday(date){
  const dataObject = new Date(date);
  const Day = dataObject.getDay();
  
  return (Day === 6) || (Day === 0);
};

module.exports = isWeekday;