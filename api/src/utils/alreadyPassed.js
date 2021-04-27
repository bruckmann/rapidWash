function alreadyPassed(date,time){

    const dateString = `${date}T${time}:00.000Z`;
    const dateForm = Date.parse(dateString);
    const currentDate = Date.now();

    return currentDate < dateForm;
    
}

module.exports = alreadyPassed;

  