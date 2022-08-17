import React from 'react'
import style from "./NavigationCSS.module.css";

function Navigation() {
  const changeToWhiteTheme = () => {
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("title").style.borderColor = "black";
    document.getElementById("navigation").style.backgroundColor = "rgb(50, 50, 50)";
    document.body.style.backgroundColor = "white";
    document.body.style.color= "black";
    document.getElementById("footer").style.backgroundColor="rgb(230, 230, 230)";
  }
  const changeToBlackTheme = () => {
    document.getElementById("header").style.backgroundColor = "rgb(30, 30, 30)";
    document.getElementById("title").style.borderColor = "white";
    document.getElementById("navigation").style.backgroundColor = "rgb(50, 50, 50)";
    document.body.style.backgroundColor = "rgb(30, 30, 30)";
    document.body.style.color= "white";
    document.getElementById("footer").style.backgroundColor="rgb(50, 50, 50)";
  }
  const changeToPurpleTheme = () => {
    document.getElementById("header").style.backgroundColor = "rgb(120, 40, 120)";
    document.getElementById("title").style.borderColor = "white";
    document.getElementById("navigation").style.backgroundColor = "rgb(80, 20, 80)";
    document.body.style.backgroundColor = "rgb(120, 40, 120)";
    document.body.style.color= "white";
    document.getElementById("footer").style.backgroundColor="rgb(80, 20, 80)";
  }

  return (
    <div className={style.container} id="navigation">
        <ul>
            <li>
                Sign-up
            </li>
            <li>
                Sign-in
            </li>
            <li>
                Profile
            </li>
            <li>
                GPI
            </li>
            <li>
                Champions
            </li>
            <li>
                Items
            </li>
            <li>
                Tier List
            </li>
        </ul>
        <button onClick={changeToWhiteTheme} className={style.special}>White theme</button>
        <button onClick={changeToBlackTheme}>Black theme</button>
        <button onClick={changeToPurpleTheme}>Purple theme</button>
    </div>
  )
}

export default Navigation