const buttonEl = document.querySelector(".btn");
const emojiEl = document.querySelector(".emoji");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=5f091d406c5a50c56fc642fee03607ca9958a6a3"
  );

  data = await response.json();

  for (let i = 0; i < 2500; i++) {
    emoji.push({
      emojiIcon: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();


buttonEl.addEventListener("click", () => {
    const randomIcon = Math.floor(Math.random() * emoji.length);
    buttonEl.innerText = emoji[randomIcon].emojiIcon;
    emojiEl.innerText = emoji[randomIcon].emojiCode;
});
