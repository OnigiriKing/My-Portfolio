import React from "react";
import "./style.css";
import { mainCards } from "./img/imgFunction";


export default function WorksScreen() {

    return (
      <div className="works-screen">
        <a className="image-cards">
          <div className="big-card">
            <img src={mainCards.budgetWebsite} />
          </div>
          <div className="big-card">
            <img src={mainCards.cryptoWebsite} />
          </div>
          <div className="big-card">
            <img src={mainCards.recipeWebsite} />
          </div>
          <div className="big-card">
            {" "}
            <img src={mainCards.portfolioWebsite} />
          </div>

          <div className="small-card"></div>
          <div className="small-card"></div>
          <div className="small-card"></div>
          <div className="small-card"></div>
        </a>
      </div>
    );
}