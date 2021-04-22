function isPlateValid(licensePlate){
    const regexPlata = /^[a-zA-Z]{3}[0-9]{4}$/;

    if(regexPlata.test(licensePlate)){
     return true
    } 
}

module.exports = isPlateValid;