const searchInput = document.getElementById("search");
const userSearch = document.getElementById("search-form");

// gets the latest 8 games the user has played
const searchApi = "https://tft-data-backend.herokuapp.com/search/";
// converts the username to puuid
const usernameApi = "https://tft-data-backend.herokuapp.com/username/";
// converts the puuid to username
const puuidApi = "https://tft-data-backend.herokuapp.com/puuid/";
// trait JSON static file
const traitAPI = "https://files-for-hackathon.netlify.app/traits.json";

// on form submit prevents the reload and pulls the user data from the searched params
userSearch.addEventListener("submit", async (event) => {
  event.preventDefault();
  let gameData = await getMatches();
  let retrievedData = await createObjectFromData(gameData[0]);
  await displayData(retrievedData);
  await createMatchDiv(retrievedData);
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

<<<<<<< HEAD
=======
// returns an array of 9 matches the user has previously played
>>>>>>> development
async function getMatches() {
  try {
    const pulledData = await fetch(searchApi + searchInput.value);
    const data = await pulledData.json();
<<<<<<< HEAD
    console.log(data);
    updateHeading("pulled");
  } catch (error) {
    console.error(`Error Received: ${error.message}`);
  }
}
=======
    return data;
  } catch (error) {
    console.error(`Error Received: ${error.message}`);
  }
}

async function createObjectFromData(text) {
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
        data.username = username;
        setUsernameHeader(username);
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
  const position = document.getElementById("position");
  const date = document.getElementById("date");
  const gameLength = document.getElementById("game-length");

  date.innerHTML = "Played " + data.gameTime;
  position.innerHTML = "Pos - " + data.position;
  gameLength.innerHTML = "Time in-game: " + data.gameLength;
}

// Sets the header and unhides it
function setUsernameHeader(username) {
  const usernameHeader = document.getElementById("username-header");
  usernameHeader.textContent = username;
  usernameHeader.classList.remove("hidden");
}

function createMatchDiv(data) {
  // get main match container
  const matchesContainer = document.getElementById("matches-container");
  // create div to contain individual match data
  const matchDiv = document.createElement("div");
  matchDiv.classList.add("match");
  // create header to attach date, position and game length elements.
  const matchHeader = document.createElement("header");
  matchHeader.classList.add("match-header");
  matchHeader.innerHTML = `
  <h2 id="date">Played ${data.gameTime}</h2>
  <h1 id="position">Pos - ${data.position}</h1>
  <h2 id="game-length">Time in-Game: ${data.gameLength}</h2>`;
  // attach header to match div
  matchDiv.appendChild(matchHeader);
  // create main container to keep all data regarding champions used, items and traits
  const main = document.createElement("main");

  data.traits.forEach(async (trait) => {
    if (trait.style != 0) {
      console.log(
        `Trait: ${trait.name} - Style:${trait.style} - Num: ${trait.num_units}`
      );
    }
  });
}
>>>>>>> development
