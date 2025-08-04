/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

  recentSalary = startingSalary ;
  for (var i = 1; i <= experience; i++ ){
     recentSalary = recentSalary * 1.05 ;
  }

console.log(recentSalary.toFixed(2));