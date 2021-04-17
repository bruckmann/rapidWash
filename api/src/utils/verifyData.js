function verifyData(date, time) {

    time = time.split(':')
    const hours = time[0]
    const minutes = time[1]

    const data = new Date(date);

    let schedulingDay = data.getDay();
    let dateIsInWeekend = (schedulingDay === 6) || (schedulingDay=== 0);
    if(dateIsInWeekend==false){
        if(hours >= 8 && hours <= 18){
            if(minutes === "30" || minutes === "00"){
                return true;
            }
        }
    } else {
       return false;
    } 
    
}

module.exports = verifyData;