/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(n){
	return '' + n;
}
console.log(numberToString(5));

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 function increase(n){
 	return n+=1;
 }
 console.log(increase(1));


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
 function decrease(n){
 	return n-=1;
 }
console.log(decrease(5));

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y){
	return x + y;
}
console.log(add(10,3));

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 function subtract(x,y){
 	return x - y;
 }
console.log(subtract(8,2));

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x,y){
	return x * y;
}
console.log(multiply(6,5));

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
 function divide(x,y){
 	return x / y;
 }
 console.log(divide(9,3));


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x){
	return x * x;
}
console.log(square(2));


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
 function calculate(operation, x, y){
 	var sum = (x+y);
 	var difference = (x-y);
 	var product = (x*y);
 	var quotient = (x/y);
 	if (operation === add){
 		return (x + " + " + y + " = " + sum);}
 	else if(operation === subtract){
 		return (x + " - " + y + " = " + difference);
 	}
 	else if(operation === multiply){
 		return (x + " x " + y + " = " + product);
 	}
 	else if(operation === divide){
 		return (x + " / " + y + " = " + quotient);
 	}
 }
 console.log(calculate(add,4,7));
 console.log(calculate(subtract,7,4));
 console.log(calculate(multiply, 3,3));
 console.log(calculate(divide, 10,5));



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
 function isGreaterThan(x,y){
 	if (x>y){
 		return true;
 	}
 	else {
 		return false;
 	}
 }
 isGreaterThan(10,2);



/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
 function isLessThan(x,y){
 	if (x<y){
 		return true;
 	}
 	else{
 		return false;
 	}
 }
 isLessThan(5,10);


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
 function areEqual(x,y){
 	if (x===y){
 		return true;
 	}
 	else {
 		return false;
 	}
 }
 areEqual(2,2);
 areEqual("tacocat",3);


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
 function minimum(x,y){
 	var min = Math.min(x,y);
 	return min;
 }
 minimum(4,2);


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
 function maximum(x,y){
 	var max = Math.max(x,y);
 	return max;
 }
 maximum(100,10);


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
 function isEven(n){
 	if (n % 2 === 0){
 		return true;
 	}
 	else {
 		return false;
 	}
 }
 isEven(8);


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(n){
	if (n % 2 !==0){
		return true;
	}
	else {
		return false;
	}
}
isOdd(3);

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score, total){
	if (score >= 90 && score <= 100){
    return "A";
  }else if (score >=80 && score <= 89){
    return "B";
  }
  else if (score >= 70 && score <=79){
    return "C";
  }
  else if (score >= 60 && score <=69){
    return "D";
  }
  else if (score >= 0 && score <= 59){
    return "F";
  }
}
console.log(letterGrade(80, 85));

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
 var restaurant = {
    reviews: ""
  };
 function incrementReviews(object){
  if(restaurant.hasOwnProperty('reviews')){
    return restaurant.reviews +=1;
  }else{
    return restaurant.reviews === 1;
  }
 }
 console.log(incrementReviews(restaurant.reviews));


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine (word1, word2){
  var together = word1 + " " + word2;
  return together;
}
combine(tact, cat);

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
 function createCircle(radius){
  var circumference = 2 * Math.PI * radius;
  var area = radius * radius * Math.PI;
  var circle = {
    circumference: circumference,
    area: area
  };
  return circle;
 }
 createCircle();

