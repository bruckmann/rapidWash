function alreadyPassed(date){

    const dateForm = new Date(date);
    const currentDate = new Date();

    if(currentDate.valueOf() < dateForm.valueOf()){
        return true;
      }
}


module.exports = alreadyPassed;

  