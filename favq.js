// FavQs
//Load Javascript after HTML finished loading
$(document).ready(function(){

var quoteType; 

$(document).on("click", "button", (e) => {
    var userBtn = e.target;
    quoteType = userBtn.getAttribute("data-type");
    quoteId = quoteType
    console.log(userBtn);

var favQsURL = "https://cors-anywhere.herokuapp.com/" + "https://favqs.com/api/" + "quotes/?filter=funny&type=tag";

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
});