const verifyEmptyFields = require('../utils/verifyEmptyFields.js');
const validateTelephone = require('../utils/validateTelephone');
const isWeekday = require('../utils/isWeekday');
const isTimeValid = require('../utils/isTimeValid');

class ScheduleController {
  schedule(req, res) {
    
    const {
      name,
      telephone,
      whatsapp,
      brand,
      model,
      carYear,
      licensePlate,
      date,
      time,
    } = req.body;

    const fields = [
      { fieldName: 'Nome', value: name.trim()},
      { fieldName: 'Marca', value: brand.trim() },
      { fieldName: 'Modelo', value: model.trim() },
      { fieldName: 'Placa', value: licensePlate.trim() },
      { fieldName: 'Data', value: date.trim() },
      { fieldName: 'Horário', value: time.trim() },
    ];

    const emptyField = verifyEmptyFields(fields);
    const verifyTelephone = validateTelephone(telephone, whatsapp);

    if (emptyField.length > 0) {
      return res.status(401).json({ Response: 'Campos vázios' });
    }

    if (verifyTelephone == false) {
      return res.status(401).json({
        Response: 'O campo telefone não está preenchido corretamente',
      });
    }

    if (validateData == false) {
      return res.status(400).json({
        Response: 'Somente agendamos de segunda a sexta das 8:00 as 18:00',
      });
    }

    return res.status(200).json({ Response: 'Formulario enviado com sucesso' });
  }
}

module.exports = ScheduleController;
