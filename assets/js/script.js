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
                    regMarketPriceEl.textContent = "Market Price: $" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock1El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = "Market Change: " + (regMarketChange*100).toFixed(2) + "%";
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
            localStorage.setItem("sharesHeld1", sharesHeld);
        // **TO ADD: pass sharesHeld to performance calculation
    };
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
                    regMarketPriceEl.textContent = "Market Price: $" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock2El.append(regMarketPriceEl);
            var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = "Market Change: " + (regMarketChange*100).toFixed(2) + "%";
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
        // **TO ADD: pass sharesHeld to performance calculation
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
                    displayStock3El.append(stockNameEl);
                var regMarketPriceEl = document.createElement("p");
                    regMarketPriceEl.textContent = "Market Price: $" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock3El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = "Market Change: " + (regMarketChange*100).toFixed(2) + "%";
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock3El.append(regMarketChangeEl);

                // color code displayStock3El
                if (regMarketChange > 0) {
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
        // **TO ADD: pass sharesHeld to performance calculation
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
                    displayStock4El.append(stockNameEl);
                var regMarketPriceEl = document.createElement("p");
                    regMarketPriceEl.textContent = "Market Price: $" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock4El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = "Market Change: " + (regMarketChange*100).toFixed(2) + "%";
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock4El.append(regMarketChangeEl);

                // color code displayStock4El
                if (regMarketChange > 0) {
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
        // **TO ADD: pass sharesHeld to performance calculation
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
                    displayStock5El.append(stockNameEl);
                var regMarketPriceEl = document.createElement("p");
                    regMarketPriceEl.textContent = "Market Price: $" + regMarketPrice;
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock5El.append(regMarketPriceEl);
                var regMarketChangeEl = document.createElement("p");
                    regMarketChangeEl.textContent = "Market Change: " + (regMarketChange*100).toFixed(2) + "%";
                    stockNameEl.setAttribute = ("class" , "w-full max-w-sm");
                    displayStock5El.append(regMarketChangeEl);

                // color code displayStock5El
                if (regMarketChange > 0) {
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
        // **TO ADD: pass sharesHeld to performance calculation
    };
};

userStockForm5El.addEventListener("submit" , formSubmitHandler5);
// END STOCK 5

// START NEWS FEED


// BB Finance API

const searchFrom = document.querySelector('.search');
const stockInfoInput = document.querySelector('.input');
const stockNewsList = document.querySelector('.stock-list');

searchFrom.addEventListener('submit', getStockNews)

function getStockNews(e) {

    if (input.value == '') {
        return
    }
    stockNewsList.innerHTML =""
    e.preventDefault()

    const apiKey = 'd520633d29mshfc3dadd75150279p12c15cjsn02ce7a47ed5e'
    let topic = input.value;

    let url = `https://bb-finance.p.rapidapi.com/news/list?id=markets$(topic)&apiKey=$(apiKey)`

    fetch(url).then((res) => {
        return res.json()
    }).then((data)=> {
        console.log(data)
        data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', 'blank');
            a.textContent = article.title;
            li.appendChild(a);
            stockNewsList.appendChild(li);
        })
    }).catch((error)=>{
        console.log(error)
    })

}
