/** Problem 04 - (Delete / Store) */
var fileName= "result.pdf";
//  var fileName= "slipdf.txt";
//   var fileName= "data.docx";
//write your code here

var end4 = fileName.slice(0 - 4);
var end5 = fileName.slice(0 - 5);

if (fileName[0] === '#' || end4 === '.pdf' || end5 === '.docx' ){
    console.log("Store");
}

else {
    console.log("Delete");
}