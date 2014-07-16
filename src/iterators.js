
var Iterators = (function() {
  var api = {
    max: function(numList){
      var max = -Infinity;
      for (i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    },
    min: function(list) {
      var min = Infinity;

     for (i = 0; i < list.length; i++) {
        if (min > list[i]) {
          min = list[i];
        }
      }
      return min;
    },
    each: function(list, action) {
      for (i = 0; i < list.length; i++) {
        action(list[i], i)
      };
      return list;
    }
  };

  return api;
})(); // If you add the braces to the end of your function, it will call it immediately.

module.exports = Iterators;