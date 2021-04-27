const validateTelephone = require('../utils/validateTelephone');
const isWeekday = require('../utils/isWeekday');
const isTimeValid = require('../utils/isTimeValid');
const alreadyPassed = require('../utils/alreadyPassed');
const isPlateValid = require('../utils/isPlateValid');
const validateCarYear = require('../utils/validateCarYear');

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


    if (!validateTelephone(telephone, whatsapp)) {
      return res.status(400).json({
        Response: 'O campo telefone não esta preenchido corretamento e/ou whatsapp não esta preenchido.',
      });
    }

    if (isWeekday(date)) {
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

    if (!alreadyPassed(date,time)) {
      return res.status(400).json({
        Response:
          'Você não pode agendar uma data/horario no passado',
      });
    }
    if (!isPlateValid(licensePlate)) {
      return res.status(400).json({
        Response:
          'Você precisa informar o formato de placa correto',
      });
    }

     if (!validateCarYear(carYear)) {
      return res.status(400).json({
        Response:
          'Você não pode agendar um carro produzido no futuro',
      });
    }

    return res
      .status(201)
      .json({ Response: 'Agendamento feito com sucesso.' });
  }
}

module.exports = ScheduleController;
