// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number? --> 104743

var primeGetter = function(n){
  // n is the number of primes to get
    // If no n is passed into the function, it defaults to 10
  n = n || 10;
  var primes = [];
  // Initialize x as the first prime number, 2
  var x = 2;

  // Keep looping until the primes array has n primes
  while(primes.length < n){
    // If the current value of x is prime, push to the array
    if(primeChecker(x)){
      primes.push(x);
    }
    x++;
  }
  return primes[primes.length-1];
};

var primeChecker = function(num){
  var root = Math.sqrt(Math.abs(num));
  // Staring with 2, modulo every number up to the square root of num
    // You only need to check up to the square root because any potential factor above the square root will have a corresponding factor below the square root
      // For example, suppose the number I'm checking is 64. The square root of 64 is 8. 
      // While 64 % 32 === 0, I don't need to check up to 32 to find that out, I only need to check up to 2.
      // This simple optimization over checking every number less than num reduced run time from 1432 ms to 923 ms for finding the first 5000 primes.
  for(var i=2; i<=root; i++){
    if(num%i === 0){
      return false;
    }
  }
  return true;
};
