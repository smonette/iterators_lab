# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

Higher order functions (aka Functional functions) are those that either take other functions as an argument; or return other functions. This can include: functions that create new functions; functions that alter other functions.



Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:


* `max`
Max searches an array and returns the largest number in provided arguments. If none are provided, it will output `-Infinty`, to compare with future delcarations. `-Infinty` is basically a constant, that represents the smallest number possible. All numbers all bigger than it. `Math` isn't able to pass an array (the max in the homework will though).


```javascript
Math.max(4, 6, 8, 10);
//10
```

* `min`
Min search an array and returns the smallest number.
```javascript
Math.min(4, 6, 8, 10);
// 4
```

* `each`
Each iterates through a collection and perfrorms actions on each item contained.
```javascript
var numbers = [4, 6, 8, 10];

var dblNumbers = numbers.each(double);
// [8, 12, 16, 20]
```

* `map`
Map iterates through an array, manipulating each of the items, and then returns a value. It's an each with a return.
```javascript
var numbers = [4, 6, 8, 10];
var double = function(x){
	x * 2;
}

var dblNumbers = numbers.map(double);
// [8, 12, 16, 20]
```


* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
Filter creates a new array of items that pass a certain condition.
```javascript
var numbers = [4, 6, 8, 10];
var bigNumbers = function(x){
	return x >= 7;
}
var bigOnly = numbers.filter(bigNumbers);
// [8, 10]
```


* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
Reduce takes all the values in an array and combines it into a single value.
```javascript
var numbers = [1, 2, 3, 4];

var singleValue = numbers.reduce;
// 10
```

* `reject`: [note](http://underscorejs.org/#reject)
Reject returns an array of values that don't match a given condition.  
```javascript
var numbers = [4, 6, 8, 10];
var bigNumbers = function(x){
	return x >= 7;
}
var smallOnly = numbers.reject(bigNumbers);
// [4, 6]
```


Use the notes provided to help guide you explanation.




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```
REFACTORED: [note](https://github.com/smonette/iterators_lab/blob/master/map_refactor.js)

```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = myNumbers.map(function(num) {
    return num * num;
});

var sqrRoot = myNumbers.map(Math.sqrt);
```



