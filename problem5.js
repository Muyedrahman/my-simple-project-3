/** Problem 05 - ( PH Email Generator )  */

var student= { 
    name: "jhankar" ,
     roll: 1014 ,
     department: "cse"
       };
//  name: "monu" , roll: 99,department: "eee"
//write your code here
// name |roll|.  |department  |@ph.ac.bd  |

// var part1 = student.name.slice(0, 6).toLowerCase()
var email = student.name+ student.roll+"."+student.department+'@ph.ac.bd'
console.log(email)




