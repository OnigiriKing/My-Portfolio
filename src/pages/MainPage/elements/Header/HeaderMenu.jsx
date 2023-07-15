import React from "react";
import "./style.css";
import { linkDinSvg, instSvg, gitHubSvg } from "../../../../svg/HeaderSvg";

export default function HeaderMenu() {

    return (
      <div className="header-menu">
      <div>
        <p>
          Onigiri_King
        </p>
      </div>
        <div className="nav-links">
          <p>Home</p>
          <p>About</p>
          <p>Works</p>
        </div>
        <div className="sm-links">
          <a href="https://www.linkedin.com/in/onigiriking/" target="_blank">
            {linkDinSvg}
          </a>
          <a href="https://github.com/OnigiriKing" target="_blank">
            {gitHubSvg}
          </a>
          <a href="https://www.instagram.com/onigiri_king/" target="_blank">
            {instSvg}
          </a>
        </div>
      </div>
    );
}
