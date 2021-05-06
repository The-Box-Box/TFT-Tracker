const searchInput = document.getElementById("search");
const userSearch = document.getElementById("search-form");

// gets the latest 8 games the user has played
const searchApi = "https://tft-data-backend.herokuapp.com/search/";
// converts the username to puuid
const usernameApi = "https://tft-data-backend.herokuapp.com/username/";
// converts the puuid to username
const puuidApi = "https://tft-data-backend.herokuapp.com/puuid/";

// on form submit prevents the reload and pulls the user data from the searched params
userSearch.addEventListener("submit", async (event) => {
  event.preventDefault();
  let gameData = await getMatches();
  let retrievedData = await retrieveData(gameData[0]);
  await displayData(retrievedData);
  console.log(searchInput.value);
});

// can be called with the user's puuid to retreieve the username
async function getUsername(puuid) {
  try {
    const pulledData = await fetch(usernameApi + puuid);
    const data = await pulledData.json();

    return data.username;
  } catch (error) {
    console.error(`Error Received: ${error.message}`);
  }
}

// returns an array of 9 matches the user has previously played
async function getMatches() {
  try {
    const pulledData = await fetch(searchApi + searchInput.value);
    const data = await pulledData.json();
    return data;
  } catch (error) {
    console.error(`Error Received: ${error.message}`);
  }
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
        data.traits = player.traits;
        data.units = player.units;
      }
    })
  );

  let playedOn = new Date(info.game_datetime);

  console.log(playedOn);

  let msInDay = 24 * 60 * 60 * 1000;
  data.gameTime = Math.floor((today - playedOn) / msInDay) + " days ago";

  data.gameLength =
    Math.floor(info.game_length / 60) + ":" + Math.floor(info.game_length % 60);
  data.gameType = info.tft_game_type;

  return data;
}

// needs to be changed to create new element using the data produced by retrieved data
async function displayData(data) {
  const paragraph = document.querySelector("p");
  paragraph.innerHTML = JSON.stringify(data);
  console.log(data);

  const position = document.getElementById("position");
  const date = document.getElementById("date");
  const gameLength = document.getElementById("game-length");

  date.innerHTML = "Played " + data.gameTime;
  position.innerHTML = "Pos - " + data.position;
  gameLength.innerHTML = "Time in-game: " + data.gameLength;
}
