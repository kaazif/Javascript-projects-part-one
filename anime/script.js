const btnE1 = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.getElementById("anime-img");
const animeNameEl = document.querySelector(".anime-name");


btnE1.addEventListener("click", async function(){
    try {
        btnE1.disabled = true;
        btnE1.innerText = "Loading...";
        animeNameEl.innerText = "Updating..."
        animeImgEl.src = "spinner.svg"
        const response =  await fetch("https://api.catboys.com/img"); 
        const data = await response.json();
        btnE1.disabled = false;
        btnE1.innerText = "Get Anime";
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url
        animeNameEl.innerText = data.artist
        
    } catch (error) {
        console.log(error);
        btnE1.innerText = "Get Anime";
        animeNameEl.innerText = "An error happend, please try again"
        btnE1.disabled = false;
        animeImgEl.src = "none"
    }
})