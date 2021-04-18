function verifyEmptyFields(fields) {
  const emptyFields = [];
  for (let field of fields) {
    if (field.value === '' || field.value === undefined) {
      emptyFields.push(field);
    }
  }
  return emptyFields;
}

module.exports = verifyEmptyFields;
