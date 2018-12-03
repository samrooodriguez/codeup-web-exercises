(function() {
    "use strict";
    var circle = {
        radius: 5,
        getArea: function () {
            // TODO: complete this method
            return circle.radius * Math.PI;
            },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding === true){
                return Math.round(i);
            }
            else{
                return Math.abs(i);
            }
        }
    };
    console.log("Area of a circle with radius: " + this.radius + ", is: ");

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
