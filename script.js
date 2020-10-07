// Load Javascript after HTML finished loading
$(document).ready(function(){
    //Declare & Define Variables


    //Musixmatch
    var queryURL = "https://cors-anywhere.herokuapp.com/" + "https://api.musixmatch.com/ws/1.1/chart.tracks.get?" + "chart_name=top" + "&apikey=a0c16acc7fa27d7659942b310a49033d"

    // AJAX call for musixmatch
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        console.log(response);



    });


    // FavQs
    var favQsURL = "https://cors-anywhere.herokuapp.com/" + "https://favqs.com/api/" + "quotes"

    // AJAX call for FavQs
    $.ajax({
        url: favQsURL,
        method: "GET",
        headers: {
            authorization: 
            "Token token=19fc73e5352d2abf14a4264b58512ba9"}
    }).then(function(res){

        console.log(res);



    });















});