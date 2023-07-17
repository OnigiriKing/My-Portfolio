import React from "react";
import "./style.css"
import { mainCards } from "./img/imgFunction";
import { Link } from "react-router-dom";


export default function WorksScreen() {

    return (
      <div className="works-screen">
        <div className="image-cards">
          <Link to={"/works"}>
            <div className="big-card-second">
              <img
                src={mainCards.budgetWebsite}
                alt="budgetWebsite"
                className="big-card"
              />
            </div>
            <div className="big-card-second">
              <img
                src={mainCards.cryptoWebsite}
                alt="cryptoWebsite"
                className="big-card"
              />
            </div>
            <div className=" big-card-third">
              <img
                src={mainCards.recipeWebsite}
                alt="recipeWebsite"
                className="big-card"
              />
            </div>
            <div className="big-card-fourth">
              <img
                src={mainCards.portfolioWebsite}
                alt="portfolioWebsite"
                className="big-card"
              />
            </div>

            <div className="small-card"></div>
            <div className="small-card"></div>
            <div className="small-card"></div>
            <div className="small-card"></div>
          </Link>
        </div>
      </div>
    );
}