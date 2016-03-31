// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

var _ = require('lodash');

function largestPrimeFact(num){
  var root = Math.floor(Math.sqrt(num));
  var largestPrime = undefined;

  _.times(root, function(i){
    i ++;
    if(isPrime(i) && num % i === 0){
      largestPrime = i;
    }
  });

  return largestPrime;
};

function isPrime(num){
  var prime = true;
  var root = Math.floor(Math.sqrt(num));
  _.times(root, function(i){
    i ++;
    if(num % i === 0 && i !== 1){
      prime = false;
    }
  })
  return prime;
};

console.log(largestPrimeFact(600851475143));

// naive implementation of the Sieve of Eratosthenes
function eratos(num){
  var eliminated = {'1': true};
  var primes = {};
  var n = n || 2

  while(n < num){
    for(var i=n*n; i<=num; i+=n){
      eliminated[i] = true;
    }
    n ++;
    while(eliminated[n]){
      n ++;
    }
  }

  for(var y=1; y<=num; y++){
    if(!eliminated[y]){
      primes[y] = true;
    }
  }

  return primes;
};
