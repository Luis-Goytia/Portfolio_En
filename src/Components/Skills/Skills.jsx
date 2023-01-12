import React from "react";
import { Back } from "./Back";
import { Front } from "./Front";
import { Learning } from "./Learning";
import Styles from "./Skills.module.css";
import { Soft } from "./Soft";

export const Skills = () => {
  return (
    <section className={Styles.skills_section} id="skills">
      <h2 className={Styles.skills_title_gral}>Skills</h2>
      <h3 className={Styles.skills_subtitle_gral}>Technical Skills</h3>

      <div className={Styles.skills_container_grid}>
        <Back />
        <Front />
        <Soft />
        <Learning />
      </div>
    </section>
  );
};
