// check if a given string is a palindrome

var func = function(str){
  var iterations = Math.floor(str.length/2);
  var end = str.length - 1;
  var flag = true;

  for(var i=0; i<=iterations; i++){
    if(str[i] !== str[end-i]){
      flag = false;
    }
  }

  return flag;
};

// Ruby Implementation
//
// def pally(str)
//   rev = str.reverse
//   rev == str
// end
