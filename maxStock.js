// Given an array of stock prices with indeces ordered by every minute after the opening bell, 
// return the largest possible profit for the day on the purchase and sale of a single stock.
// prices = [1,3,4,2,1,7,2,15,2] --> largest profit = 14


// Naive O(n^2) solution

var maxProfit = function(prices){
  var largestProfit = 0;
    for(var i=prices.length-1; i>=0; i--){
      for(var y=i; y>=0; y--){
        if(prices[i] - prices[y] > largestProfit){
          largestProfit = prices[i] - prices[y];
        }
      }
    }
  return largestProfit;
}
