
const verifyEmptyFields = require('../validators/verifyEmptyFields.js');
const validateTelephone = require('../validators/validateTelephone');
const verifyData = require('../validators/verifyData');

class ScheduleController {
     schedule(req, res) {

        const { name, telephone, whatsapp, brand, model, carYear, 
            licensePlate, date , time} = req.body;
        
        const fields = [name, brand, model,
        licensePlate, date , time];

        const emptyFields = verifyEmptyFields(fields);

        if(emptyFields.length > 0){
            return res.status(401).json({Response: 'Campos vázios'});
        }

        const verifyTelephone = validateTelephone(telephone,whatsapp);
        
        if(verifyTelephone == false){
            return res.status(401).json({Response: 'O campo telefone não está preenchido corretamente'});
        }

        const verifyData = verifyData(date,time);
        
        if(verifyData == false){
            return res.status(401).json({Response: 'Somente agendamos de segunda a sexta das 8:00 as 18:00'});
        }

    }

        
}


module.exports = ScheduleController;


/*[
    check('name', 'Nome é campo obrigatório.')
     .trim().escape().notEmpty(),
    check('telephone', 'Telefone deve possuir numeros maior ou igual a 0')
    .trim.escape().optional().isInt({ min: 0, max: 11}),
    check('whatsapp', 'Whatsapp não é obrigatorio')
    .trim.escape(),
    check('brand', 'Marca não é obrigatorio')
     ]

     */