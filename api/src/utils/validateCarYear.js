function validateCarYear(carYear){

    const currentDate = new Date().getFullYear();
 
    return currentDate >= carYear;
}

module.exports = validateCarYear;