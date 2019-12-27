//String repeat - https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr (n, s) {
  return s.repeat(n);
}

//https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((x, y)=>x-y)[0]
  }
}



//Are the numbers in order?  - 
//https://www.codewars.com/kata/are-the-numbers-in-order/train/javascript

function inAscOrder(arr) {
  var count=true; 
  arr.forEach((v, i, a)=>{if(v>a[i+1]) {count=false}}); 
    return count; 
  };



