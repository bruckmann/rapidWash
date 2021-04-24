function validateTelephone(telephone, whatsapp) {

    return telephone.length == 11 && whatsapp == "sim" || whatsapp == "nao" 
  
}
module.exports = validateTelephone;
