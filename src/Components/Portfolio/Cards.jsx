import React, { useState } from 'react';
import { AiOutlineGithub, AiOutlineArrowRight, AiOutlineCloseCircle } from "react-icons/ai";
import Guitar from "../../assets/Guitar2.jpg";
import Funky from "../../assets/FunkyTravel.png";
import Video from "../../assets/Movies.png";
import Weather from "../../assets/Weather.png";
import Styles from "./Portfolio.module.css"; 
import modelGuitar from "../../assets/modelGuitar.png";
import modelFunky from "../../assets/modelFunky.png";
import modelVideo from "../../assets/modelVideo.png";
import modelSailor from "../../assets/modelSailor.png";


export const Cards = () => {
  const [modal, setModal] = useState(0);

  const clickImage = (index) => {
    console.log("Entramos a clickImage");
    setModal(index);
  }

  return (
    <div className={Styles.portfolio_content}>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>_Guitar Code </h2>
          <h3 className={Styles.portfolio_type}>: : : Full Stack : : :</h3>
        <img src={Guitar} alt="Guitar_Code" className={Styles.portfolio_img} onClick={()=> clickImage(1)}/>

        <div>
          <div className={Styles.portfolio_info}>
            <a href="https://github.com/djaroldito/e-guitar-REACT" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
            <a  href="https://e-guitar-react.vercel.app/" target="_blank" className={Styles.portfolio_demo}>Demo <AiOutlineArrowRight className={Styles.portfolio_info_icon}/></a>
          </div>

          <div className={modal === 1 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
            <div className={Styles.portfolio_modal_overlay} onClick={() => clickImage(0)}></div> 
            <AiOutlineCloseCircle className={Styles.portfolio_modal_icon} onClick={() => clickImage(0)}/>
            <div className={Styles.portfolio_modal_content}>
                <img src={modelGuitar} className={Styles.portfolio_modal_img} />
                <h3 className={Styles.porftolio_modal_text}>Componente de Pre-Pago con formulario</h3>
            </div>
          </div> 
          
        </div>

      </div>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>_Funky Travel</h2>
          <h3 className={Styles.portfolio_type}>: : : Full Stack : : :</h3>
        <img src={Funky} alt="Funky_Tavel" className={Styles.portfolio_img} onClick={()=> clickImage(2)}/>

        <div>
          <div className={Styles.portfolio_info}>
            <a  href="https://github.com/a1l1n/Funky-Travel" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
          </div>

          <div className={modal === 2 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
            <div className={Styles.portfolio_modal_overlay} onClick={()=> clickImage(0)}></div> 
            <AiOutlineCloseCircle className={Styles.portfolio_modal_icon} onClick={()=> clickImage(0)}/>
            <div className={Styles.portfolio_modal_content}>
              <img src={modelFunky} className={Styles.portfolio_modal_img} />
              <h3 className={Styles.porftolio_modal_text}>Landing Page</h3>
            </div>
          </div>
        
        </div>
      </div>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>_Video Check</h2>
          <h3 className={Styles.portfolio_type}>: : : Front-End : : :</h3>
        <img src={Video} alt="Video_check" className={Styles.portfolio_img} onClick={()=> clickImage(3)}/>

        <div>
          <div className={Styles.portfolio_info}>
            <a href="https://github.com/a1l1n/Movies-App" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
          </div>

          <div className={modal === 3 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
            <div className={Styles.portfolio_modal_overlay} onClick={()=> clickImage(0)}></div> 
            <AiOutlineCloseCircle className={Styles.portfolio_modal_icon} onClick={()=> clickImage(0)}/>
            <div className={Styles.portfolio_modal_content}>
              <img src={modelVideo} className={Styles.portfolio_modal_img} />
              <h3 className={Styles.porftolio_modal_text}>Resultado de una búsqueda</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>_Sailor Weather App</h2>
          <h3 className={Styles.portfolio_type}>: : : Front-End : : :</h3>
        <img src={Weather} alt="Sailor_weather" className={Styles.portfolio_img} onClick={()=> clickImage(4)}/>

        <div>
          <div className={Styles.portfolio_info}>
            <a  href="https://github.com/a1l1n/Sailor-Weather-App" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
          </div>

          <div className={modal === 4 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
            <div className={Styles.portfolio_modal_overlay} onClick={()=> clickImage(0)}></div> 
            <AiOutlineCloseCircle className={Styles.portfolio_modal_icon} onClick={()=> clickImage(0)}/>
            <div className={Styles.portfolio_modal_content}>
              <img src={modelSailor} className={Styles.portfolio_modal_img} />
              <h3 className={Styles.porftolio_modal_text}> Página principal</h3>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}
