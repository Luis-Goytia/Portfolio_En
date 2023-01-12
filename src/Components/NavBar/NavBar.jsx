import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileDone,
  AiOutlinePicture,
  AiOutlineSend,
  AiOutlineClose,
  AiOutlineAppstore,
} from "react-icons/ai";
import { BsBriefcase, BsCircleFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import Styles from "./NavBar.module.css";

export const NavBar = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <div className={Styles.nav_logo}>
          <BsCircleFill className={Styles.nav_logo_icon} />
          Luis Goytia
        </div>
        <div className={Toggle ? Styles.show_menu : Styles.nav_menu}>
          <ul className={Styles.nav_menu_grid}>
            <li className={Styles.nav_menu_item}>
              <AiOutlineHome className={Styles.nav_menu_icon} />
              <a href="#home" className={Styles.nav_menu_link}>
                {" "}
                Home
              </a>
            </li>

            <li className={Styles.nav_menu_item}>
              <AiOutlinePicture className={Styles.nav_menu_icon} />
              <a href="#portfolio" className={Styles.nav_menu_link}>
                {" "}
                Portfolio
              </a>
            </li>

            <li className={Styles.nav_menu_item}>
              <AiOutlineUser className={Styles.nav_menu_icon} />
              <a href="#about" className={Styles.nav_menu_link}>
                {" "}
                About
              </a>
            </li>

            <li className={Styles.nav_menu_item}>
              <AiOutlineFileDone className={Styles.nav_menu_icon} />
              <a href="#skills" className={Styles.nav_menu_link}>
                {" "}
                Skills
              </a>
            </li>

            {/*                     <li className={Styles.nav_menu_item}>
                        <BsBriefcase className={Styles.nav_menu_icon}/>
                        <a href='#services' className={Styles.nav_menu_link}> Servicios 
                        </a>
                    </li> */}

            <li className={Styles.nav_menu_item}>
              <AiOutlineSend className={Styles.nav_menu_icon} />
              <a href="#contact" className={Styles.nav_menu_link}>
                {" "}
                Contact
              </a>
            </li>
            <li className={Styles.nav_menu_item}>
              <div className={Styles.nav_leguaje}>
                <BiWorld />
                <a href="#contact">Spanish</a>
              </div>
            </li>
          </ul>
          <AiOutlineClose
            className={Styles.nav_close}
            onClick={() => showMenu(!Toggle)}
          />
        </div>
        <div className={Styles.nav_toggle} onClick={() => showMenu(!Toggle)}>
          <AiOutlineAppstore />
        </div>
      </nav>
    </header>
  );
};
