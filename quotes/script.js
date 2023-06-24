const quoteEl = document.getElementById("quote");
const btnEl = document.getElementById("btn");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuotes(){
    
    try {
        btnEl.innerText = "loading...";
        quoteEl.innerText = "Updating....";
        authorEl.innerText = "Updating....";
        btnEl.disabled = true;
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happened, try again later";
        authorEl.innerText = "An error happened";
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
        
    }
}

getQuotes()

btnEl.addEventListener("click", getQuotes)