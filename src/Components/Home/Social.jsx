import React from 'react';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import Style from "./Home.module.css";

export const Social = () => {
  return (
    <div className={Style.home_social}>
      <a href="https://www.instagram.com/luisgoytia.dev/" className={Style.home_social_icon} target="_blank"><AiOutlineInstagram /></a>

      <a href="https://github.com/Luis-Goytia" className={Style.home_social_icon} target="_blank"><AiOutlineGithub /></a> 

      <a href="https://www.linkedin.com/in/luis-goytia/" className={Style.home_social_icon} target="_blank"><AiOutlineLinkedin /></a>
      
      <a href="https://twitter.com/LuisGoytiaDev" className={Style.home_social_icon} target="_blank"><AiOutlineTwitter /></a>
    </div>
  )
}
