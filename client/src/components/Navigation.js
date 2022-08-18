import React from 'react'
import style from "./NavigationCSS.module.css";

function Navigation(props) {
  const changeToWhiteTheme = () => {
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("title").style.borderColor = "black";
    document.getElementById("navigation").style.backgroundColor = "rgb(50, 50, 50)";
    document.body.style.backgroundColor = "white";
    document.body.style.color= "black";
    document.getElementById("footer").style.backgroundColor="rgb(230, 230, 230)";
    document.getElementById("signupForm").style.backgroundColor="rgb(230, 230, 230)";
  }
  const changeToBlackTheme = () => {
    document.getElementById("header").style.backgroundColor = "rgb(30, 30, 30)";
    document.getElementById("title").style.borderColor = "white";
    document.getElementById("navigation").style.backgroundColor = "rgb(50, 50, 50)";
    document.body.style.backgroundColor = "rgb(30, 30, 30)";
    document.body.style.color= "white";
    document.getElementById("footer").style.backgroundColor="rgb(50, 50, 50)";
    document.getElementById("signupForm").style.backgroundColor="rgb(50, 50, 50)";
  }
  const changeToPurpleTheme = () => {
    document.getElementById("header").style.backgroundColor = "rgb(120, 40, 120)";
    document.getElementById("title").style.borderColor = "white";
    document.getElementById("navigation").style.backgroundColor = "rgb(80, 20, 80)";
    document.body.style.backgroundColor = "rgb(120, 40, 120)";
    document.body.style.color= "white";
    document.getElementById("footer").style.backgroundColor="rgb(80, 20, 80)";
    document.getElementById("signupForm").style.backgroundColor="rgb(80, 20, 80)";
  }

  return (
    <div className={style.container} id="navigation">
        <ul>
            <li>
              <a href="http://localhost:3000/">
                Home
              </a>
            </li>
            {
              props.userIsSignedIn === false ?
              <li>
                <a href="http://localhost:3000/signup">
                  Sign-up
                </a>
              </li>:
              <>
              </>
            }
            {
              props.userIsSignedIn === false ?
              <li>
                <a href="http://localhost:3000/signin">
                  Sign-in
                </a>
              </li>:
              <>
              </>
            }
            {
              props.userIsSignedIn === true ?
              <li>
                <a href="#" onClick={() => {props.setUserIsSignedIn(false)}}>
                  Sign-out
                </a>
              </li>:
              <>
              </>
            }
            {
              props.userIsSignedIn === true ?
              <li>
                <a href="http://localhost:3000/profile">
                  Profile
                </a>
              </li>:
              <>
              </>
            }
            {
              props.userIsSignedIn === true ?
              <li>
                <a href="http://localhost:3000/gpi">
                  GPI
                </a>
              </li>:
              <>
              </>
            }
            <li>
                <a href="http://localhost:3000/champions">
                  Champions
                </a>
            </li>
            <li>
                Items
            </li>
            <li>
                Tier List
            </li>
            <li>
              <a href="http://localhost:3000/summoners">
                Summoners
              </a>
            </li>
        </ul>
        
        <button className={style.button3} id="purple" onClick={changeToPurpleTheme}></button>
        <button className={style.button2} id="black" onClick={changeToBlackTheme}></button>
        <button className={style.button1} onClick={changeToWhiteTheme} id="special"></button>
    </div>
  )
}

export default Navigation