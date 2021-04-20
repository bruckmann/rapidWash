function validateTelephone(telephone, whatsapp) {
  const pattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

  console.log(pattern.test(telephone));

  if (pattern.test(telephone)) {
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
