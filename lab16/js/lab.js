// index.js - Script for lab16 which deals with APIs
// Author: Henry Tripp Barrick and Tomoya Kato
// Date: December  2023


var comicObj
var test = "hewwo there smile"


$.ajax({
    //Using this URL instead of the normal one due to a CORS error when accessing. Found this link on github and it works :smile:
    //Here is the github link we used https://github.com/mrmartineau/xkcd-api
    url: "https://xkcd.vercel.app/?comic=latest",
    type: "GET",
    dataType: "json",


    "success": function(data){
        comicObj = data;
        $("#output").append("<h3>" + comicObj.title+ "</h3>");
        //This append looks terrible since adding spaces in this manner ignores the quotation marks that makes the comicObj.alt a string
        //To fix this we used single quotations which add double quotations to the end of the comicObj.alt variable
        //I hate this
        $("#output").append('<img src=' + comicObj.img + ' alt= ' + '"' + comicObj.alt + '"' + 'title=' + '"' + comicObj.title + '"' + '>');
        //The bottom here adds in the caption below the image. This is for me own personal taste.
        $("#output").append("<p>" + comicObj.alt + "</p>");
    },


    "error": function(jqXHR, textStatus, errorThrown) {
        console.log("Error: ", textStatus, errorThrown);
    }
    })
