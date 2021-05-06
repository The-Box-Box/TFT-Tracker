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

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.send(`You should not be here`);
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

app.get("/username/:puuid", async (req, res) => {
  const puuid = req.params.puuid;
  const name = await getUsername(puuid);
  const username = await { username: name };
  await res.send(username);
});

app.get("/puuid/:username", async (req, res) => {
  const username = req.params.username;
  const gotPuuid = await getPuuid(username);
  const puuid = await { puuid: gotPuuid };

  await res.send(puuid);
});

async function getUsername(puuid) {
  let response = await fetch(
    `https://oc1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/${puuid}?${apiKey}`
  );
  let data = await response.json();

  return data.name;
}

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
