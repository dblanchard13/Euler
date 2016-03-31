// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sumSquares = function(){
  var result = 0;
  for(var i=1; i<101; i++){
    result += i*i;
  }
  return result;
};

var squareSum = function(){
  var result = 0;
  for(var i=1; i<101; i++){
    result += i;
  }
  return result*result;
};

// The answer
var difference = squareSum() - sumSquares();
