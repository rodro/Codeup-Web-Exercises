// var i = 1;

// while(i<65536) {
    
//     i *= 2;
//  console.log("the number is " +i);
//  }



// An ice cream seller can't go home until 
// she sells all of her cones. Write a JS program 
// that generates a random number between 50 and 100 
// representing the amount of cones to sell. Your code
//  should generate numbers between 1 and 5, simulating 
//  the amount of cones being bought by her clients. Use 
//  a do-while loop to log to the console the amount of 
//  cones sold to each person. This is how you get the 
//  random numbers.

 // This is how you get a random number between 50 and 100
 var allCones = Math.floor(Math.random() * 50) + 50;
 // This is how you get a random number between 1 and 5
 // var cones = Math.floor(Math.random() * 5) + 1;
	console.log ("you Better sell " + allCones + " cones today or else") ;
	while (allCones>0) {
    	var conesOrdered = Math.floor(Math.random()*5)+1;
    	console.log ("they bought " + conesOrdered+ " cones");
		allCones = allCones - conesOrdered;
		if (allCones<conesOrdered) {
  			console.log("Cannot sell you " + conesOrdered + " cones, I only have " + allCones +" mother f'er") 
		} 
	}
// if (allCones<=0){

console.log("yay, i sold them all!");

    

	



 // 5 cones sold...  // if there are enough cones
 // "Cannot sell you" + conesOrdered + "cones, I only have" + allCones...  // If there are not enough cones
 // Yay! I sold them all! // If there are no more cones

