//index.js  - This is a file to sort a persons name based on using conditionals
//Author - Henry Tripp Barrick and Tomoya Kato
//Date: November 2023

function sortingHat(str){
    var len = str.length;
    var mod = len % 4;

    if (mod == 0) {
        return "Gryffindor";
    }
    else if (mod == 1) {
        return "Ravenclaw";
    }
    else if (mod == 2) {
        return "Slytherin";
    }
    else return "Hufflepuff";
}

$("#button").click(function() {
    var name = $("#input").val();
    var house = sortingHat(name);
    $("#output").append("<p>The Sorting Hat has sorted you into " + house + ".</p>");    
});