// Load Javascript after HTML finished loading
$(document).ready(function(){
    //Declare & Define Variables



    var queryURL = "https://cors-anywhere.herokuapp.com/" + "https://api.musixmatch.com/ws/1.1/chart.tracks.get?" + "chart_name=top" + "&apikey=a0c16acc7fa27d7659942b310a49033d"

    // AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        console.log(response);



    });


















});