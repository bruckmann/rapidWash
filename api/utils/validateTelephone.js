
    function validateTelephone(telephone, whatsapp) {

        const teste = isNaN(telephone);

        if(telephone !== '' && telephone !== undefined && teste == false){
            console.log(telephone);
            if(telephone.length == 9 && whatsapp == true || whatsapp == false){   
                        return true;         
            } else{
                return false;
            }
            
        }
        
        
    }
    module.exports = validateTelephone;