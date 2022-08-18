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
                    {gameData.info.participants.map((data, participantsIndex) => 
                      <>
                        <p>Summoner name: {data.summonerName}</p>
                        <p>Lane: {data.lane}</p>
                        <p>Champion name: {data.championName}</p>
                        <p>Champion level: {data.champLevel}</p>
                        <p>KDA: {data.kills}/{data.deaths}/{data.assists}</p>
                        <p>Gold: {data.goldEarned}</p>
                        <p>Vision score: {data.visionScore}</p>
                        <p>Damage: {data.totalDamageDealtToChampions}</p>
                        <hr/>
                      </>
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
