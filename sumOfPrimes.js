// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


var findPrimes = function(){
  var twoMill = 2000000;
  var result = 0;

  for(var i = 2; i < twoMill; i++){
    if(checkPrime(i)){
      result += i;
    }
  }

  return result;
}

var checkPrime = function(num){
  var range = Math.round(Math.sqrt(num));
  for(var i = 2; i <= range; i++){
    if(num%i === 0){
      return false;
    }
  }

  return true;
}
