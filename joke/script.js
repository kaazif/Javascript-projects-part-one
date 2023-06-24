const btnEl = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");

const apiKey = "vDyiVF6cLh4XuAIv2Wo6rQ==EBpDyMJwlDZNH4Vr"

const options = {
    method: "Get",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){
    try {
        jokeE1.innerText = "Updating.......";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data =  await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell Me a Joke";

    jokeE1.innerHTML = data[0].joke;
        
    } catch (error) {
        jokeE1.innerHTML = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me a Joke";
        console.log(error);
        
    }
}
btnEl.addEventListener("click", getjoke);