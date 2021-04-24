function alreadyPassed(date){

    const dateForm = new Date(date);
    const currentDate = new Date();

    return currentDate.valueOf() < dateForm.valueOf()

}


module.exports = alreadyPassed;

  