var stockSymbolPlaceholder = "TSLA"
var userStockFormEl = document.querySelector("#stockForm1");
var stockNameInputEl = document.querySelector("#inline-stock-name");
var holdingsInputEl = document.querySelector("#inline-shares");
var inputErrorEl = document.querySelector("#input-error");
var displayStock1El = document.querySelector("#display-stock-1");



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
            if(response.ok) {
                response.json().then(function(data) {
                var regMarketPrice = data.price.regularMarketPrice.raw;
                var regMarketChange = data.price.regularMarketChangePercent.raw;
                    console.log(">> regular market price >>" , regMarketPrice);
                    console.log(">> regular market change % >>" , regMarketChange);

                // append to page
                var stockNameEl = document.createElement("h3");
                    stockNameEl.textContent = stockName.toUpperCase();
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm align-center");
                    displayStock1El.append(stockNameEl);
                var regMarketPriceEl = document.createElement("p");
                    regMarketPriceEl.textContent = "$" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock1El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = (regMarketChange*100).toFixed(2) + "%";
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock1El.append(regMarketChangeEl);

                // color code displayStock1El
                if (regMarketChange > 0) {
                    displayStock1El.setAttribute("class" , "performance-positive");
                    console.log("POSITIVE");
                } else if (regMarketChange < 0) {
                    displayStock1El.setAttribute("class" , "performance-negative");
                    console.log("NEGATIVE");
                }

            });
            }
        });
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    // get value from stock input element
    var stockName = stockNameInputEl.value.trim();

    if (stockName) {
        getUserStock(stockName);
        // remove any error message and any existing stock display
        inputErrorEl.innerHTML = "";
        displayStock1El.innerHTML = "";
    } else {
        var stockNameErrorEl = document.createElement("p");
        stockNameErrorEl.textContent = "Enter a valid stock name such as AAPL or TSLA.";
        stockNameErrorEl.setAttribute("class" , "error-message");
        inputErrorEl.append(stockNameErrorEl);
    }

    // **TO ADD: get value from # holdings element and pass to performance calculation
};

userStockFormEl.addEventListener("submit" , formSubmitHandler);