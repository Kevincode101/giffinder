// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {
    console.log('the document is ready');
    function getGiphy(i) {
        console.log('The getGiphy Function was called');
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q=" + i + "&api_key=dc6zaTOxFJmzC&limit=13",
            method: "GET",
            success: function(response) {
                //Log the orignal image to the console    
                var image = response.data[5].images.original.url;
                //Log the url from the orignial gif to the console  
                $('body').append('<img src=' + image + '>');
            },
        });
    }
    $("#search").click(function() {
        console.log('the button was clicked');
        var input = $("#search-term").val();
        console.log(input);
        getGiphy(input);
    });

});
