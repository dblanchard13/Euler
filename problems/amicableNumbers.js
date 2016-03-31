/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.


Assume that it will be the sum of unique amicable numbers
For instance, if I had two amicable pairs of [12, 15] & [15, 18], the return value would be 45, not 60.

iterate up to 10000, holding the sum of all proper divisors in a hash
iterate through hash checking for amicable pairs, pushing them into a results array
return a flattened, uniqued, and reduced results array.

*/


var _ = require('lodash');

function amicable(num){
  var divisors = {};
  var pairs = [];

  for(var i=1; i<num; i++){
    divisors[i] = divisorSum(i);
  }

  _.each(divisors, function(val, key){
    key = parseInt(key);
    if(divisors[val] === key && key !== val){
      pairs.push(val, key);
    }
  });

  pairs = _.uniq(pairs);

  return _.reduce(pairs, function(a, b){ return a + b; }, 0);
};


function divisorSum(num){
  var divisors = [];

  for(var i=1; i<num; i++){
    if(num % i === 0){
      divisors.push(i);
    }
  }

  return _.reduce(divisors, function(tail, n){ return n + tail; }, 0);
};





console.log('AMICABLE: ', amicable(10000));
