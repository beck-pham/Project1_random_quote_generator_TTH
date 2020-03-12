//create an array of quote objects contains 5 famous quotes with souce, citation and years

const quotes = [
  {
      quote: "The Only thing we have to fear, is fear itself.",
      source: "Franklin D. Roosevelt",
      citation: "Inauguration Speech",
      year: "1961"
  },
  {
      quote: "The way to get started is to quit talking and begin doing.",
      source: "Walt Disney",
      citation: "Disneyland",
      year: "1980"
  },
  {
      quote: "Trust the Process",
      source: "Joel EmBrid",
      citation: "NBA",
      year: "2017"
  },
  {
      quote: "Make it Happen",
      source: "Random guy",
      citation: "World wide web",
      year: "2018"
  },
  {
      quote: "Grows thing a little bit slow rather than grows nothing at all",
      source: "Casablanca",
      citation: "California",
      year: "2020"
  }
];

// create a function named getrandomQuote to generate a random quotes from the quotes object
const getRandomQuote = () => {
  // generate a random number between 0 and the last index in the array parameter
  // use the random number and box notation to grab a random item from the quotes array
  //return 
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r},${g},${b})`;
  document.body.style.background = color;
}

const printQuote = () => {
  // create a variable that calls the getrandomQuote() function
  const randomQuote = getRandomQuote();
  // create a variable that initiates your HTML string
  // using the template in the project instructions, add the two default quote properties, quote and source
  // if there is a quote.citation property, add it the string
  // if there is a quote.year property, add it the string
  // close the string with the necessary closing HTML tags
  const htmlQuote = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  <span class="citation">${randomQuote.citation}</span>
  <span class="year">${randomQuote.year}</span></p>`;
  // set the innnerHTML of the .quote-box to the complete HTML string
  const quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = htmlQuote;
  
}
//When the quote changes, randomly change the background color of the page.
//Auto-refresh the quote
//After a set amount of time, like 20 to 30 seconds, print a new quote to the page. 
//A timing method like setInterval() is helpful here. 
//Avoid using the setTimeout function for this step. 
//See the links in the “Additional Resources” section.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", randomColor, false);

setInterval(function() {
  printQuote();
  randomColor();
}, 10000);