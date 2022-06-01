// START STOCK 1
var userStockForm1El = document.querySelector("#stockForm1");
var stockNameInput1El = document.querySelector("#stock-input-1");
var sharesHeldInput1El = document.querySelector("#shares-input-1");
var inputError1El = document.querySelector("#input-error-1");
var displayStock1El = document.querySelector("#display-stock-1");

var getUserStock1 = function(stockName) {
    // format the api url
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
            'X-RapidAPI-Key': 'b239052929msh610a70ac1b2dcccp119d5bjsna0af27722d38'
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
                    regMarketPriceEl.textContent = "Market Price: $" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock1El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = "Market Change: " + (regMarketChange*100).toFixed(2) + "%";
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock1El.append(regMarketChangeEl);

                // set regMarketChange to localStorage and run calculatePortfolioPerformance();
                    localStorage.setItem("regMarketChange1", regMarketChange);
                    portfolioPerformanceEl.innerHTML = "";
                    calculatePortfolioPerformance();

                // color code displayStock1El
                if (regMarketChange >= 0) {
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
        // set to localStorage
            localStorage.setItem("stockTicker1", stockName);
    } else {
        var stockNameErrorEl = document.createElement("p");
        stockNameErrorEl.textContent = "Enter a valid stock ticker such as AAPL or TSLA.";
        stockNameErrorEl.setAttribute("class" , "error-message");
        inputError1El.append(stockNameErrorEl);
    }

    // get value from shares input element
    var sharesHeld = sharesHeldInput1El.value.trim();

    if (sharesHeld) {
        //set to locaStorage
            localStorage.setItem("sharesHeld1", sharesHeld);    };
};

userStockForm1El.addEventListener("submit" , formSubmitHandler1);
// END STOCK 1

// START STOCK 2
var userStockForm2El = document.querySelector("#stockForm2");
var stockNameInput2El = document.querySelector("#stock-input-2");
var sharesHeldInput2El = document.querySelector("#shares-input-2");
var inputError2El = document.querySelector("#input-error-2");
var displayStock2El = document.querySelector("#display-stock-2");

var getUserStock2 = function(stockName) {
    // format the api url
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
            'X-RapidAPI-Key': 'b239052929msh610a70ac1b2dcccp119d5bjsna0af27722d38'
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
                    regMarketPriceEl.textContent = "Market Price: $" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock2El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = "Market Change: " + (regMarketChange*100).toFixed(2) + "%";
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock2El.append(regMarketChangeEl);

            // set regMarketChange to localStorage and run calculatePortfolioPerformance();
                localStorage.setItem("regMarketChange2", regMarketChange);
                portfolioPerformanceEl.innerHTML = "";
                calculatePortfolioPerformance();

                // color code displayStock2El
                if (regMarketChange >= 0) {
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
        // set to localStorage
            localStorage.setItem("stockTicker2", stockName);
    } else {
        var stockNameErrorEl = document.createElement("p");
        stockNameErrorEl.textContent = "Enter a valid stock ticker such as AAPL or TSLA.";
        stockNameErrorEl.setAttribute("class" , "error-message");
        inputError2El.append(stockNameErrorEl);
    }

    // get value from shares input element
    var sharesHeld = sharesHeldInput2El.value.trim();

    if (sharesHeld) {
        // set to localStorage
            localStorage.setItem("sharesHeld2", sharesHeld);
            };
};

userStockForm2El.addEventListener("submit" , formSubmitHandler2);
// END STOCK 2

// START STOCK 3
var userStockForm3El = document.querySelector("#stockForm3");
var stockNameInput3El = document.querySelector("#stock-input-3");
var sharesHeldInput3El = document.querySelector("#shares-input-3");
var inputError3El = document.querySelector("#input-error-3");
var displayStock3El = document.querySelector("#display-stock-3");

var getUserStock3 = function(stockName) {
    // format the api url
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
            'X-RapidAPI-Key': 'b239052929msh610a70ac1b2dcccp119d5bjsna0af27722d38'
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
                    displayStock3El.append(stockNameEl);
                var regMarketPriceEl = document.createElement("p");
                    regMarketPriceEl.textContent = "Market Price: $" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock3El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = "Market Change: " + (regMarketChange*100).toFixed(2) + "%";
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock3El.append(regMarketChangeEl);

            // set regMarketChange to localStorage and run calculatePortfolioPerformance();
                localStorage.setItem("regMarketChange3", regMarketChange);
                portfolioPerformanceEl.innerHTML = "";
                calculatePortfolioPerformance();

                // color code displayStock3El
                if (regMarketChange >= 0) {
                    displayStock3El.setAttribute("class" , "performance-positive");
                    console.log("POSITIVE");
                } else if (regMarketChange < 0) {
                    displayStock3El.setAttribute("class" , "performance-negative");
                    console.log("NEGATIVE");
                }

            });
            }
        });
};

var formSubmitHandler3 = function(event) {
    event.preventDefault();

    // get value from stock input element
    var stockName = stockNameInput3El.value.trim();

    if (stockName) {
        getUserStock3(stockName);
        // remove any error message and any existing stock display
            inputError3El.innerHTML = "";
            displayStock3El.innerHTML = "";
        // set to localStorage
            localStorage.setItem("stockTicker3", stockName);
    } else {
        var stockNameErrorEl = document.createElement("p");
        stockNameErrorEl.textContent = "Enter a valid stock ticker such as AAPL or TSLA.";
        stockNameErrorEl.setAttribute("class" , "error-message");
        inputError3El.append(stockNameErrorEl);
    }

    // get value from shares input element
    var sharesHeld = sharesHeldInput3El.value.trim();

    if (sharesHeld) {
         //set to locaStorage
            localStorage.setItem("sharesHeld3", sharesHeld);
    };
};

userStockForm3El.addEventListener("submit" , formSubmitHandler3);
// END STOCK 3

// START STOCK 4
var userStockForm4El = document.querySelector("#stockForm4");
var stockNameInput4El = document.querySelector("#stock-input-4");
var sharesHeldInput4El = document.querySelector("#shares-input-4");
var inputError4El = document.querySelector("#input-error-4");
var displayStock4El = document.querySelector("#display-stock-4");

var getUserStock4 = function(stockName) {
    // format the api url
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
            'X-RapidAPI-Key': 'b239052929msh610a70ac1b2dcccp119d5bjsna0af27722d38'
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
                    displayStock4El.append(stockNameEl);
                var regMarketPriceEl = document.createElement("p");
                    regMarketPriceEl.textContent = "Market Price: $" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock4El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = "Market Change: " + (regMarketChange*100).toFixed(2) + "%";
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock4El.append(regMarketChangeEl);

            // set regMarketChange to localStorage and run calculatePortfolioPerformance
                localStorage.setItem("regMarketChange4", regMarketChange);
                portfolioPerformanceEl.innerHTML = "";
                calculatePortfolioPerformance();

                // color code displayStock4El
                if (regMarketChange >= 0) {
                    displayStock4El.setAttribute("class" , "performance-positive");
                    console.log("POSITIVE");
                } else if (regMarketChange < 0) {
                    displayStock4El.setAttribute("class" , "performance-negative");
                    console.log("NEGATIVE");
                }

            });
            }
        });
};

var formSubmitHandler4 = function(event) {
    event.preventDefault();

    // get value from stock input element
    var stockName = stockNameInput4El.value.trim();

    if (stockName) {
        getUserStock4(stockName);
        // remove any error message and any existing stock display
            inputError4El.innerHTML = "";
            displayStock4El.innerHTML = "";
        // set to localStorage
            localStorage.setItem("stockTicker4", stockName);
    } else {
        var stockNameErrorEl = document.createElement("p");
        stockNameErrorEl.textContent = "Enter a valid stock ticker such as AAPL or TSLA.";
        stockNameErrorEl.setAttribute("class" , "error-message");
        inputError4El.append(stockNameErrorEl);
    }

    // get value from shares input element
    var sharesHeld = sharesHeldInput4El.value.trim();

    if (sharesHeld) {
        //set to locaStorage
            localStorage.setItem("sharesHeld4", sharesHeld);
    };
};

userStockForm4El.addEventListener("submit" , formSubmitHandler4);
// END STOCK 4

// START STOCK 5
var userStockForm5El = document.querySelector("#stockForm5");
var stockNameInput5El = document.querySelector("#stock-input-5");
var sharesHeldInput5El = document.querySelector("#shares-input-5");
var inputError5El = document.querySelector("#input-error-5");
var displayStock5El = document.querySelector("#display-stock-5");

var getUserStock5 = function(stockName) {
    // format the api url
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
            'X-RapidAPI-Key': 'b239052929msh610a70ac1b2dcccp119d5bjsna0af27722d38'
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
                    displayStock5El.append(stockNameEl);
                var regMarketPriceEl = document.createElement("p");
                    regMarketPriceEl.textContent = "Market Price: $" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock5El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = "Market Change: " + (regMarketChange*100).toFixed(2) + "%";
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock5El.append(regMarketChangeEl);

                // set regMarketChange to localStorage and run calculatePortfolioPerformance();
                    localStorage.setItem("regMarketChange5", regMarketChange);
                    portfolioPerformanceEl.innerHTML = "";
                    calculatePortfolioPerformance();

                // color code displayStock5El
                if (regMarketChange >= 0) {
                    displayStock5El.setAttribute("class" , "performance-positive");
                    console.log("POSITIVE");
                } else if (regMarketChange < 0) {
                    displayStock5El.setAttribute("class" , "performance-negative");
                    console.log("NEGATIVE");
                }

            });
            }
        });
};

var formSubmitHandler5 = function(event) {
    event.preventDefault();

    // get value from stock input element
    var stockName = stockNameInput5El.value.trim();

    if (stockName) {
        getUserStock5(stockName);
        // remove any error message and any existing stock display
            inputError5El.innerHTML = "";
            displayStock5El.innerHTML = "";
        // set to localStorage
            localStorage.setItem("stockTicker5", stockName);
    } else {
        var stockNameErrorEl = document.createElement("p");
        stockNameErrorEl.textContent = "Enter a valid stock ticker such as AAPL or TSLA.";
        stockNameErrorEl.setAttribute("class" , "error-message text-sm");
        inputError5El.append(stockNameErrorEl);
    }

    // get value from shares input element
    var sharesHeld = sharesHeldInput5El.value.trim();

    if (sharesHeld) {
        //set to locaStorage
            localStorage.setItem("sharesHeld5", sharesHeld);
    };
};

userStockForm5El.addEventListener("submit" , formSubmitHandler5);
// END STOCK 5

// START NEWS FEED
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com',
		'X-RapidAPI-Key': 'bed5eead03msh40b97f0839cd9a0p1c8202jsnc640c9a06bc0'
	}
};

function assembleHeadlines(allHeadlines) {
    
    let fmtString = "";
    // let containerDiv = document.createElement("DIV");
    // containerDiv.className = "bg-green-100 text-green-800 text-sm";

    for (let i = 0; i < allHeadlines.length; i++) {
        let newDiv = document.createElement("DIV");
        //set classname
        newDiv.innerText = allHeadlines[i];

        // console.log(allHeadlines[i])
        // fmtString = allHeadlines[i];
        
        
    }
    let data1= `<div class="hwrap container mx-auto"><span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 
        rounded dark:bg-green-200 dark:text-green-900">STOCK NEWS</span>
        <div class="hmove">
        <div class="hitem">${allHeadlines}</div>
         </div></div>`;
         document.getElementById("newsContainer1").innerHTML=data1;
    
}

async function makeRequest() {
    const url = "https://ms-finance.p.rapidapi.com/news/list?performanceId=0P0000OQN8";

    try {
        var msg = await fetch(url, options1);

        if (msg.ok) {
            msg = await msg.json();
        }
        else {
            console.log("GOT A 400 ERROR");
        }
    }
    catch (err) {
        console.log(err);
    }

    return msg;
}


async function getHeadlines() {
    const response = await makeRequest();
    var headlines = [];
    // console.log(response.length);
    for (let i = 0; i < response.length; i++) {
        // console.log(response[i]["title"]);
        headlines[i] = response[i]["title"];
        // console.log(headlines[i])
        
    }
    assembleHeadlines(headlines);
}

getHeadlines();
//  NEWS FEED END

// START CALCULATE PORTFOLIO PERFORMANCE
var portfolioPerformanceEl = document.querySelector("#portfolio-performance-calculation");

var calculatePortfolioPerformance = function() {

    var regMarketChange1 = localStorage.getItem("regMarketChange1");
    var sharesHeld1 = parseInt(localStorage.getItem("sharesHeld1"));
    var regMarketChange2 = localStorage.getItem("regMarketChange2");
    var sharesHeld2 = parseInt(localStorage.getItem("sharesHeld2"));
    var regMarketChange3 = localStorage.getItem("regMarketChange3");
    var sharesHeld3 = parseInt(localStorage.getItem("sharesHeld3"));
    var regMarketChange4 = localStorage.getItem("regMarketChange4");
    var sharesHeld4 = parseInt(localStorage.getItem("sharesHeld4"));
    var regMarketChange5 = localStorage.getItem("regMarketChange5");
    var sharesHeld5 = parseInt(localStorage.getItem("sharesHeld5"));

    // calculation
    var calculation = (regMarketChange1 * sharesHeld1) + (regMarketChange2 * sharesHeld2) + (regMarketChange3 * sharesHeld3) + (regMarketChange4 * sharesHeld4) + (regMarketChange5 * sharesHeld5);
        console.log(">> regMarketChange1 >>" , regMarketChange1 , (">> sharesHeld1 >>") , sharesHeld1 , ">> mult >>" , regMarketChange1*sharesHeld1);
        console.log(">> regMarketChange2 >>" , regMarketChange2 , (">> sharesHeld2 >>") , sharesHeld2 , ">> mult >>" , regMarketChange2*sharesHeld2);
        console.log(">> regMarketChange3 >>" , regMarketChange3 , (">> sharesHeld3 >>") , sharesHeld3 , ">> mult >>" , regMarketChange3*sharesHeld3);
        console.log(">> regMarketChange4 >>" , regMarketChange4 , (">> sharesHeld4 >>") , sharesHeld4 , ">> mult >>" , regMarketChange4*sharesHeld4);
        console.log(">> regMarketChange5 >>" , regMarketChange5 , (">> sharesHeld5 >>") , sharesHeld5 , ">> mult >>" , regMarketChange5*sharesHeld5);
        console.log(">> portfolio performance calculation >>" , calculation);

    // append to page
    var portfolioPerformanceCalculationEl = document.createElement("p");
    portfolioPerformanceCalculationEl.textContent = (calculation*100).toFixed(2) + "%";
    portfolioPerformanceEl.append(portfolioPerformanceCalculationEl);

    // color code based on +/-
    if (calculation > 0) {
        portfolioPerformanceEl.setAttribute("class" , "percentage-positive");
    } else if (calculation < 0) {
        portfolioPerformanceEl.setAttribute("class" , "percentage-negative");
    }
};

calculatePortfolioPerformance();
// **THIS ALSO NEEDS TO RUN EACH TIME THERE IS A NEW SUBMIT BUTTON CLICK
// END CALCULATE PORTFOLIO PERFORMANCE

// START MARKET PERFORMANCE (S&P 500)
var getMarketPerf = function() {

    var marketPerfEl = document.querySelector("#market-change");
    console.log(marketPerfEl);

    // format the api url
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
            'X-RapidAPI-Key': 'b239052929msh610a70ac1b2dcccp119d5bjsna0af27722d38'
        }
    };
    var yhFinanceApiUrl = "https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=^GSPC&region=US";

    // make a request to the url
    fetch(yhFinanceApiUrl, options)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {

                // get S&P 500's market change and convert to %
                var marketChange = data.price.regularMarketChangePercent.raw;
                var marketPercent = (marketChange*100).toFixed(2) + "%";

                // display to page
                    marketPerfEl.textContent=marketPercent;
                    if (marketChange>0) {
                        this.className="";
                        marketPerfEl.classList.add("positive-percentage");
                    }
                    else {
                        this.className="";
                        marketPerfEl.classList.add("negative-percentage");
                    }
                });
            }
        })
}

getMarketPerf();
