import React, { useState } from 'react';
import { AiOutlineGithub, AiOutlineArrowRight, AiOutlineCloseCircle } from "react-icons/ai";
import Youpet from "../../assets/youpet.png";
import Pokemon from "../../assets/pokemon.jpeg";
import Video from "../../assets/Movies.png";
import Weather from "../../assets/Weather.png";
import Styles from "./Portfolio.module.css"; 
import modelYoupet from "../../assets/modelYoupet.png";
import modelPokemon from "../../assets/modelPokemon.png";
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
        <h2 className={Styles.portfolio_card_title}>Youpet</h2>
          <h3 className={Styles.portfolio_type}>: : : Full Stack : : :</h3>
        <img src={Youpet} alt="Youpet" className={Styles.portfolio_img} onClick={()=> clickImage(1)}/>

        <div>
          <div className={Styles.portfolio_info}>
            <a href="https://github.com/Luis-Goytia/YouPet" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
            <a  href="https://youpet.vercel.app/" target="_blank" className={Styles.portfolio_demo}>Demo <AiOutlineArrowRight className={Styles.portfolio_info_icon}/></a>
          </div>

          <div className={modal === 1 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
            <div className={Styles.portfolio_modal_overlay} onClick={() => clickImage(0)}></div> 
            <AiOutlineCloseCircle className={Styles.portfolio_modal_icon} onClick={() => clickImage(0)}/>
            <div className={Styles.portfolio_modal_content}>
                <img src={modelYoupet} className={Styles.portfolio_modal_img} />
                <h3 className={Styles.porftolio_modal_text}>App to take appointments for your pet with your favorite vet.</h3>
            </div>
          </div> 
          
        </div>

      </div>

      <div className={Styles.portfolio_group}>
        <h2 className={Styles.portfolio_card_title}>Pokemon App</h2>
          <h3 className={Styles.portfolio_type}>: : : Full Stack : : :</h3>
        <img src={Pokemon} alt="Pokemon_App" className={Styles.portfolio_img} onClick={()=> clickImage(2)}/>

        <div>
          <div className={Styles.portfolio_info}>
            <a  href="https://github.com/Luis-Goytia/PI-Pokemon" target="_blank" className={Styles.portfolio_code}><AiOutlineGithub className={Styles.portfolio_info_icon}/>Code</a>
          </div>

          <div className={modal === 2 ? Styles.portfolio_modal_active : Styles.portfolio_modal}>
            <div className={Styles.portfolio_modal_overlay} onClick={()=> clickImage(0)}></div> 
            <AiOutlineCloseCircle className={Styles.portfolio_modal_icon} onClick={()=> clickImage(0)}/>
            <div className={Styles.portfolio_modal_content}>
              <img src={modelPokemon} className={Styles.portfolio_modal_img} />
              <h3 className={Styles.porftolio_modal_text}>SPA about listing and searching for Pokemons</h3>
            </div>
          </div>
        
        </div>
      </div>
{/* 
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
      </div> */}

    </div>
  )
}
