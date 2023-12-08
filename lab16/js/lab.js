// index.js - Script for lab16 which deals with APIs
// Author: Henry Tripp Barrick and Tomoya Kato
// Date: December  2023

var comicObj

$.ajax({
    url: "https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",

    "success": function(data){
        comicObj = data;
        $("#output").append("<h3>comicObj.title</h3>")
        console.log("hello");
    },

    "error": function(jqXHR, textStatus, errorThrown) {
        console.log("Error: ", textStatus, errorThrown);
    }
    })

console.log("running");
    //Get data from API in variable
    //Make a title in output
    //display image in output
    