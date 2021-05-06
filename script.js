// RGAPI-2f2fa79d-758c-4354-a7f8-57f32153be41

const searchBtn = document.getElementById("username-search-button");
const searchInput = document.getElementById("username-search");
const apiKey = "?api_key=RGAPI-2f2fa79d-758c-4354-a7f8-57f32153be41";
const userNameAPI =
  "https://oc1.api.riotgames.com/tft/summoner/v1/summoners/by-name/";

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getPuuid();
  }
});

searchBtn.addEventListener("click", () => {});

function updateHeading(text) {
  const heading = document.querySelector("h1");
  heading.innerText = text;
}

async function getPuuid() {
  console.log(userNameAPI + searchInput.value + apiKey);
  try {
    const pulledData = await fetch(userNameAPI + searchInput.value + apiKey);
    const data = await pulledData.json();
    updateHeading(data["puuid"]);
  } catch (error) {
    console.error(`Error Received: ${error.message}`);
  }
}
