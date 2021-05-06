// sets up node fetch
const fetch = require("node-fetch");

// data required for API
const apiKey = "api_key=RGAPI-2f2fa79d-758c-4354-a7f8-57f32153be41";
const userNameAPI =
  "https://oc1.api.riotgames.com/tft/summoner/v1/summoners/by-name/";

// node set up
const express = require("express");
const { response } = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`${req} is what you put.`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/search/:userName", async (req, res) => {
  const name = req.params.userName;
  const puuid = await getPuuid(name);
  const matchHistory = await getMatchHistory(puuid);
  const pages = createPagination(matchHistory);
  const matchData = await getMatchData(pages());
  // const matchData2 = await getMatchData(pages());
  await res.send(matchData);
});

async function getPuuid(username) {
  let response = await fetch(userNameAPI + username + "?" + apiKey);
  let data = await response.json();

  return data.puuid;
}

async function getMatchHistory(puuid) {
  const matchHistoryApi =
    "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/";
  const amount = "/ids?count=100";
  let response = await fetch(matchHistoryApi + puuid + amount + "&" + apiKey);
  let data = await response.json();

  return data;
}

async function getMatchData(matches) {
  const matchDataApi =
    "https://americas.api.riotgames.com/tft/match/v1/matches/";

  const matchPromises = matches.map((match) =>
    fetch(matchDataApi + match + "?" + apiKey)
  );
  const responses = await Promise.all(matchPromises);
  const rs = responses.map((r) => r.json());
  const data = await Promise.all(rs);

  return data;
}

function createPagination(matches) {
  let index = 0;
  return function () {
    let subArr = matches.slice(index, index + 9);
    index += 5;
    return subArr;
  };
}
