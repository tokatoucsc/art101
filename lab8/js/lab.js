//index.js code used to illustrate principles of callbacks and anonymous functions for Lab 8
//Author: Henry Tripp Barrick and Tomoya Kato
//Date: November 2023

//Variables and functions declaration

var array = [1,3,5,7,13,17];

function lab8Func(x){
    return(x * x);
}

//writes functions called with random number
console.log(lab8Func(56));
console.log(lab8Func(2));

//calls it for all values in array
console.log(array.map(lab8Func));

//makes an anonymous function
console.log(array.map(function(x){
    return (x+10)
}))