// Refactor the following code using map to make only one 
// call to the map function versus the two below.

// var myNumbers = [ -1, 2, -3, 4, -5, 6];

// var square = function(num) {
//     return num * num;
// };

// var sqrRoot = function(num) {
//     return Math.sqrt(num);
// };


// var sqrNumbers = map(myNumbers, square);
// var absNumbers = map(sqrNumbers, sqrRoot);


var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = myNumbers.map(function(num) {
    return num * num;
});

// var sqrRoot = myNumbers.map(Math.sqrt);