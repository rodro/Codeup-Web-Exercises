"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */


function sayHello(myNameIs) {

	return "hello to " + myNameIs;																																																																																																																																																																																																																																																	

}
console.log(sayHello("gonzalo"))	
// returwns "Hello, codeup!"
  
/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */





// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

// number ?

// function isOdd(number) {
// 	return 
// }''

function isOdd(random) {
	return (random % 2 === 0) ? random + " is not odd" : random + " if odd";
}	console.log(isOdd(random));

// var age = 19;
// if (age>=18)
// 	console.log ("you are an adult");
// 	else {
// 		console.log ("you are an kid");
// 	}                                                                                                                    

// console.log ((age>=18) ? "you are an adult"     )

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */

var billTotes = prompt ("whats the bill total?");
var tipPerc = prompt ("whats the tip percentage?");


function tipCalc(tipPerc,billTotes){
	return "tip is " + billTotes * tipPerc;
}
	alert(tipCalc(billTotes,tipPerc));

/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */

/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */



// Write a function called `identity(input)` that takes in an argument 
// called input and returns that input.
function



// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call.

// Write a function called `first(input)` that returns the first character in the provided string. 

// Write a fuction called `last(input)` that returns the last character of a string

// Write a function called `rest(input)` that returns everything but the first character of a string.

// Write a function called `reverse(input)` that takes a string and returns it reversed.

// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

// Write a function called `count(input)` that takes in a string and returns the number of characters.

// Write a function called `add(a, b)` that returns the sum of a and b

// Write a function called `subtract(a, b)` that return the difference between the two inputs.

// Write multiply(a, b) that returns the product

// Write a divide(numerator, denominator) function that returns a divided by b

// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.

// # Super Duper Gold-Star Bonus

// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.



