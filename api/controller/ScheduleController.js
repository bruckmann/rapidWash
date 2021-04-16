const verifyEmptyFields = require('../validators/verifyEmptyFields.js');
const validateTelephone = require('../validators/validateTelephone');
const verifyData = require('../validators/verifyData');

class ScheduleController {
     schedule(req, res) {

        const { name, telephone, whatsapp, brand, model, carYear, 
            licensePlate, date , time} = req.body;
        
        const fields = [name, brand, model,
        licensePlate, date , time];

        fields = fields.trim().escape(fields);

        const emptyFields = verifyEmptyFields(fields);

        if(emptyFields.length > 0){
            return res.status(401).json({Response: 'Campos vázios'});
        }

        const verifyTelephone = validateTelephone(telephone,whatsapp);
        
        if(verifyTelephone == false){
            return res.status(401).json({Response: 'O campo telefone não está preenchido corretamente'});
        }

        const validateData = verifyData(date,time);
        
        if(verifyData == false){
            return res.status(401).json({Response: 'Somente agendamos de segunda a sexta das 8:00 as 18:00'});
        }

    }

        
}


module.exports = ScheduleController;
