/** Problem -01 ( Divide the Asset ) */
var area = 100;
//write your code here
     rahimOrKarim = area / 2 ;
console.log(rahimOrKarim);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000){
    console.log('Laptop');
}
else if (money >= 10000){
    console.log('Cycle');
}
else{
    console.log("Chocolate ");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here


for( var i = 1; i <= lastDay; i++){

if ( i % 3 === 0 ){
    console.log(i + " - medicine");
}

else{
    console.log(i + " - rest");
}
}


/** Problem 04 - (Delete / Store) */
var fileName= "result.pdf";
//  var fileName= "slipdf.txt";
// var fileName= "data.docx";
//write your code here

var end4 = fileName.slice(0-4);
var end5 = fileName.slice(0-5);

if (fileName[0] === '#' || end4 === '.pdf' || end5 === '.docx' ){
    console.log("Store");
}

else {
    console.log("Delete");
}