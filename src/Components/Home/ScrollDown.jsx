import React from 'react';
import { BsChevronDoubleDown } from "react-icons/bs";
import Styles from "./Home.module.css";

export const ScrollDown = () => {
  return (
    <div className={Styles.home_scroll}>
        <a href="#portfolio" className={Styles.home_scroll_button}>
            <BsChevronDoubleDown className={Styles.home_scroll_icon}/>
        </a>
        <span className={Styles.home_scroll_span}>Scroll down</span>
    </div>
  )
}
