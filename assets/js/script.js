var stockSymbolPlaceholder = "TSLA"
var userStockFormEl = document.querySelector("#stockForm1");
var stockNameInputEl = document.querySelector("#inline-stock-name");
var holdingsInputEl = document.querySelector("#inline-shares");
var inputErrorEl = document.querySelector("#input-error");



var getUserStock = function(stockName) {
    // format the api url
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
            'X-RapidAPI-Key': '895f022c33msh5649ec36fc22d45p1991b5jsn5881cd33897c'
        }
    };
    var yhFinanceApiUrl = "https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=" + stockName + "&region=US" ;

    // make a request to the url
    fetch(yhFinanceApiUrl, options)
        .then(function(response) {
            response.json().then(function(data) {
                console.log(">> regular market price >>" , data.price.regularMarketPrice.raw);
                console.log(">> regular market change % >>" , data.price.regularMarketChangePercent.fmt);
            });
        });
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    // get value from stock input element
    var stockName = stockNameInputEl.value.trim();

    if (stockName) {
        getUserStock(stockName);
        // remove any error message
        inputErrorEl.innerHTML = "";
    } else {
        var stockNameErrorEl = document.createElement("p");
        stockNameErrorEl.textContent = "Enter a valid stock name such as AAPL or TSLA.";
        stockNameErrorEl.setAttribute("class" , "error-message");
        inputErrorEl.append(stockNameErrorEl);
    }

    // **TO ADD: get value from # holdings element and pass to performance calculation
};

userStockFormEl.addEventListener("submit" , formSubmitHandler);