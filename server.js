const https = require("https");

const apiKey = "RGAPI-2f2fa79d-758c-4354-a7f8-57f32153be41";
const url =
  "https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/whywesmurfing?api_key=" +
  apiKey;

https
  .get(url, (resp) => {
    let data = "";

    // A chunk of data has been recieved.
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
