// RGAPI-2f2fa79d-758c-4354-a7f8-57f32153be41

const searchBtn = document.getElementById("username-search-button");
const searchInput = document.getElementById("username-search");
const searchApi = "https://tft-data-backend.herokuapp.com/search/";
const usernameApi = "https://tft-data-backend.herokuapp.com/username/";

searchInput.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    let gameData = await getMatches();
    await displayData(gameData[0]);
    let ppuid = await gameData[0].info.participants[4].puuid;
    let name = await getUsername(ppuid);
    console.log(name);

    updateHeading(name);
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

function updateHeading(text) {
  const heading = document.querySelector("h1");
  heading.innerText = text;
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

async function displayData() {}
