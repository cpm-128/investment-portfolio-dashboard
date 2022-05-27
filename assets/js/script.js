var stockDataSymbolPlaceholder = "TSLA,APPL"
var userStockFormEl = document.querySelector("#stockForm1");
var stockNameInputEl = document.querySelector("#inline-stock-name");
var holdingsInputEl = document.querySelector("#inline-shares");

var getUserStock = function(userStock) {
    // format the api url
    var stockDataApiUrl = "https://api.stockdata.org/v1/data/quote?symbols=" + stockDataSymbolPlaceholder + "&api_token=VQxLXn7DNMOmzB4lAV4OxmImM24GRRLXLHOfAZtv" ;

    // make a request to the url
    fetch(stockDataApiUrl)
        .then(function(response) {
            response.json().then(function(data) {
                console.log(data);
            });
        });
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(">>>" , event);
};

userStockFormEl.addEventListener("submit" , formSubmitHandler);