// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {
    $.ajax({
        url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC&limit=13",
        method: "GET",
        success: function(response) {
            //Log the orignal image to the console    
            var image = response.data[5].images.original.url;
            //Log the url from the orignial gif to the console  
            $('body').append('<img src=' + image + '>');
        },
    });



});
