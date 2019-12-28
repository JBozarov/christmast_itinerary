// 9:00-10:00 Toy Problems: 

// Broken Multiply - https://www.codewars.com/kata/multiply/train/javascript

function multiply(a, b){
  return a*b; 
}; 




// Broken Swap Case  - https://repl.it/@matias_perez/Broken-Swap-Case

// function caseReverse(str) {
//   var strArray = str.split(' ');
//   for (var i=0; i<strArray.length; i++) {
// 		var tempArr = strArray[i].split('');
//     for (var m=0; m<tempArr.length; m++){
// 			if (tempArr[m]==tempArr[m].toUpperCase()){
// 				tempArr[m]=tempArr[m].toLowerCase();
// 				strArray[i]=tempArr.join(''); 
// 			}
// 			else tempArr[m]=tempArr[m].toUpperCase(); 
// 			strArray[i]=tempArr.join(''); 
// 		}
//   }
//   return strArray 
// }


function caseReverse(str) {
  var strArray = str.split('');
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i].toUpperCase()) {
      strArray[i] = strArray[i].toLowerCase();
    } else {
      strArray[i] = strArray[i].toUpperCase();
    }
  }
  return strArray.join('')
}



// 10-11:30 Video: JavaScript Crash Course - https://www.youtube.com/watch?v=hdI2bqOjy3c
// This Crash Course will review what you’ve covered thus far, but will also cover briefly a number of the topics you’ll be covering in the near future. Much of the latter half of the video may not fully make sense, but stick with it—the exposure will help you internalize the topics when we cover them in class. 
// 1:30-5:00 Project: Re-do JavaScript III’s afternoon project from scratch. Link can be found below. In order to re-do the project, clone it down directly from the DevMountain repository. Note that you will not be able to ‘git push’ to the DevMountain repository, so don’t worry about pushing up the re-done code. 
// https://github.com/DevMountain/javascript-3-afternoon-project
