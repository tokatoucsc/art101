//lab.js - This script uses jQuery and JavaScript to modify elements on the Lab9 index.html page.
//Author: Henry Tripp Barrick and Tomoya Kato
//Date: November 2023

$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#Problems").append("<button id='button-problems'>Make Special</button>");
$("#Results").append("<button id='button-results'>Make Special</button>");
 
//adds a listener for all button types.
$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

$("#button-problems").click(function(){
    $("#Problems").toggleClass("special");
});

$("#button-results").click(function(){
    $("#Results").toggleClass("special");
});