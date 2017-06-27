
 // --------for number 1----------//
 // var number = (-1) // true
 var number = (6) // false
function isNegative () {
	Boolean(number)
}
console.log(number)

// --------for number 2----------//
// turn on as needed :)
var values = ([1, 2, 3]) // 2
// var values = ([4, 6, 8, 10, 12]) // 8
let sum = values.reduce((previous, current) => current += previous);
let average = sum / values.length;

console.log(average)