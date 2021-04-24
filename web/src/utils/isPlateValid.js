function isPlateValid(plate) {
  const pattern = /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/;
  return pattern.test(plate);
}

export default isPlateValid;