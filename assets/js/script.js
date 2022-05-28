// START STOCK 1
var userStockForm1El = document.querySelector("#stockForm1");
var stockNameInput1El = document.querySelector("#stock-input-1");
var sharesHeldInput1El = document.querySelector("#share-input-1");
var inputError1El = document.querySelector("#input-error-1");
var displayStock1El = document.querySelector("#display-stock-1");

var getUserStock1 = function(stockName) {
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

var formSubmitHandler1 = function(event) {
    event.preventDefault();

    // get value from stock input element
    var stockName = stockNameInput1El.value.trim();

    if (stockName) {
        getUserStock1(stockName);
        // remove any error message and any existing stock display
        inputError1El.innerHTML = "";
        displayStock1El.innerHTML = "";
    } else {
        var stockNameErrorEl = document.createElement("p");
        stockNameErrorEl.textContent = "Enter a valid stock name such as AAPL or TSLA.";
        stockNameErrorEl.setAttribute("class" , "error-message");
        inputError1El.append(stockNameErrorEl);
    }

    // get value from shares input element
    var sharesHeld = sharesHeldInput1El.value.trim();

    if (sharesHeld) {
        // **TO ADD: pass sharesHeld to performance calculation
    };
};

userStockForm1El.addEventListener("submit" , formSubmitHandler1);
// END STOCK 1

// START STOCK 2
var userStockForm2El = document.querySelector("#stockForm2");
var stockNameInput2El = document.querySelector("#stock-input-2");
var sharesHeldInput2El = document.querySelector("#share-input-2");
var inputError2El = document.querySelector("#input-error-2");
var displayStock2El = document.querySelector("#display-stock-2");

var getUserStock2 = function(stockName) {
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
                    displayStock2El.append(stockNameEl);
                var regMarketPriceEl = document.createElement("p");
                    regMarketPriceEl.textContent = "$" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock2El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = (regMarketChange*100).toFixed(2) + "%";
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock2El.append(regMarketChangeEl);

                // color code displayStock2El
                if (regMarketChange > 0) {
                    displayStock2El.setAttribute("class" , "performance-positive");
                    console.log("POSITIVE");
                } else if (regMarketChange < 0) {
                    displayStock2El.setAttribute("class" , "performance-negative");
                    console.log("NEGATIVE");
                }

            });
            }
        });
};

var formSubmitHandler2 = function(event) {
    event.preventDefault();

    // get value from stock input element
    var stockName = stockNameInput2El.value.trim();

    if (stockName) {
        getUserStock2(stockName);
        // remove any error message and any existing stock display
        inputError2El.innerHTML = "";
        displayStock2El.innerHTML = "";
    } else {
        var stockNameErrorEl = document.createElement("p");
        stockNameErrorEl.textContent = "Enter a valid stock name such as AAPL or TSLA.";
        stockNameErrorEl.setAttribute("class" , "error-message");
        inputError2El.append(stockNameErrorEl);
    }

    // get value from shares input element
    var sharesHeld = sharesHeldInput2El.value.trim();

    if (sharesHeld) {
        // **TO ADD: pass sharesHeld to performance calculation
    };
};

userStockForm2El.addEventListener("submit" , formSubmitHandler2);
// END STOCK 2