
    function validateTelephone(telephone, whatsapp) {

        var teste = isNaN(telephone);
        console.log(teste);
        if(telephone !== '' && teste !== true){
            if(telephone.length == 11 && whatsapp == true || whatsapp == false){   
                        return true;         
            } else{
                return false;
            }
            
        } else{
            return false;
        }
        
        
    }
    module.exports = validateTelephone;