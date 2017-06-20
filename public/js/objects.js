(function(){
    "use strict";

/**
     * TODO:
     * Create person object, store it in a variable named person
     */
// var person = {};


// person.firstName = "Morty";

// person.lastName = "Smith";


// console.log(person)

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

// person.sayHello = function () {

//    console.log("Hello from " + person.firstName + " " + person.lastName + "!");

// }

// person.sayHello();


    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];


// shoppers.forEach(fucnction(shopper, index))
    

//         if (Cameron > 200){


//         }


// console.log(shopper.name)




// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
var books = [

        {
        title: "Life of Pi",
        author: {
            firstName: "Jane",
            lastName: "Doe"
        }
    },
    {
        title: "where the red fern grows",
        author: {
            firstName: "joe",
            lastName: "thompson"
        }
    }



];


// log out the books array
books.forEach(function(books){
console.log(books);
});
// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
    console.log("Book #" + (index + 1));
    console.log("Title: " + books.title);
    console.log("Author: " + books.author.firstName + " " + books.author.lastName);
    console.log("---");
// end loop here


// Bonus Exercises for Objects Lesson

// BONUS 1 (expanding on the books object exercise):

//     Add a property “keywords” that contains an array of possibly genres the book may be categoriezed by
//     Add a boolean property “available” and set it to true
//     Add a dateAvailable property that has a string of the date/time when the book will be available
//     Add a method rent() that... 
//         - changes the available property to false if it is not already false
//         - sets the dateAvailable to a date exactly two weeks from when the rent() method is called 
//         (to do this, research the JS Date object and use methods from it in your code)
//     Add a method returned() that...
//         - changes the available property to true
//         - changes the dateAvailble property to the string “now”

// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];

// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");

// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });

// BONUS 2 (Create a Dog object):

//     The dog object should have properties for: 
//         breed (string), 
//         weightInPounds (number),
//         age (number), 
//         color (string), 
//         steralized (boolean), 
//         shotRecords (array of objects with properties for date and typeOfShot)

//     The dog object should have methods to:
//         bark() - will console.log “Woof!”
//         getOlder() - will increase age by 1
//         fix() - will set sterile to true
//         getShot() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

})();
