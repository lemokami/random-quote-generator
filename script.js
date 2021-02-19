const quote = document.getElementById('quote');
const author = document.getElementById('author');
const genQuoteBtn = document.getElementById('generateQuote');
let quotes = [];

async function fetchQuotes() {
  const res = await fetch('quotes.json');
  const data = await res.json();

  quotes = data.quotes;
}

fetchQuotes();

function generateQuote() {
  const randomQuoteIndex = Math.floor(Math.random(quotes.length) * 10);
  const quoteSelected = quotes[randomQuoteIndex];
  quote.innerText = quoteSelected.quote;
  author.innerText = quoteSelected.author;
}

genQuoteBtn.addEventListener('click', generateQuote);
