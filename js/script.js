// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {
    var counter = 0;
    var currentInput = '';
    console.log('the document is ready');

    function getGiphy(i) {
        console.log('The getGiphy Function was called');
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q=" + i + "&api_key=dc6zaTOxFJmzC&limit=13",
            method: "GET",
            success: function(response) {
                //Log the orignal image to the console    
                var image = response.data[counter].images.original.url;
                //Log the url from the orignial gif to the console  
                $('#gif').html('<img src=' + image + '>');
            },
        });
    }
    $("#search").click(function() {
        console.log('the button was clicked');
        var input = $("#search-term").val();
        console.log(input);
        getGiphy(input);
        if (currentInput == input) {
            counter++;
        } else {
            counter = 0;
        }
        console.log('counter is ' + counter);
        currentInput = input;
    });

});
