import React from 'react'
import style from "./NavigationCSS.module.css";

function Navigation() {
  return (
    <div className={style.container}>
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
        <select>
            <option>White theme</option>
            <option>Black theme</option>
            <option>Purple theme</option>
        </select>
    </div>
  )
}

export default Navigation