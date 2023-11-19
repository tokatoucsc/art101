//index.js - Javascript/jQuery file to append   text to the output div section of index.html

//Requirements: jQuery

//Author: Henry Tripp Barrick and Tomoya Kato
//Date: November 2023

//Calls to textGen and adds the result to the output section of index.html, including proper styling and css classes
$("#make-convo").click(function(){
    const newText = textGen();
    $("#output").append("<div class='special'><p>" + newText + "</p><div></br>");
})

//Generates a random string of text from within the provided variable and returns it at a random position.
function textGen(){
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min+1)) + min;

    const randStart = Math.floor(Math.random() * (text.length - randLen + 1))
    return text.slice(randStart, randStart + randLen)

}

