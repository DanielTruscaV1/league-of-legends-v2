import React from 'react';
import style from "./FooterCSS.module.css";

function Footer() {
  return (
    <div className={style.container} id="footer">
        <ul>
            <li>
                Cookie policy
            </li>
            <li>
                About Us
            </li>
            <li>
                Press
            </li>
        </ul>
    </div>
  )
}

export default Footer;