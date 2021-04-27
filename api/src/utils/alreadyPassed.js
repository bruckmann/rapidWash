const moment = require('moment-timezone');

function alreadyPassed(date,time){

    const dateString = `${date}T${time}`;
    const currentDate = Date.now();

    const currentDateFormatted = moment.tz(currentDate, "America/Sao_Paulo");
    const dateformatted= moment.tz(dateString, "America/Sao_Paulo");
   
  
    return currentDateFormatted < dateformatted;    
}

module.exports = alreadyPassed;

  