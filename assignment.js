function feetToMile(feet){
    var mile = feet / 5280 ;
    return mile;
}
var result  = feetToMile(10800) .toFixed(2);
console.log(result);

function woodCalculator(chair, table, bed){
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount = bed*5;
    var totalWood = chairCount+ tableCount+ bedCount;
    return totalWood;
}
var woodResult = woodCalculator(5, 3, 2);
console.log(woodResult);

function brickCalculator(oneToTen, elevenToTwenty, twentyUper){
    var oneToTenFeet = oneToTen*15;
    var elevenToTwentyFeet = elevenToTwenty*12;
    var twentyUperFeet = twentyUper*10;
    var totalFeeet = oneToTenFeet+ elevenToTwentyFeet+ twentyUperFeet;
    var totalbrick = totalFeeet*1000;
    return totalbrick;
}
var brickResult = brickCalculator(4, 4, 2);
console.log(brickResult);



function tinyFriend(names){
    var tiny =names[0];
    for(var i=0; i<names.length; i++){
         var currentNumber = names[i];
      if(currentNumber.length < tiny.length){
            tiny = currentNumber;
        }
    }
    return tiny;
}
var result = ["Shahadad","Mou","Sabbir", "Shanto", "Basir", "Subod"];
console.log(tinyFriend(result));

