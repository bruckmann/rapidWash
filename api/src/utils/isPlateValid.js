function isPlateValid(licensePlate){
    const regexPlata = /^[a-zA-Z]{3}[0-9]{4}$/;

    return regexPlata.test(licensePlate)
    
}

module.exports = isPlateValid;