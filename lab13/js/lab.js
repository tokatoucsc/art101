//index.js - Our code for this lab
//Author - Henry Tripp Barrick
//Date = November 2023

$("#button").click(function(){
    for (var itr = 1; itr <= 200; itr++){
        var num = "";

        if ((itr % 3) == 0){
        num += "Fizz";
        }
        if ((itr % 5) == 0){
        num +="Buzz"
        }
        if ((itr % 7) == 0){
        num +="Boom"
        }
        if (num.length <= 0){
            num = itr;
        }

        $("#output").append("<p>" + num + "</p>");
}});