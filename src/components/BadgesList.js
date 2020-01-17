import React from 'react';
import { Link } from 'react-router-dom';

import tw_logo from '../images/twitter-logo.svg';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="BadgesListItem">
          <Gravatar
            className="Badge__avatar"
            email={this.props.badge.email}
            alt="Avatar"
          />
          <article className="Badges__list-info">
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <div className="Badges__twitter-logo">
              <img src={tw_logo} alt="Twitter-logo" />@
              {this.props.badge.twitter}
            </div>
            {this.props.badge.jobTitle}
          </article>
        </section>
      </React.Fragment>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
