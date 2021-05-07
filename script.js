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
// trait image folder
const traitImgAPI = "https://files-for-hackathon.netlify.app/traits/";

// on form submit prevents the reload and pulls the user data from the searched params
userSearch.addEventListener("submit", async (event) => {
  event.preventDefault();
  const matchesContainer = document.getElementById("matches-container");
  matchesContainer.innerHTML = "";
  let gameData = await getMatches();
  gameData.forEach(async (game) => {
    let retrievedData = await createObjectFromData(game);
    await createMatchDiv(retrievedData);
  });

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

// can be called with the user's username to retreieve the puuid
async function getPuuid(username) {
  try {
    const pulledData = await fetch(puuidApi + username);
    const data = await pulledData.json();

    return data.puuid;
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

async function createObjectFromData(text) {
  const today = new Date();
  const info = text.info;
  const players = info.participants;
  const data = {};
  const username = searchInput.value;

  // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
  const playerPuuid = await getPuuid(username);
  players.forEach((player) => {
    if (player.puuid == playerPuuid) {
      data.position = player.placement;
      data.traits = player.traits;
      data.units = player.units;
      data.username = username;
      setUsernameHeader(username);
    }
  });

  let playedOn = new Date(info.game_datetime);

  console.log(playedOn);

  let msInDay = 24 * 60 * 60 * 1000;
  data.gameTime = Math.floor((today - playedOn) / msInDay) + " days ago";

  data.gameLength =
    Math.floor(info.game_length / 60) + ":" + Math.floor(info.game_length % 60);
  data.gameType = info.tft_game_type;

  return data;
}

// Sets the header and unhides it
function setUsernameHeader(username) {
  const usernameHeader = document.getElementById("username-header");
  usernameHeader.textContent = username;
  usernameHeader.classList.remove("hidden");
}

// create each individual match div
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
  if (data.position >= 5) {
    matchHeader.classList.add("loss");
  } else {
    matchHeader.classList.add("win");
  }
  // attach header to match div
  matchDiv.appendChild(matchHeader);
  // create main container to keep all data regarding champions used, items and traits
  const main = document.createElement("main");
  // create container for all of the trait images
  const traits = document.createElement("div");
  traits.classList.add("traits");

  // go through each trait and if their is a style create an <img> with that image and append it to the traits container
  data.traits.forEach((trait) => {
    if (trait.style != 0) {
      const traitImg = document.createElement("img");
      traitImg.classList.add("trait-img");
      if (trait.style == 1) {
        traitImg.classList.add("bronze");
      } else if (trait.style == 2) {
        traitImg.classList.add("silver");
      } else if (trait.style == 3) {
        traitImg.classList.add("gold");
      } else {
        traitImg.classList.add("diamond");
      }
      //regex to change the trait name and remove Set5_ and lowercase the first character (GLEBS Solution to renaming files)
      let currentTrait = trait.name.replace(
        /(Set5_)(\w)(\w+)/g,
        (_, __, first, rest) => first.toLowerCase() + rest + ".svg"
      );

      traitImg.src = traitImgAPI + currentTrait;
      traitImg.alt = `This is an image of the ${currentTrait} trait`;
      traits.appendChild(traitImg);
    }
  });
  // append the div container holding traits to the main container
  main.appendChild(traits);

  const champions = document.createElement("div");
  champions.classList.add("champions");

  data.units.forEach((unit) => {
    // create a div to hold all the champ images
    const champ = document.createElement("div");
    champ.classList.add("champ");
    // create a heading for the tier value of the champ
    const tier = document.createElement("h6");
    tier.innerText = unit.tier;
    champ.appendChild(tier);
    // create an <img> with the champ image
    const champImg = document.createElement("img");
    champImg.classList.add("champion-img");
    champImg.src = `https://files-for-hackathon.netlify.app/champions/${unit.character_id}.png`;
    champImg.alt = `This is an image of ${unit.character_id}`;
    champ.appendChild(champImg);
    // create a <ul> that hold a list of items
    const itemList = document.createElement("ul");
    itemList.classList.add("items-list");
    // create a list item for the first item
    const li1 = document.createElement("li");
    li1.classList.add("item");
    if (unit.items[0]) {
      let item = unit.items[0];
      if (item < 10) {
        item = `0${item}`;
      }
      const unitImage = document.createElement("img");
      unitImage.classList.add("item-img");
      unitImage.src = `https://files-for-hackathon.netlify.app/items/${item}.png`;
      li1.appendChild(unitImage);
    }
    itemList.appendChild(li1);
    // create a list item for the second item
    const li2 = document.createElement("li");
    li2.classList.add("item");
    if (unit.items[1]) {
      let item = unit.items[1];
      if (item < 10) {
        item = `0${item}`;
      }
      const unitImage = document.createElement("img");
      unitImage.classList.add("item-img");
      unitImage.src = `https://files-for-hackathon.netlify.app/items/${item}.png`;
      li2.appendChild(unitImage);
    }
    itemList.appendChild(li2);
    // create a list item for the third item
    const li3 = document.createElement("li");
    li3.classList.add("item");
    if (unit.items[2]) {
      let item = unit.items[2];
      if (item < 10) {
        item = `0${item}`;
      }
      const unitImage = document.createElement("img");
      unitImage.classList.add("item-img");
      unitImage.src = `https://files-for-hackathon.netlify.app/items/${item}.png`;
      li3.appendChild(unitImage);
    }
    itemList.appendChild(li3);
    champ.appendChild(itemList);
    champions.appendChild(champ);
  });
  main.appendChild(champions);
  matchDiv.appendChild(main);
  matchesContainer.appendChild(matchDiv);
}
