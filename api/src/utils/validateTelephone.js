function validateTelephone(telephone, whatsapp) {
  var isNumber = isNaN(telephone);
  if (telephone !== '' && isNumber !== true) {
    if ((telephone.length == 11 && whatsapp == true) || whatsapp == false) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
module.exports = validateTelephone;
