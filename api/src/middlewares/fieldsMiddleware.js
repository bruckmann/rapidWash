const verifyEmptyFields = require('../utils/verifyEmptyFields');


function fieldsMiddleware(req, res, next) {
  const fields = [
    { fieldName: 'Nome', value: req.body.name },
    { fieldName: 'Marca', value: req.body.brand },
    { fieldName: 'Modelo', value: req.body.model },
    { fieldName: 'Placa', value: req.body.licensePlate },
    { fieldName: 'Data', value: req.body.date },
    { fieldName: 'Horário', value: req.body.time },
  ];

  const emptyFields = verifyEmptyFields(fields);

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ Response: `os campos ${emptyFields} não podem ser vázios` });
  }

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

}

module.exports = fieldsMiddleware;
