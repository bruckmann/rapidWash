function isWeekday(date){
  const dataObject = new Date(date);
  const Day = dataObject.getDay();
  
  return (Day === 5) || (Day === 6);
};

module.exports = isWeekday;