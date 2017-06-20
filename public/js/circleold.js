(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
              return Math.PI * (getArea + radius.Math.pow(radius, 2));
        logInfo: function (doRounding){
        
        console.log("Area of a circle with radius: " + this.radius + ", is: ")    
        
        }
                      // return; // TODO: return the proper value
    }
            // calculateCircumference(getArea);  // 6.283185307179586
        
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            // ;
        
 

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
