// index.js - This script contains arrays and objects necessary for lab 6.
// Author: Henry Tripp Barrick and Tomoya Kato
// Date: October 2023

//Variables
var myTransport = ["Prius", " Bus", " Foot"];

var myMainRide = {
  make: "Toyota",
    model: "Prius",
    color: "silver",
    year: 2007,
    ownIt: true,
    age: function(){
      return 2023 - this.year;
      }
  } 

//Output
document.writeln("Our methods of transportation: " + myTransport + "</br>")

//Using method to write out object as string
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
