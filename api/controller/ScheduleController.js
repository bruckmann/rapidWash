const verifyEmptyFields = require('../utils/verifyEmptyFields.js');
const validateTelephone = require('../utils/validateTelephone');
const verifyData = require('../utils/verifyData');

class ScheduleController {
     schedule(req, res) {

        const { name, telephone, whatsapp, brand, model, carYear, 
            licensePlate, date , time} = req.body;
        
        const fields = [name, brand, model,
        licensePlate, date , time];

        name.trim();
        console.log(name);
        //const field = fields.trim();

        const emptyField = verifyEmptyFields(fields);

        if(emptyField.length > 0){
            return res.status(401).json({Response: 'Campos vázios'});
        }

        const verifyTelephone = validateTelephone(telephone,whatsapp);
        
        if(verifyTelephone == false){
            return res.status(401).json({Response: 'O campo telefone não está preenchido corretamente'});
        }

        const validateData = verifyData(date,time);
        
        if(validateData == false){
            return res.status(400).json({Response: 'Somente agendamos de segunda a sexta das 8:00 as 18:00'});
        }

        return res.status(200).json({Response: 'Formulario enviado com sucesso'});
    }

        
}


module.exports = ScheduleController;
