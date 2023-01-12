import React from 'react';
import { BsPatchCheck } from "react-icons/bs";
import Styles from "./Skills.module.css";

export const Front = () => {
  return (
    <div className={Styles.skills_content}>
        <h3 className={Styles.skills_title}>: : Front-End Developer : :</h3>

        <div className={Styles.skills_box}>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>HTML5</h3>
                    <br />
                </div>
            </div>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>CSS</h3>
                    <br />
                </div>
            </div>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>Javascript</h3>
                    <br />
                </div>
            </div>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>React</h3>
                    <br />
                </div>
            </div>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>Redux</h3>
                    <br />
                </div>
            </div>

            <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>Tailwind</h3>
                    <br />
                </div>
              </div>
              
              <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>Bootstrap</h3>
                    <br />
                </div>
              </div>
              <div className={Styles.skills_group}>
                <BsPatchCheck className={Styles.skills_icon}/>
                <div>
                    <h3 className={Styles.skills_name}>Material UI</h3>
                    <br />
                </div>
            </div>

        </div>
    </div>
  )
}
