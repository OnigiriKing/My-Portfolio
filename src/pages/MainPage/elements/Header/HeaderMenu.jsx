import React from "react";
import "./style.css";
import { linkDinSvg, instSvg, gitHubSvg, linkDinSvgActive, instSvgActive, gitHubSvgActive } from "../../../../svg/HeaderSvg";

export default function HeaderMenu() {

  const [isHover, setHover] = React.useState({ln: false, git: false, inst: false })

  function changeHover(type, state) {
    setHover({ ...isHover, [type]: state });
  }

    return (
      <div className="header-menu">
        <div>
          <p>Onigiri_King</p>
        </div>
        <div className="nav-links">
          <p>Home</p>
          <p>About</p>
          <p>Works</p>
        </div>
        <div className="sm-links">
          <a
            href="https://www.linkedin.com/in/onigiriking/"
            target="_blank"
            onMouseEnter={() => changeHover("ln", true)}
            onMouseLeave={() => changeHover("ln", false)}
          >
            {!isHover.ln ? linkDinSvg : linkDinSvgActive}
          </a>
          <a
            href="https://github.com/OnigiriKing"
            target="_blank"
            onMouseEnter={() => changeHover("git", true)}
            onMouseLeave={() => changeHover("git", false)}
          >
            {!isHover.git ? gitHubSvg : gitHubSvgActive}
          </a>
          <a
            href="https://www.instagram.com/onigiri_king/"
            target="_blank"
            onMouseEnter={() => changeHover("inst", true)}
            onMouseLeave={() => changeHover("inst", false)}
          >
            {!isHover.inst ? instSvg : instSvgActive}
          </a>
        </div>
      </div>
    );
}
