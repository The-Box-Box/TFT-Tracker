const searchBtn = document.getElementById("username-search-button");
const searchInput = document.getElementById("username-search");
const searchApi = "https://tft-data-backend.herokuapp.com/search/";

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getMatches();
  }
});

searchBtn.addEventListener("click", () => {});

function updateHeading(text) {
  const heading = document.querySelector("h1");
  heading.innerText = text;
}

async function getMatches() {
  try {
    const pulledData = await fetch(searchApi + searchInput.value);
    const data = await pulledData.json();
    console.log(data);
    updateHeading("pulled");
  } catch (error) {
    console.error(`Error Received: ${error.message}`);
  }
}