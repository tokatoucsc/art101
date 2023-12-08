// index.js - JS file to utilize ajax and APIs
// Author: Henry Tripp Barrick and Tomoya Kato
// Date: November  2023


//On click function paired with html button.
$("#activate").click(function(){
    //ajax setup code using Jeopardy API
    $.ajax({
        url: "https://jservice.io/api/random",
        type: "GET",
        dataType: "json",


    "success": function(data){
        //This needs to call an array first despite being only one object since it is formatted for multiple. Please make sure to include
        //The array call before this.


        //This appends a question pulled from the API to our output div section in the html file.
        $("#output").append("<div><p>" + data[0].question +"</p></div></br>")
        //This calls the answer from the object to the console.
        console.log(data[0].answer);
    },


    //This is the error function if it fails.
    "error": function(jqXHR, textStatus, errorThrown) {
        console.log("Error: ", textStatus, errorThrown);
    }
    })
});
