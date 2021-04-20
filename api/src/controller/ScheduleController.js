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


    const verifyTelephone = validateTelephone(telephone, whatsapp);

    if (verifyTelephone == false) {
      return res.status(401).json({
        Response: 'O campo telefone não está preenchido corretamente.',
      });
    }

    if (!isWeekday(date)) {
      return res.status(400).json({
        Response: 'Somente agendamos de segunda a sexta.',
      });
    }

    if (!isTimeValid(time)) {
      return res.status(400).json({
        Response:
          'O horário de funcionamento é das 08:00 às 18:00, e só podem ser agendados horários de 30 em 30 minutos.',
      });
    }

    return res
      .status(200)
      .json({ Response: 'Formulario enviado com sucesso.' });
  }
}

module.exports = ScheduleController;
