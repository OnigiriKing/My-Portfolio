import React from "react";
import "./style.css"
import { mainCards } from "./img/imgFunction";
import { Link } from "react-router-dom";


export default function WorksScreen() {

    return (
      <div className="works-screen">
        <div className="image-cards">
          <Link to={"/works"}>
            <div>
              <img
                src={mainCards.budgetWebsite}
                alt="budgetWebsite"
                className="big-card big-card-first"
              />
            </div>
            <div>
              <img
                src={mainCards.cryptoWebsite}
                alt="cryptoWebsite"
                className="big-card big-card-second"
              />
            </div>
            <div>
              <img
                src={mainCards.recipeWebsite}
                alt="recipeWebsite"
                className="big-card big-card-third"
              />
            </div>
            <div>
              <img
                src={mainCards.portfolioWebsite}
                alt="portfolioWebsite"
                className="big-card big-card-fourth"
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