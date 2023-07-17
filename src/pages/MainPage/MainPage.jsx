import React from "react";
import "./style.css";
import StartPage from "./elements/StartPage/StartPage";
import HeaderMenu from "./elements/Header/HeaderMenu";
import AboutPage from "./elements/AboutPage/About";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import WorksScreen from "./elements/MyWorks/Works";

export default function MainPage() {
  return (
    <div className="main-page">
          <HeaderMenu />
          <StartPage />
          <AboutPage />
          <WorksScreen />
    </div>
  );
}
