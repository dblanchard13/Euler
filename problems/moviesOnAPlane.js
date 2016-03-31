// Write a function that takes an integer flight_length (in minutes) and an array of integers movie_lengths (in minutes) 
// and returns a boolean indicating whether there are two numbers in movie_lengths whose sum equals flight_length.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// f(10, [5,3,7]) --> true
// f(10, [5,2,7]) --> false

var f = function(flight, movies){
  var hash = {}; // {5:true, 3:true, 7:true}
  var result = false;

  movies.forEach(function(movie){
    var remainingTime = flight - movie;

    if(hash[remainingTime]){
      result = true;
    }
    hash[movie] = true;
  })
  return result;
};

