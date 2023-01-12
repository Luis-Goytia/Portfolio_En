import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import Styles from "./Skills.module.css";

export const Soft = () => {
  return (
    <div className={Styles.skills_content}>
      <h3 className={Styles.skills_title}>: : Soft Skills : :</h3>

      <div className={Styles.skills_box}>
        <div className={Styles.skills_group}>
          <BsPatchCheck className={Styles.skills_icon} />
          <div>
            <h3 className={Styles.skills_name}>SCRUM</h3>
          </div>
        </div>

        <div className={Styles.skills_group}>
          <BsPatchCheck className={Styles.skills_icon} />
          <div>
            <h3 className={Styles.skills_name}>Extreme</h3>
            <h4 className={Styles.skills_name}>Programming</h4>
            <br />
          </div>
        </div>

        <div className={Styles.skills_group}>
          <BsPatchCheck className={Styles.skills_icon} />
          <div>
            <h3 className={Styles.skills_name}>Customer Service</h3>
            <br />
          </div>
        </div>

        <div className={Styles.skills_group}>
          <BsPatchCheck className={Styles.skills_icon} />
          <div>
            <h3 className={Styles.skills_name}>Project Manager</h3>
            <br />
          </div>
        </div>

        <div className={Styles.skills_group}>
          <BsPatchCheck className={Styles.skills_icon} />
          <div>
            <h3 className={Styles.skills_name}>English</h3>
            <h4 className={Styles.skills_level}>A2 Elementary</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
