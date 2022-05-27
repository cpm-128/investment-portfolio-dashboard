var stockDataApiToken = "VQxLXn7DNMOmzB4lAV4OxmImM24GRRLXLHOfAZtv";
var stockDataSymbolPlaceholder = "TSLA,APPL"

var getUserStock = function(userStock) {
    // format the api url
    var stockDataApiUrl = "https://api.stockdata.org/v1/data/quote?symbols=" + stockDataSymbolPlaceholder + "&api_token=" + stockDataApiToken ;

    // make a request to the url
    fetch(stockDataApiUrl)
        .then(function(response) {
            response.json().then(function(data) {
                console.log(data);
            });
        });
};

getUserStock();