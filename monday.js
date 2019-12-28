

//Even or Odd - https://www.codewars.com/kata/53da3dbb4a5168369a0000fe


function even_or_odd(number) {
  return number%2==0 ? 'Even' : 'Odd'; 
}




  //Remove String Spaces - http://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
  
  
  function noSpace(x){
    return x.split(' ').join(''); 
    
}
  
  
  //Simple Reverse - https://www.codewars.com/kata/simple-fun-number-20-first-reverse-try/train/javascript

  function firstReverseTry(arr) {
    if (arr.length<1) return []; 
    else if (arr.length==1) return arr; 
    var res = arr.slice(); 
    arr.pop();
    arr.shift(); 
    arr.push(res[0]); 
    arr.unshift(res[res.length-1]); 
    return arr; 
  }


  
