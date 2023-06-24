const inputEl = document.getElementById("input");
const infoTextE1 = document.getElementById("info-text");
const meaningContainerE1 = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fecthAPI(word){
    try {
        infoTextE1.style.display = "block";
        meaningContainerE1.style.display ="none";
        infoTextE1.innerText = ` Searching for "${word}" `;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());

    if(result.title){
        meaningContainerE1.style.display ="block";
        titleEl.innerText = word;
        meaningEl.innerText = "N/A";
        audioEl.style.display = "none"; 
        infoTextE1.style.display = "none";

    }else{
        infoTextE1.style.display = "none";
        meaningContainerE1.style.display ="block";
        audioEl.style.display = "inline-flex";
        titleEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;
    }

    
    
    } catch (error) {
        console.log(error);
        infoTextE1.innerText = `an error occurred, try again later`;
    }
}

inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key === "Enter"){
        fecthAPI (e.target.value);
    }
})