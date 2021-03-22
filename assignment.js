//kilometerToMeter
function kilometerToMeter(distance){
    if(distance<0){
        return "Negative value is not allowed";
    }
    else{
        var meter = distance*1000;
        return meter;
    }
}
var result = kilometerToMeter(10);
console.log(result1);

//budgetCalculator
function budgetCalculator(watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0){
        return "Negative value is not allowed";
    }
    else{
        var totalcost = (watch*50)+(phone*100)+(laptop*500);
        return totalcost;
    }
}
var result2 = budgetCalculator(8,9,10);
console.log(result2);