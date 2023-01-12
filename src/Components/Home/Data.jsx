import React from 'react';
import { AiOutlineSend } from "react-icons/ai";
import Styles from "./Home.module.css";

export const Data = () => {
  return (
    <div className={Styles.home_data}>
        <h1 className={Styles.home_title}>Luis Goytia</h1>
        <div className={Styles.home_subtitle}>
            <h3>Full Stack Developer</h3>
        </div>
        <p className={Styles.home_presentation}>Hi, i am a skilled and experienced web developer with a passion for creating intuitive and visually appealing websites.Come and see my projects...</p>
        
        <div  className={Styles.home_button}>
            <a href="#contact" className={Styles.home_button_a}>
            Write me
                <AiOutlineSend className={Styles.home_button_icon}/>
            </a>
        </div>
    </div>
  )
}
