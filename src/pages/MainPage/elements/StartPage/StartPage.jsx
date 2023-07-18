import React from "react";
import "./style.css";
import ArrorSvg from "../../../../svg/MainArror";
import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div className="start-screen">
      <div className="start-h1h2">
        <h1>ZAMYSHLIAEV NIKITA</h1>
      </div>
      <div>
        <Link className="main-page-links" to={"/works"}>
          My projects
        </Link>
        <Link className="main-page-links" to={"/contacts"}>
          Hire me
        </Link>
      </div>
      <ArrorSvg width={100} />
    </div>
  );
}
