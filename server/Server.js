var express = require("express");
var cors = require("cors");
const axios = require("axios");

var app = express();
app.use(cors());

const API_KEY = "RGAPI-3cb2eeba-1b9e-498a-9129-7b4c3627a3c4";

function getPlayerPUUID(playerName)
{
    return axios.get("https://eun1.api.riotgames.com"+"/lol/summoner/v4/summoners/by-name/"+playerName+"?api_key="+API_KEY)
    .then(response => {
        console.log(response.data);
        return response.data.puuid;
    })
    .catch(error => error)
}

app.get("/past5Games", async (req, res) => {
    const playerName = req.query.username;
    const PUUID = await getPlayerPUUID(playerName);
    const API_CALL = "https://europe.api.riotgames.com"+"/lol/match/v5/matches/by-puuid/"+PUUID+"/ids"+"?api_key="+API_KEY;
    const gamesIDs = await axios.get(API_CALL)
    .then(response => response.data)
    .catch(error => error);
    console.log(gamesIDs);
    var matchDataArray = [];
    for(var i = 0;i < gamesIDs.length-15;i++)
    {
        const matchID = gamesIDs[i];
        const matchData = await axios.get("https://europe.api.riotgames.com"+"/lol/match/v5/matches/"+matchID+"?api_key="+API_KEY)
        .then(response => response.data)
        .catch(error => error);
        matchDataArray.push(matchData);
    }
    res.json(matchDataArray);
});

app.listen(4000, function(){
    console.log("Server started on port 4000!");
})