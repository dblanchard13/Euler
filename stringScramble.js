// String Scramble should take both parameters being passed in and return 
// true if a portion of str1 characters can be rearranged to match str2

var stringScramble = function(str1, str2){
  var splitString = str1.split('');

  for(var i=0; i<str2.length; i++){
    if(splitString.indexOf(str2[i]) === -1){
      return false;
    }
  }
  return true;
}