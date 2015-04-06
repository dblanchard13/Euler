// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

var checkPali = function(num){
  var string = num.toString();
  var length = Math.floor(string.length);

  for(var i=0; i<length; i++){
    if(string[i] !== string[string.length-1-i]){
      return false;
    }
  }
  return true;
};

var findPali = function(){
  var a = 999;
  var b = 999;
  var product;
  var aOrB = false;
  var results = [];

  for(var i=999; i>0; i--){
    for(var y=999; y>0; y--){
      if(checkPali(i*y)){
        results.push(i*y);
      }
    }
  }
  return results.sort(function(a, b){return a-b}).pop();
}