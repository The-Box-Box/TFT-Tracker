const searchBtn = document.getElementById("username-search-button");
const searchInput = document.getElementById("username-search");
const searchApi = "https://tft-data-backend.herokuapp.com/search/";
const usernameApi = "https://tft-data-backend.herokuapp.com/username/";

searchInput.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    toggleLoading();
    let gameData = await getMatches();
    await displayData(gameData[0].info);
  }
});

async function getUsername(puuid) {
  try {
    const pulledData = await fetch(usernameApi + puuid);
    const data = await pulledData.json();

    return data.username;
  } catch (error) {
    console.error(`Error Received: ${error.message}`);
  }
}

function toggleLoading() {
  document.getElementById("loader").classList.toggle("hidden");
}

async function getMatches() {
  try {
    const pulledData = await fetch(searchApi + searchInput.value);
    const data = await pulledData.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(`Error Received: ${error.message}`);
  }
}

async function displayData(data) {
  let info = {
    gameTime: data.game_datetime * 1000,
    gameLength: data.game_length,
  };
  let players = data.participants.map((users) => {
    players.puuid;
  });
  data.participants.forEach(async (player) => {
    let username = await getUsername(player.puuid);
    if (username.toUpperCase() === searchInput.value.toUpperCase()) {
      info.placement = player.placement;
      toggleLoading();
    }
  });
  console.log(info);
}

/*
const promiseArray = participants.map(participant => {
  //return promise
  return fetch(participant)
})

const results = await Promise.all(promiseArray)
*/
