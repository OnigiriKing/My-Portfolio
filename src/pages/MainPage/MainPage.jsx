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
      <Parallax pages={3.5}>
        <ParallaxLayer speed={1} factor={1}>
          <StartPage />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} factor={1}>
          <AboutPage />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} factor={2}>
          <WorksScreen />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
