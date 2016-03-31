// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var smallestMultiple = function(){
  var result = null;
  var i = 20;

  while(result === null){
    var flag = true;

    for(var x=1; x<21; x++){
      if(i%x !== 0){
        flag = false;
        break;
      }
    }
    if(flag === true){
      result = i;
    }

    i += 20;
  }
  return result;
}
