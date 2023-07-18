import React from "react";
import "./style.css"
import { mainCards, smallCards } from "./img/imgFunction";
import { Link } from "react-router-dom";


export default function WorksScreen() {

    return (
      <div className="works-screen">
        <div className="image-cards">
          <Link to={"/works"}>
            <div>
              <img
                src={smallCards.htmlIcon}
                alt=""
                className="small-card-first"
              ></img>
            </div>

            <div>
              <img
                src={mainCards.budgetWebsite}
                alt="budgetWebsite"
                className="big-card-first"
              />
            </div>

            <div>
              <img
                src={smallCards.jsIcon}
                alt=""
                className="small-card-second"
              ></img>
            </div>

            <div>
              <img
                src={mainCards.cryptoWebsite}
                alt="cryptoWebsite"
                className="big-card-second"
              />
            </div>

            <div>
              <img
                src={smallCards.cssIcon}
                alt=""
                className="small-card-third"
              ></img>
            </div>

            <div>
              <img
                src={mainCards.recipeWebsite}
                alt="recipeWebsite"
                className="big-card-third"
              />
            </div>

            <div>
              <img
                src={smallCards.reactIcon}
                alt=""
                className="small-card-fourth"
              ></img>
            </div>

            <div>
              <img
                src={mainCards.portfolioWebsite}
                alt="portfolioWebsite"
                className="big-card-fourth"
              />
            </div>
          </Link>
        </div>
      </div>
    );
}