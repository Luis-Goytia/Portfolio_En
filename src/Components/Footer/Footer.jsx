import React from 'react';
import Styles from "./Footer.module.css";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
  return (
      <footer className={Styles.footer}>
          <div className={Styles.footer_container}>
            <h1 className={Styles.footer_title}>Luis Goytia</h1>

            <ul className={Styles.footer_list}>
                <li>
                    <a href="#about" className={Styles.footer_link}>About</a>
                </li>
                <li>
                    <a href="#skills" className={Styles.footer_link}>Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className={Styles.footer_link}>Proyects</a>
                </li>
            </ul>

            <div className={Styles.footer_social}>
            <a href="https://twitter.com/LuisGoytiaDev" className={Styles.footer_social_icon} target="_blank"><AiOutlineTwitter /></a>

            <a href="https://www.instagram.com/luisgoytia.dev/" className={Styles.footer_social_icon} target="_blank"><AiOutlineInstagram /></a> 

            <a href="https://www.linkedin.com/in/luis-goytia/" className={Styles.footer_social_icon} target="_blank"><AiOutlineLinkedin /></a>  
              </div>
              <br />
              <h5>Portfolio Designed and Developed by Luis Fernando Goytia Cabezas</h5>
          </div>
          
      </footer>
  )
}
