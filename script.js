// RGAPI-2f2fa79d-758c-4354-a7f8-57f32153be41

const searchBtn = document.getElementById("submit");
const searchInput = document.getElementById("search");
const searchApi = "https://tft-data-backend.herokuapp.com/search/";
const usernameApi = "https://tft-data-backend.herokuapp.com/username/";
const puuidApi = "https://tft-data-backend.herokuapp.com/puuid/";

searchInput.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    let gameData = await getMatches();
    let retrievedData = await retrieveData(gameData[0]);
    await displayData(retrievedData);

    console.log(searchInput.value);
    updateHeading(searchInput.value);
  }
});

searchBtn.addEventListener("click", () => {});

async function getUsername(puuid) {
  try {
    const pulledData = await fetch(usernameApi + puuid);
    const data = await pulledData.json();

    return data.username;
  } catch (error) {
    console.error(`Error Received: ${error.message}`);
  }
}

async function getMatches() {
  try {
    const pulledData = await fetch(searchApi + searchInput.value);
    const data = await pulledData.json();
    return data;
  } catch (error) {
    console.error(`Error Received: ${error.message}`);
  }
}

function updateHeading(text) {
  const heading = document.querySelector("h1");
  heading.innerText = text;
}

async function retrieveData(text) {
  const today = new Date();
  const info = text.info;
  const players = info.participants;
  const data = {};

  // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
  await Promise.all(
    players.map(async (player) => {
      const username = await getUsername(player.puuid);
      if (username.toUpperCase() === searchInput.value.toUpperCase()) {
        data.position = player.placement;
      }
    })
  );

  let playedOn = new Date(info.game_datetime);
  let msInDay = 24 * 60 * 60 * 1000;
  data.gameTime = Math.floor((today - playedOn) / msInDay) + " days ago";

  data.gameLength =
    Math.floor(info.game_length / 60) + ":" + Math.floor(info.game_length % 60);
  data.gameType = info.tft_game_type;

  return data;
}

async function displayData(data) {
  const paragraph = document.querySelector("p");
  paragraph.innerHTML = JSON.stringify(data);
  console.log(data);

  const position = document.getElementById("position");
  const date = document.getElementById("date")
  const gameLength = document.getElementById("game-length")

  date.innerHTML = "Played " + data.gameTime
  position.innerHTML = "Pos - " + data.position
  gameLength.innerHTML = "Time in-game: " + data.gameLength
}
