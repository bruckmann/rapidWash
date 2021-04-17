function preProcessing(fields){
    const memes = [];
    for(let i = 0; i <= fields; i++){

        memes.push(fields[i].trim().escape())   
    }
    return memes;
}
