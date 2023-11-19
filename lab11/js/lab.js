//index.js - This code is to return a sorted string from an input field in our html file
//Author: Henry Tripp Bartick and Tomoya Kato
//Date: November 2023


$("#submit").click(function(){
    var name = $("#user-name").val();
    var userNameSorted = sortString(name);

    $("#output").html("<div class='text'><p>" + userNameSorted + "</p></div>");
})

function sortString(inputString){
    return inputString.split('').sort().join('');
}