# Investment Portfolio Dashboard
An investment portfolio dashboard that will run in the browser and feature dynamically updated HTML and CSS utilizing the Yahoo Finance API and Breaking News API to retrieve pricing data and related breaking news for user-selected stocks. Uses localStorage for quick access to previously selected stocks and amount of shares held.

## User Story
AS AN investor, I WANT to see how my portfolio is performing and see breaking news related to my investments SO THAT I can evaluate my portfolio's performance compared to the market and make stock decisions.
## Acceptance Criteria
GIVEN a portfolio dashboard for 5 stock and shares held inputs . . .

WHEN I which companies I'm invested in and how many shares of each,
THEN a visual of the stock's daily performance is display.
_**(to edit: what the specific visual is, likely a graph from the api?)**_

WHEN I enter the stocks and shares I hold,
THEN the daily average performance of the portfolio is calculated.

WHEN the daily average performance of my portfolio is calculated,
THEN a visual is displayed on the screen adjacent to the market's overall daily performance to compare to as a benchmark.
_**(to edit: the specific visual for my portfolio, may just be a number for the MVP**_

WHEN my daily average performance is display on the screen,
THEN it is color-coded to easily indicate if performance is up (green) or down (red).

WHEN I enter stocks in the user input form field,
THEN breaking news from the last 24 hrs is displayed for each company so that I may evaluate any impact it has on my holdings.

WHEN breaking news is loaded on the page,
THEN I am presented with the stock's ticker, company name, article title, news source, time the news article was published.

WHEN I click the breaking news article title,
THEN the original article from the news source opens in a new tab.

WHEN I open or refresh the application,
THEN stocks and shares a reloaded from my last session.

WHEN I have the application open,
THEN information will auto update every 15 minutes.

## Mock-up
<img src="./assets/images/portfolio dashboard_mock-up.png"></img>

## APIs Utilized
1. StockData.org
Purpose: real-time stock price for the day
https://www.stockdata.org/documentation

2. Breaking News
Purpose: get real-time breaking news for specific companies
https://rapidapi.com/MyAllies/api/breaking-news/

## Deployed Application

Live URL:

Repo URL:

Screenshots:

## Future Updates
- Graph my portfolio's performance throughout the day in real-time (a graphical representation, like the stock market)