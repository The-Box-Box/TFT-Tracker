// RGAPI-2f2fa79d-758c-4354-a7f8-57f32153be41

const searchBtn = document.getElementById("username-search-button");
const searchInput = document.getElementById("username-search");
const searchApi = "https://tft-data-backend.herokuapp.com/search/";
const usernameApi = "https://tft-data-backend.herokuapp.com/username/";
const puuidApi = "https://tft-data-backend.herokuapp.com/puuid/";


searchInput.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    let gameData = await getMatches();
    let retrievedData = await retrieveData(gameData[0]);
    await displayData(retrievedData)

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
    // console.log(data);
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

  const data = {}
  text.info.participants.forEach(async (player) => {
    let username = await getUsername(player.puuid);
    if (username.toUpperCase() === searchInput.value.toUpperCase()) {
      data.position = player.placement
    }
  });
  data.gametime = today - Date(text.info.game_datetime / 1000)
  data.gamelength = text.info.game_length

  return data
}

async function displayData(data) {
  const paragraph = document.querySelector("p");
  paragraph.innerHTML = JSON.stringify(data)
}
