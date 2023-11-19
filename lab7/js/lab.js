// index.js - This is our code used in lab 7 for Functions.
//Author: Henry Tripp Barrick and Tomoya Kato
//Date: November 2023

function sortUserInput(){
    var userName = window.prompt("Hello traveler, what is youre name so we may be better acquainted? ");
    var nameArray = userName.split("");
    var nameArraySort = nameArray.sort();
    var nameSorted = nameArraySorted.join("");
    return nameSorted;
}

document.writeln("Here is your new name: ",
    sortUserInput(), "</br>");