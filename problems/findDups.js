// Find and return all duplicate items in the passed in array
// complete in O(1) space

var findDups = function(arr){
  var results = [];
    
    while(arr.length){
      var item = arr.pop();
        if(arr.indexOf(item) !== -1 && results.indexOf(item) === -1){
          results.push(item)
        }
    }
    
    return results;
};
