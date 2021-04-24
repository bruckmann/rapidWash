function validateTelephone(telephone, whatsapp) {
  console.log(whatsapp)
  if (telephone.length == 11 && whatsapp == 'sim' || whatsapp == 'nao') {
    return true;
  } else {
    return false;
  }
}
module.exports = validateTelephone;
