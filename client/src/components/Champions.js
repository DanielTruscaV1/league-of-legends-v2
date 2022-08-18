import React,{useState} from 'react';
import style from "./ChampionsCSS.module.css";
import image2 from "../images/image2.jpg";
import aatrox from "../images/aatrox.jpg";
import ahri from "../images/ahri.jpg";
import akali from "../images/akali.jpg";
import akshan from "../images/akshan.jpg";
import alistar from "../images/alistar.jpg";
import amumu from "../images/amumu.jpg";
import anivia from "../images/anivia.jpg";
import annie from "../images/annie.jpg";
import aphelios from "../images/aphelios.jpg";
import ashe from "../images/ashe.jpg";
import aurelion from "../images/aurelion.jpg";
import azir from "../images/azir.jpg";
import bard from "../images/bard.jpg";
import bel from "../images/bel.jpg";
import blitzcrank from "../images/blitzcrank.jpg";

function Champions() {
  const [images1, setImages1] = useState([aatrox, ahri, akali, akshan, alistar]);
  const [images2, setImages2] = useState([amumu, anivia, annie, aphelios, ashe]);
  const [images3, setImages3] = useState([aurelion, azir, bard, bel, blitzcrank]);
  return (
    <div className={style.container}>
        <h1>
            Meet the champions!
        </h1>
        <p className={style.subtitle}>
            League of Pros has guides for the over 140 champions from League of Legends
        </p>
        <img src={image2} alt=""/>
        <br/>
            <div className={style.container2}>
                {
                    images1.map(image => {
                        return <img 
                        className={style.championImage}
                        src={image} 
                        alt=""/>
                    })
                }   
                <br/>
                {
                    images2.map(image => {
                        return <img 
                        className={style.championImage}
                        src={image} 
                        alt=""/>
                    })
                }   
                {
                    images3.map(image => {
                        return <img 
                        className={style.championImage}
                        src={image} 
                        alt=""/>
                    })
                }
            </div>
    </div>
  )
}

export default Champions;