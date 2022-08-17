import React from 'react';
import style from "./HomeCSS.module.css";
import image1 from "../images/image1.jfif";

function Home() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Welcome to the League of Pros!
      </h1>
      <img src={image1} alt=""/>
    </div>
  )
}

export default Home;