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

    // console.log(res);



});