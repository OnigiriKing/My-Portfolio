import React from "react";
import "./style.css";
import { linkDinSvg, instSvg, gitHubSvg, linkDinSvgActive, instSvgActive, gitHubSvgActive } from "../../../../svg/HeaderSvg";

export default function HeaderMenu() {

  const [isHover, setHover] = React.useState({ln: false, git: false, inst: false })

  function changeHover(type, state) {
    setHover({ ...isHover, [type]: state });
  }

  function getMouseHandlers(mediaType) {
    return {
      onMouseEnter: function () {
        changeHover(mediaType, true);
      },
      onMouseLeave: function () {
        changeHover(mediaType, false);
      },
    };
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
            {...getMouseHandlers("ln")}
          >
            {!isHover.ln ? linkDinSvg : linkDinSvgActive}
          </a>
          <a
            href="https://github.com/OnigiriKing"
            target="_blank"
            {...getMouseHandlers("git")}
          >
            {!isHover.git ? gitHubSvg : gitHubSvgActive}
          </a>
          <a
            href="https://www.instagram.com/onigiri_king/"
            target="_blank"
            {...getMouseHandlers("inst")}
          >
            {!isHover.inst ? instSvg : instSvgActive}
          </a>
        </div>
      </div>
    );
}
