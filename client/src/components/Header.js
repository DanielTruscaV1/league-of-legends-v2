import React from 'react';
import style from "./HeaderCSS.module.css";

function Header() {
  return (
    <div className={style.container}>
        <h1 className={style.logo}>LOP</h1>
        <div className={style.container2}>
            <h1 className={style.title}>
                League of Pros
            </h1>
            <p className={style.description}>
                Learn how to play League of Legends like a professional player!
            </p>
        </div>
    </div>
  )
}

export default Header;