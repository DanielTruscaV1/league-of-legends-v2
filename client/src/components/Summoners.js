import React, {useState} from 'react';
import axios from 'axios';
import style from "./SummonersCSS.module.css";

function Summoners() {
  const [searchText, setSearchText] = useState("");
  const [gameList, setGameList] = useState([]);

  function getPlayerGames(event)
  {
    axios.get("http://localhost:4000/past5Games", {params: {username: searchText}})
    .then(function(response){
      setGameList(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
  }
  console.log(gameList);
  return (
    <div className={style.container}>
        <h1 className={style.title}>
            League of Legends summoner searcher
        </h1>
        <p className={style.description}>
            Search for a summoner:
        </p>
        <input onChange={e => setSearchText(e.target.value)} type="text" className={style.input} placeholder="Summoner's name..."/>
        <button onClick={getPlayerGames} className={style.button}>Search</button>
        {
          gameList.length !== 0 ? 
          <>
            <h3>The last 5 games:</h3>
            {
              gameList.map((gameData, index) => 
                <>
                  <div>
                    <h4>Game {index+1}</h4>
                    <p>Game mode: {gameData.info.gameMode}</p>
                    <p>Game duration: {parseInt(gameData.info.gameDuration/60)} minutes</p>
                    <h4>Summoners: </h4>
                    <div className={style.container2}>
                      <p>Summoner name:</p>
                      <p>Lane:</p>
                      <p>Champion name:</p>
                      <p>Champion level:</p>
                      <p>KDA:</p>
                      <p>Gold:</p>
                      <p>Vision score:</p>
                      <p>Damage:</p>
                    </div>
                    {gameData.info.participants.map((data, participantsIndex) => 
                      <div className={participantsIndex < 5?
                          gameData.info.teams[0].win === true ?
                          style.container2Victory:
                          style.container2Defeat
                          :
                          gameData.info.teams[1].win === true?
                          style.container2Victory:
                          style.container2Defeat
                        }>
                        <p>{data.summonerName}</p>
                        <p>{data.lane}</p>
                        <p>{data.championName}</p>
                        <p>{data.champLevel}</p>
                        <p>{data.kills}/{data.deaths}/{data.assists}</p>
                        <p>{data.goldEarned}</p>
                        <p>{data.visionScore}</p>
                        <p>{data.totalDamageDealtToChampions}</p>
                      </div>
                    )}
                  </div>
                </>
              )
            }
          </>
          :
          <>
            <p>No data</p>
          </>
      }
    </div>
  )
}

export default Summoners;
