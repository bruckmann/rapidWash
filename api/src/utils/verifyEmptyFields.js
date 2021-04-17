
  function verifyEmptyFields(fields){
    const emptyFields = [];
    for(let field of fields){
    if(field === '' || field === undefined){
    emptyFields.push(field);
      }
    }
    return emptyFields;
  }

module.exports = verifyEmptyFields;
