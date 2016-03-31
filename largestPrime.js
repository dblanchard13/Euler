// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// 
var primeFactor = function(){
  var num = 600851475143;
  var newNum = Math.sqrt(num);

  for(var i=0; i<=newNum; i++){

    for(var y=2; y<i; y++){
      if(i%y === 0){
        return;
      }
    }
  }

}