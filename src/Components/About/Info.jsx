import React from 'react';
import { HiOutlineLightBulb, HiOutlineBriefcase } from "react-icons/hi2";
import Styles from "./About.module.css";

export const Info = () => {
  return (
    <div className={Styles.about_info_grid}>
        <div className={Styles.about_box}>
            <HiOutlineLightBulb className={Styles.about_info_icon} />
            <h3 className={Styles.about_info_title}>Experience</h3>
            <span className={Styles.about_info_subtitle}>1 year</span>
        </div>

        <div className={Styles.about_box}>
            <HiOutlineBriefcase className={Styles.about_info_icon}/>
            <h3 className={Styles.about_info_title}>Proyects</h3>
            <span className={Styles.about_info_subtitle}>[... 4]</span>
        </div>
    </div>
  )
}
