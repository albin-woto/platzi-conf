import React from "react";

import tw_logo from "../images/twitter-logo.svg";
import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="Badges__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />
        <article className="Badges__list-info">
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <div className="Badges__twitter-logo">
            <img src={tw_logo} alt="Twitter-logo" />@{this.props.badge.twitter}
          </div>
          {this.props.badge.jobTitle}
        </article>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <BadgesListItem badge={badge} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
