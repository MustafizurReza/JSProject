//kilometerToMeter
function kilometerToMeter(distance){
    if(distance<0){
        return "Negative is not allowed";
    }
    else{
        var meter = distance*1000;
        return meter;
    }
}