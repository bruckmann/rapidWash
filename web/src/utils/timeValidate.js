function timeValidate(time) {

    time = time.split(':')
    const hours = time[0]
    const minutes = time[1]
    
    if(hours >= 8 && hours <= 18){
        if(minutes === "30" || minutes === "00"){
            return true;
        } else {
        return 'Você só pode agendar horarios a cada 30 minutos';
        }
    }
  
}
  export default timeValidate;
  
