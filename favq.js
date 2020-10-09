// FavQs
//Load Javascript after HTML finished loading
$(document).ready(function(){

var quoteType; 

$(document).on("click", "button", (e) => {
    var userBtn = e.target;
    quoteType = userBtn.getAttribute("data-type");
    quoteId = quoteType
    // console.log(userBtn);

    var favQsURL = "https://cors-anywhere.herokuapp.com/" + "https://favqs.com/api/" + "quotes/?filter=funny&type=tag";

    // AJAX call for FavQs
    $.ajax({
        url: favQsURL,
        method: "GET",
        headers: {
            authorization: 
            "Token token=19fc73e5352d2abf14a4264b58512ba9"}
    }).then(function(res){

    //var quoteObj = JSON.parse(res);
    // console.log(res);
    // console.log(quoteObj);
    $("footer").empty();
    var userQuotes = res.quotes; //this is an array
    // console.log(userQuotes);
    var ranQuote = userQuotes[Math.floor(Math.random()*userQuotes.length)];
    // console.log(ranQuote);
    var selectedQuote = ranQuote.body;
    var author = ranQuote.author;
    var selectedQuoteDiv = $("<div>").text(selectedQuote);
    var authorDiv = $("<div>").text("-"+ author);
// console.log(selectedQuote,author);
$("footer").append(selectedQuoteDiv, authorDiv);
    // switch (userBtn) {
    //     case document.getElementById("sad") :
    //                 $(".emo").append(selectedQuoteDiv, authorDiv);
    //                 // var sadQuote = {};
    //                 // sadQuote["selectedQuote"] = quote;
    //                 // sadQuote["author"] = author;
    //                 // sadQuote.push(sadObj);
    //      };
    });
});
});