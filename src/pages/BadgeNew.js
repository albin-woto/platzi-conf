import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Estanislao Albin"
                lastName="Wotoszyn Grillo"
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                jobTitle="Senior Fullstack"
                twitter="tadeo_w"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
