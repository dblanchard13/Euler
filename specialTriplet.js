// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// start with a = 1, b = 1, c = 998; Decrement c and increment b checking if any are triplets. Once b >= c, increment a by 1 and set b = a, c = 1000 - (a + b). Rinse and repeat.

var _ = require('lodash');

function specialTriplet(sum){
  var a = 1;
  var b = 1;
  var c = sum - (a + b);
  var sTrip = undefined;

  while(true){
    if(triplett(a, b, c)){
      sTrip = [a,b,c];
      break;
    }
    if(a >= c - 1){
      break;
    }
    if(b >= c - 1){
      a ++;
      b = a;
      c = sum - (a + b);
    }
    else{
      b ++;
      c --;
    }
  }

  return [product(sTrip), sTrip];
};

function triplett(a, b, c){
  return a*a + b*b === c*c;
};

function product(nums){
  if(!nums){
    return undefined;
  }
  return _.reduce(nums, function(tail, num){ return tail * num; }, 1);
};

console.log(specialTriplet(1000));
