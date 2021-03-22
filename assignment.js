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
var result1 = kilometerToMeter(10);
console.log(result1);

//budgetCalculator
function budgetCalculator(watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0){
        return "Negative value is not allowed";
    }
    else{
        var totalcost = (watch*50) + (phone*100) + (laptop*500);
        return totalcost;
    }
}
var result2 = budgetCalculator(8,9,10);
console.log(result2);

//hotelCost
function hotelCost(days){
    var PackageOne = 100;
    var PackageTwo = 80;
    var PackageThree = 50;
    if(days<0){
        return "Negative value is not allowed";
    }
    if(days>=1 && days<=10){
        var package1 = days*PackageOne;
        return package1;
    }
    if(days>=11 && days<=20){
        var remainValue1 = days-10;
        var p2 = remainValue1*PackageTwo;
        var package2 = p2+(10*PackageOne);
        return package2;
    }
    if(days>=21){
        var remainValue2 = days-20;
        var p3 = remainValue2*PackageThree;
        var package3 = p3+(10*PackageOne)+(10*PackageTwo);
        return package3;
    }
}
var result3 = hotelCost(43);
console.log(result3);

//megaFriend
function megaFriend(friends){
    var friendsName = friends[0];

    for(var i=0; i<friends.length; i++){

        if(friends[i]==""){
            return "Negative value is not allowed";
        }

            var name = friends[i];
            if(name.length>friendsName.length){
            friendsName = name;

        }
    }
    return friendsName;
}
var result4 = megaFriend(['mustafizur','rahman','reza','fahim','atef','rasel','mohon','rafi','alamin','sam']);
console.log(result4);