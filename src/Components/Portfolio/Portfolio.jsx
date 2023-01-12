import React from 'react'; 
import { Cards } from "./Cards";
import Styles from "./Portfolio.module.css";

export const Portfolio = () => {
  
  return (
    <section className={Styles.portfolio_section} id="portfolio">
        <h2 className={Styles.portfolio_title}>Portfolio</h2>
        <h3 className={Styles.portfolio_subtitle}>Most recent Works</h3>

        <div className={Styles.portfolio_container_grid}>
            <Cards />
        </div>
    </section>
  )
}
