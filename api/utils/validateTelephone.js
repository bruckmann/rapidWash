
    function validateTelephone(telephone, whatsapp) {

        if(telephone !== '' && telephone !== undefined){
            if(telephone.length == 9){
                    if(whatsapp == true || whatsapp == false ){
                        return true;
                    }

            } else{
                return false;
            }
            
        }
        
        
    }
    module.exports = validateTelephone;