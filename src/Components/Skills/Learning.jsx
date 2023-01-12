import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import Styles from "./Skills.module.css";

export const Learning = () => {
  return (
    <div className={Styles.skills_content}>
      <h3 className={Styles.skills_title}>: : Learning : :</h3>

      <div className={Styles.skills_box}>
        <div className={Styles.skills_group}>
          <BsPatchCheck className={Styles.skills_icon} />
          <div>
            <h3 className={Styles.skills_name}>Angular</h3>
            <h4 className={Styles.skills_level}>TypeScript</h4>
          </div>
        </div>

        <div className={Styles.skills_group}>
          <BsPatchCheck className={Styles.skills_icon} />
          <div>
            <h3 className={Styles.skills_name}>Spring Boot</h3>
            <h4 className={Styles.skills_level}>Java</h4>
          </div>
        </div>

        <div className={Styles.skills_group}>
          <BsPatchCheck className={Styles.skills_icon} />
          <div>
            <h3 className={Styles.skills_name}>Unity</h3>
            <h4 className={Styles.skills_level}>C# C++</h4>
          </div>
        </div>

        <div className={Styles.skills_group}>
          <BsPatchCheck className={Styles.skills_icon} />
          <div>
            <h3 className={Styles.skills_name}>Flutter</h3>
            <h4 className={Styles.skills_level}>Dart</h4>
          </div>
        </div>

        <div className={Styles.skills_group}>
          <BsPatchCheck className={Styles.skills_icon} />
          <div>
            <h3 className={Styles.skills_name}>English</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
